package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkInfoDto;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkSearchDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkTypeRepo;
import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import com.ssafy.sulnaeeum.model.mypage.repo.LikeDrinkRepo;
import com.ssafy.sulnaeeum.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DrinkService {

    @Autowired
    DrinkRepo drinkRepo;

    @Autowired
    DrinkTypeRepo drinkTypeRepo;

    @Autowired
    LikeDrinkRepo likeDrinkRepo;

    @Autowired
    UserService userService;

    // 모든 전통주 조회
    @Transactional
    public List<DrinkInfoDto> getAllDrink(String drinkTypeName, String kakaoId, String sortType) {
        List<Drink> drinkList;

        // 카테고리 분류
        if(drinkTypeName.equals("전체")) {
            drinkList = drinkRepo.findAll(); // 전체 조회
        } else {
            Optional<DrinkType> drinkType = drinkTypeRepo.findByDrinkTypeName(drinkTypeName); // 주종 id 찾기
            if(drinkType.isEmpty()) {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND); // 존재하지 않는 주종일 경우
            }
            drinkList = drinkRepo.findByDrinkType(drinkType.get().getDrinkTypeId()); // 카테고리별 조회
        }

        // 정렬 (인기, 낮은도수, 높은도수의 경우 같은 값에 대해서는 이름으로 정렬하도록 함)
        List<DrinkInfoDto> drinkInfoDtoList = drinkList.stream().map(DrinkInfoDto::new).collect(Collectors.toList());
        if(sortType.equals("이름")) {
            drinkInfoDtoList = drinkInfoDtoList.stream().sorted(Comparator.comparing(DrinkInfoDto::getDrinkName).thenComparing(DrinkInfoDto::getDrinkName)).collect(Collectors.toList());
        } else if(sortType.equals("인기")) {
            drinkInfoDtoList = drinkInfoDtoList.stream().sorted(Comparator.comparing(DrinkInfoDto::getPopularity, Comparator.reverseOrder()).thenComparing(DrinkInfoDto::getDrinkName)).collect(Collectors.toList());
        } else if(sortType.equals("낮은도수")) {
            drinkInfoDtoList = drinkInfoDtoList.stream().sorted(Comparator.comparing(DrinkInfoDto::getDrinkLevel).thenComparing(DrinkInfoDto::getDrinkName)).collect(Collectors.toList());
        } else if(sortType.equals("높은도수")) {
            drinkInfoDtoList = drinkInfoDtoList.stream().sorted(Comparator.comparing(DrinkInfoDto::getDrinkLevel, Comparator.reverseOrder()).thenComparing(DrinkInfoDto::getDrinkName)).collect(Collectors.toList());
        }

        // 회원 접근일 때 (찜 여부 확인)
        if(kakaoId != null) {
            for(DrinkInfoDto drinkInfoDto: drinkInfoDtoList) {
                Long userId = userService.findUserId(kakaoId);
                Optional<LikeDrink> likeDrink = likeDrinkRepo.findLikeInfo(drinkInfoDto.getDrinkId(), userId);
                if(likeDrink.isPresent()) {
                    drinkInfoDto.setLike(true);
                }
            }
        }

        return drinkInfoDtoList;
    }

    // drinkId로 DrinkDto 가져오기
    public DrinkDto findDrink(Long drinkId) {
        Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
        if(drink.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        return drink.get().toDto();
    }
}
