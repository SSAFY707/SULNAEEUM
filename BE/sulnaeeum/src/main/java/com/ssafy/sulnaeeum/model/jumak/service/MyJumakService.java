package com.ssafy.sulnaeeum.model.jumak.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.jumak.dto.LikeJumakDto;
import com.ssafy.sulnaeeum.model.jumak.dto.LikeJumakListDto;
import com.ssafy.sulnaeeum.model.jumak.entity.DrinkJumak;
import com.ssafy.sulnaeeum.model.jumak.entity.MyJumak;
import com.ssafy.sulnaeeum.model.jumak.repo.DrinkJumakRepo;
import com.ssafy.sulnaeeum.model.jumak.repo.MyJumakRepo;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.repo.UserRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class MyJumakService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    MyJumakRepo myJumakRepo;

    @Autowired
    DrinkJumakRepo drinkJumakRepo;

    // 찜한 가게 조회
    @Transactional
    public LikeJumakListDto getLikeJumak(String kakaoId) {

        User user = userRepo.findByKakaoId(kakaoId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));

        // 찜한 가게 조회
        List<MyJumak> myJumaks = myJumakRepo.findByUserId(user.getUserId());

        List<LikeJumakDto> likeJumakListDtos = new ArrayList<>();
        for (MyJumak myJumak : myJumaks) {

            LikeJumakDto likeJumakDto = myJumak.toLikeJumakDto();

            // 찜한 가게에서 파는 술 조회
            List<String> storeDrink = new ArrayList<>();
            List<String> storeDrinkImage = new ArrayList<>();
            List<String> storeDrinkType = new ArrayList<>();

            List<DrinkJumak> drinkJumaks = drinkJumakRepo.findByJumakId(myJumak.getJumak().getJumakId());
            log.info(myJumak.getJumak().getJumakId().toString());

            for(int i=0;i<3;i++){
                if(drinkJumaks.size()<=i) break;
                storeDrink.add(drinkJumaks.get(i).getDrink().getDrinkName());
                storeDrinkImage.add(drinkJumaks.get(i).getDrink().getDrinkImage());
                storeDrinkType.add(drinkJumaks.get(i).getDrink().getDrinkType().getDrinkTypeName());
            }

            likeJumakDto.setStoreDrink(storeDrink);
            likeJumakDto.setStoreDrinkImage(storeDrinkImage);
            likeJumakDto.setStoreDrinkType(storeDrinkType);
            likeJumakListDtos.add(likeJumakDto);
        }

        return LikeJumakListDto.builder().userPreferenceStore(likeJumakListDtos).build();
    }
}
