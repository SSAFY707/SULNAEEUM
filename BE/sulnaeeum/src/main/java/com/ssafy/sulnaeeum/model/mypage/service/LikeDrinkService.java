package com.ssafy.sulnaeeum.model.mypage.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.service.DrinkService;
import com.ssafy.sulnaeeum.model.mypage.dto.LikeDrinkDto;
import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import com.ssafy.sulnaeeum.model.mypage.repo.LikeDrinkRepo;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class LikeDrinkService {

    @Autowired
    LikeDrinkRepo likeDrinkRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    DrinkRepo drinkRepo;

    @Autowired
    DrinkService drinkService;

    // 전통주 찜
    @Transactional
    public String switchLikeDrink(Long drinkId, String kakaoId) {
        Long userId;
        Optional<User> user = userRepo.findByKakaoId(kakaoId);
        if(!user.isPresent()) {
            throw new CustomException(CustomExceptionList.MEMBER_NOT_FOUND); // 해당하는 회원이 없을 경우
        }
        userId = user.get().getUserId();

        Optional<LikeDrink> likeDrink = likeDrinkRepo.findLikeInfo(drinkId, userId);
        if(!likeDrink.isPresent()) { // 이전에 찜 하지 않았을 경우
            Optional<Drink> drinkTmp = drinkRepo.findByDrinkId(drinkId);
            Optional<User> userTmp = userRepo.findByKakaoId(kakaoId);
            if(!drinkTmp.isPresent()) {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
            } else if(!userTmp.isPresent()) {
                throw new CustomException(CustomExceptionList.MEMBER_NOT_FOUND);
            }

            // DB에 찜 내용 저장 (찜 한 회원과 전통주)
            LikeDrinkDto likeDrinkDto = new LikeDrinkDto(drinkTmp.get(), userTmp.get());
            likeDrinkRepo.save(likeDrinkDto.toEntity());

            // 해당 술의 찜 수 증가
            cntLike(true, drinkId);

            return "찜 성공";
        } else { // 이전에 찜 했을 경우
            // 기존에 저장되어있던 찜 내용 삭제
            likeDrinkRepo.deleteById(likeDrink.get().getLikeDrinkId());

            // 해당 술의 찜 수 감소
            cntLike(false, drinkId);

            return "찜 취소";
        }
    }

    // 전통주의 찜 개수 증감
    public void cntLike(boolean plus, Long drinkId) {
        DrinkDto drinkDto = drinkService.findDrink(drinkId);
        if(plus) {
            drinkDto.setLikeCnt(drinkDto.getLikeCnt() + 1);
        } else {
            drinkDto.setLikeCnt(drinkDto.getLikeCnt() - 1);
        }
        drinkRepo.save(drinkDto.toEntity());
    }
}
