package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.dto.ReviewDto;
import com.ssafy.sulnaeeum.model.drink.dto.ReviewRequestDto;
import com.ssafy.sulnaeeum.model.drink.dto.ReviewResponseDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.Review;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.ReviewRepo;
import com.ssafy.sulnaeeum.model.mypage.repo.MyDrinkRepo;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.repo.UserRepo;
import com.ssafy.sulnaeeum.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    MyDrinkRepo myDrinkRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    DrinkRepo drinkRepo;

    @Autowired
    ReviewRepo reviewRepo;

    @Autowired
    DrinkService drinkService;

    @Autowired
    UserService userService;

    // 리뷰 작성 or 수정 (전통주 클리어)
    @Transactional
    public String writeReview(Long drinkId, String kakaoId, ReviewRequestDto reviewRequestDto) {
        String result;
        Long userId = userService.findUserId(kakaoId);

        // 해당 전통주를 해당 회원이 이미 클리어한 경우 - 수정 / 아직 클리어하지 않은 경우 - 작성
        Optional<Review> review = reviewRepo.findMyReview(userId, drinkId);
        Review resultReview;
        if(review.isPresent()) {
            resultReview = review.get();
            result = "update";
        } else {
            Optional<User> user = userRepo.findByKakaoId(kakaoId);
            Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
            if(user.isEmpty() || drink.isEmpty()) {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
            }

            resultReview = reviewRequestDto.toEntity(user.get().toDto(), drink.get().toDto());
            result = "insert";

            // 리뷰 개수 +1
            cntReview(true, drinkId);
        }

        reviewRepo.save(resultReview);
        return "review " + result + " success";
    }

    // 리뷰 삭제
    @Transactional
    public String deleteReview(Long drinkId, String kakaoId) {
        Long userId = userService.findUserId(kakaoId);

        // 해당 전통주에 대한 해당 회원의 리뷰가 없을 경우
        Optional<Review> review = reviewRepo.findMyReview(userId, drinkId);
        if(review.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }

        Review reviewResult = review.get();
        reviewRepo.delete(reviewResult);

        // 리뷰 개수 -1
        cntReview(false, drinkId);

        return "review delete success";
    }

    // 전통주의 클리어 개수 증감
    @Transactional
    public void cntReview(boolean plus, Long drinkId) {
        DrinkDto drinkDto = drinkService.findDrink(drinkId);
        if(plus) {
            drinkDto.setReviewCnt(drinkDto.getReviewCnt() + 1);
        } else {
            drinkDto.setReviewCnt(drinkDto.getReviewCnt() - 1);
        }
        drinkRepo.save(drinkDto.toEntity());
    }

    // 해당 전통주의 내 리뷰 조회
    @Transactional
    public ReviewResponseDto getMyReview(Long drinkId, String kakaoId) {
        Long userId = userService.findUserId(kakaoId);
        Optional<Review> review = reviewRepo.findMyReview(userId, drinkId);
        if(review.isEmpty()) {
            return null;
        } else {
            return review.get().toDto();
        }
    }

    // 해당 전통주의 리뷰 모두 조회
    @Transactional
    public List<ReviewResponseDto> getAllReview(Long drinkId) {
        List<Review> reviewList = reviewRepo.findAllByDrinkId(drinkId);
        return reviewList.stream().map(ReviewResponseDto::new).collect(Collectors.toList());
    }
}
