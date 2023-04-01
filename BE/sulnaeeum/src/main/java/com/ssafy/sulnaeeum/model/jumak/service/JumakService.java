package com.ssafy.sulnaeeum.model.jumak.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.jumak.dto.DrinkJumakDto;
import com.ssafy.sulnaeeum.model.jumak.dto.JumakInfoDto;
import com.ssafy.sulnaeeum.model.jumak.dto.MyJumakDto;
import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import com.ssafy.sulnaeeum.model.jumak.entity.MyJumak;
import com.ssafy.sulnaeeum.model.jumak.repo.DrinkJumakRepo;
import com.ssafy.sulnaeeum.model.jumak.repo.JumakRepo;
import com.ssafy.sulnaeeum.model.jumak.repo.MyJumakRepo;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.repo.UserRepo;
import com.ssafy.sulnaeeum.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class JumakService {

    @Autowired
    JumakRepo jumakRepo;

    @Autowired
    DrinkJumakRepo drinkJumakRepo;

    @Autowired
    DrinkRepo drinkRepo;

    @Autowired
    UserService userService;

    @Autowired
    MyJumakRepo myJumakRepo;

    @Autowired
    UserRepo userRepo;

    // 식당 정보 저장
    @Transactional
    public String insertJumak(JumakInfoDto jumakInfoDto) {
        jumakRepo.save(jumakInfoDto.toEntity());
        Optional<Jumak> jumak = jumakRepo.findLastJumak();
        if(jumak.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }

        for(Long drinkId: jumakInfoDto.getDrink()) {
            Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
            if(drink.isEmpty()) {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
            }

            DrinkJumakDto drinkJumakDto = new DrinkJumakDto();
            drinkJumakDto.setJumakDto(jumak.get().toDto());
            drinkJumakDto.setDrinkDto(drink.get().toDto());
            drinkJumakRepo.save(drinkJumakDto.toEntity());
        }

        return "insert jumak success";
    }

    // 전통주 찜
    public String likeJumak(String kakaoId, Long jumakId) {
        Long userId = userService.findUserId(kakaoId);

        Optional<MyJumak> myJumak = myJumakRepo.findMyJumak(userId, jumakId);
        if(myJumak.isEmpty()) { // 이전에 찜 하지 않았을 경우
            Optional<Jumak> jumakTmp = jumakRepo.findByJumakId(jumakId);
            Optional<User> userTmp = userRepo.findByUserId(userId);
            if(jumakTmp.isEmpty()) {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
            } else if(userTmp.isEmpty()) {
                throw new CustomException(CustomExceptionList.MEMBER_NOT_FOUND);
            }

            // DB에 찜 내용 저장 (찜 한 회원과 전통주 식당)
            MyJumakDto myJumakDto = new MyJumakDto(jumakTmp.get().toDto(), userTmp.get().toDto());
            myJumakRepo.save(myJumakDto.toEntity());

            return "like success";
        } else { // 이전에 찜 했을 경우
            // 기존에 저장되어있던 찜 내용 삭제
            myJumakRepo.deleteById(myJumak.get().getMyJumakId());

            return "like cancel";
        }
    }
}
