package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkInfoDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DrinkService {

    @Autowired
    DrinkRepo drinkRepo;

    @Autowired
    DrinkTypeRepo drinkTypeRepo;

    // 모든 전통주 조회
    @Transactional
    public List<DrinkInfoDto> getAllDrink(String drinkTypeName) {
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
            DrinkInfoDto drinkInfoDto = new DrinkInfoDto(drink);
            drinkInfoDtoList.add(drinkInfoDto);
        }

        return drinkInfoDtoList;
    }
}
