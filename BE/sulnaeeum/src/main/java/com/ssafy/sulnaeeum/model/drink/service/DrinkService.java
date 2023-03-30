package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.*;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
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

        List<DrinkInfoDto> drinkInfoDtoList;
        List<Drink> drinkList;
        if(drinkTypeId == 0) {
            switch (sortType) {
                case "이름" :
                    drinkList = drinkRepo.findAllSortByName();
                    break;
                case "인기" :
                    drinkList = drinkRepo.findAllSortByPopularity();
                    break;
                case "낮은도수" :
                    drinkList = drinkRepo.findAllSortByLevelAsc();
                    break;
                case "높은도수" :
                    drinkList = drinkRepo.findAllSortByLevelDesc();
                    break;
                default:
                    throw new CustomException(CustomExceptionList.SORT_TYPE_NOT_FOUND);
            }
        } else if(drinkTypeId > 0 && drinkTypeId < 6) {
            switch (sortType) {
                case "이름" :
                    drinkList = drinkRepo.findSortByName(drinkTypeId);
                    break;
                case "인기" :
                    drinkList = drinkRepo.findSortByPopularity(drinkTypeId);
                    break;
                case "낮은도수" :
                    drinkList = drinkRepo.findSortByLevelAsc(drinkTypeId);
                    break;
                case "높은도수" :
                    drinkList = drinkRepo.findSortByLevelDesc(drinkTypeId);
                    break;
                default:
                    throw new CustomException(CustomExceptionList.SORT_TYPE_NOT_FOUND);
            }
        } else {
            throw new CustomException(CustomExceptionList.CATEGORY_NOT_FOUND);
        }
        drinkInfoDtoList = drinkList.stream().map(DrinkInfoDto::new).collect(Collectors.toList());

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
