package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkInfoDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkTypeRepo;
import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import com.ssafy.sulnaeeum.model.mypage.repo.LikeDrinkRepo;
import com.ssafy.sulnaeeum.model.user.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DrinkService {

    DrinkRepo drinkRepo;

    DrinkTypeRepo drinkTypeRepo;

    LikeDrinkRepo likeDrinkRepo;

    UserService userService;

    // 모든 전통주 조회
    @Transactional
    public List<DrinkInfoDto> getAllDrink(String drinkTypeName, String kakaoId) {
        List<Drink> drinkList;

        // 카테고리 분류
        if(drinkTypeName.equals("전체")) {
            drinkList = drinkRepo.findAll(); // 전체 조회 & 이름 순 정렬
        } else {
            Optional<DrinkType> drinkType = drinkTypeRepo.findByDrinkTypeName(drinkTypeName); // 주종 id 찾기
            if(drinkType.isPresent()) {
                drinkList = drinkRepo.findByDrinkTypeId(drinkType.get().getDrinkTypeId()); // 카테고리별 조회 & 이름 순 정렬
            } else {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND); // 존재하지 않는 주종일 경우
            }
        }

        // 필요한 데이터만 선별
        List<DrinkInfoDto> drinkInfoDtoList = new ArrayList<>();
        for(Drink drink: drinkList) {
            DrinkInfoDto drinkInfoDto = new DrinkInfoDto(drink); // 술 정보 중 기본 정보만 선별

            // 해당 회원의 해당 술 찜 여부 정보 추가
            Optional<LikeDrink> likeDrink = likeDrinkRepo.findLikeInfo(drinkInfoDto.getDrinkId(), userService.findUserId(kakaoId));
            if(likeDrink.isPresent()) {
                drinkInfoDto.setLike(true);
            } else {
                drinkInfoDto.setLike(false);
            }

            drinkInfoDtoList.add(drinkInfoDto); // 전체 술 정보 리스트에 현재 술 정보 추가
        }

        return drinkInfoDtoList; // 전체 술 정보 반환
    }
}
