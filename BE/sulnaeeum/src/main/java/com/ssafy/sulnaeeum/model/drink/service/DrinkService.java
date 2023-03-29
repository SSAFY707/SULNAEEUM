package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.*;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import com.ssafy.sulnaeeum.model.drink.entity.Review;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkTypeRepo;
import com.ssafy.sulnaeeum.model.drink.entity.LikeDrink;
import com.ssafy.sulnaeeum.model.drink.repo.LikeDrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.ReviewRepo;
import com.ssafy.sulnaeeum.model.jumak.dto.JumakDto;
import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import com.ssafy.sulnaeeum.model.jumak.repo.JumakRepo;
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

    @Autowired
    ReviewRepo reviewRepo;

    @Autowired
    JumakRepo jumakRepo;

    // 모든 전통주 조회
    @Transactional
    public List<DrinkInfoDto> getAllDrink(Long drinkTypeId, String kakaoId, String sortType) {
        List<Drink> drinkList;

        // 카테고리 분류
        if(drinkTypeId == 0) {
            drinkList = drinkRepo.findAll(); // 전체 조회
        } else {
            Optional<DrinkType> drinkType = drinkTypeRepo.findByDrinkTypeId(drinkTypeId); // 주종 id 찾기
            if(drinkType.isEmpty()) {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND); // 존재하지 않는 주종일 경우
            }
            drinkList = drinkRepo.findByDrinkTypeId(drinkTypeId); // 카테고리별 조회
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

        // 회원 접근일 때
        if(kakaoId != null) {
            for(DrinkInfoDto drinkInfoDto: drinkInfoDtoList) {
                Long userId = userService.findUserId(kakaoId);
                Long drinkId = drinkInfoDto.getDrinkId();

                // 찜 여부 세팅
                Optional<LikeDrink> likeDrink = likeDrinkRepo.findLikeInfo(drinkId, userId);
                if(likeDrink.isPresent()) {
                    drinkInfoDto.setLike(true);
                }

                // 클리어 여부 세팅
                Optional<Review> review = reviewRepo.findMyReview(userId, drinkId);
                if(review.isPresent()) {
                    drinkInfoDto.setClear(true);
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

    // 전통주 상세 페이지의 모든 정보 가져오기
    @Transactional
    public DrinkDetailPageDto getDrinkDetailPage(Long drinkId, String kakaoId) {
        DrinkDetailPageDto drinkDetailPageDto = new DrinkDetailPageDto();

        // 전통주 기본 정보
        Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
        if(drink.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        DrinkDetailDto drinkDetailDto = drink.get().toDrinkDetailDto();

        // 회원 접근일 때
        if(kakaoId != null) {
            Long userId = userService.findUserId(kakaoId);

            // 찜 여부 세팅
            Optional<LikeDrink> likeDrink = likeDrinkRepo.findLikeInfo(drinkId, userId);
            if(likeDrink.isPresent()) {
                drinkDetailDto.setLike(true);
            }

            // 클리어 여부 세팅
            Optional<Review> review = reviewRepo.findMyReview(userId, drinkId);
            if(review.isPresent()) {
                drinkDetailDto.setClear(true);
            }
        }

        drinkDetailPageDto.setDrinkDetailDto(drinkDetailDto);

        // 리뷰 세팅
        List<Review> reviewList = reviewRepo.findAllByDrinkId(drinkId);
        List<ReviewResponseDto> reviewResponseDtoList = reviewList.stream().map(ReviewResponseDto::new).collect(Collectors.toList());
        drinkDetailPageDto.setReviewResponseDto(reviewResponseDtoList);

        // 술집 세팅
        List<Jumak> jumakList = jumakRepo.findByDrink(drinkId);
        List<JumakDto> jumakDtoList = jumakList.stream().map(JumakDto::new).collect(Collectors.toList());
        drinkDetailPageDto.setJumakDto(jumakDtoList);

        // 비슷한 술 추천 필요 !! (Flask에서 받아와야 함)

        return drinkDetailPageDto;
    }
}
