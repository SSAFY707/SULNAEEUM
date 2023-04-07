package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.*;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.Review;
import com.ssafy.sulnaeeum.model.drink.entity.Taste;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.ReviewRepo;
import com.ssafy.sulnaeeum.model.drink.repo.MyDrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.TasteRepo;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
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

    @Autowired
    TasteRepo tasteRepo;

    // 리뷰 작성 or 수정 (전통주 클리어)
    @Transactional
    public String writeReview(Long drinkId, String kakaoId, ReviewRequestDto reviewRequestDto) {
        String result;
        Long userId = userService.findUserId(kakaoId);

        Optional<User> user = userRepo.findByKakaoId(kakaoId);
        Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
        if(user.isEmpty() || drink.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        DrinkDto drinkDto = drink.get().toDto();

        // 해당 전통주를 해당 회원이 이미 클리어한 경우 - 수정 / 아직 클리어하지 않은 경우 - 작성
        Optional<Review> review = reviewRepo.findMyReview(userId, drinkId);
        Review resultReview = reviewRequestDto.toEntity(user.get().toDto(), drink.get().toDto());

        Long myDrinkId = myDrinkRepo.findMyDrinkId(userId, drinkId);

        if(review.isPresent()) {
            result = "update";
            updateAvg(1, drinkId, drinkDto.getReviewCnt(), drinkDto.getAvgScore(), resultReview.getScore(), review.get().getScore());

            // 만약 내가 클리어한 전통주 리스트 중 해당 전통주가 없을 경우 추가
            if(myDrinkId == null) {
                myDrinkRepo.save(new MyDrinkDto(drinkDto, user.get().toDto()).toEntity());
            }

            // 기존의 리뷰 아이디 그대로 유지
            resultReview.setReviewId(review.get().getReviewId());
        } else {
            result = "insert";
            updateAvg(0, drinkId, drinkDto.getReviewCnt(), drinkDto.getAvgScore(), resultReview.getScore(), 0);

            // 내가 클리어한 전통주 추가
            myDrinkRepo.save(new MyDrinkDto(drinkDto, user.get().toDto()).toEntity());

            // 리뷰 개수 증가
            cntReview(true, drinkId);
        }
        reviewRepo.save(resultReview);

//        setTastePoint(resultReview);

        // 랭킹 갱신
        updateRanking();

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

        // 기존 리뷰에 대한 정보 조회 후 삭제 (평점 평균 갱신을 위함)
        Review resultReview = review.get();
        reviewRepo.delete(resultReview);

        // 내가 클리어한 전통주 리스트에서 삭제
        Long myDrinkId = myDrinkRepo.findMyDrinkId(userId, drinkId);
        if(myDrinkId == null) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        myDrinkRepo.deleteByMyDrinkId(myDrinkId);

        Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
        if(drink.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        DrinkDto drinkDto = drink.get().toDto();

        // 평점평균 갱신 및 리뷰 개수 감소
        updateAvg(2, drinkId, drinkDto.getReviewCnt(), drinkDto.getAvgScore(), resultReview.getScore(), review.get().getScore());
        cntReview(false, drinkId);

        // 랭킹 갱신
        updateRanking();

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

    // 전통주 평균 평점 업데이트
    @Transactional
    public void updateAvg(int request, Long drinkId, int cnt, double avgScore, int myScore, int preMyScore) {
        double result = 0;
        if(request == 0) { // 리뷰 작성
            result = (cnt * avgScore + myScore) / (cnt + 1);
        } else if(request == 1) { // 리뷰 수정
            result = (cnt * avgScore - preMyScore + myScore) / cnt;
        } else { // 리뷰 삭제
            result = (cnt * avgScore - preMyScore) / cnt;
        }

        Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
        if(drink.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        System.out.println("결과: " + result);
        DrinkDto drinkDto = drink.get().toDto();
        drinkDto.setAvgScore(result);
        System.out.println("결과: " + drinkDto.toEntity().getAvgScore());
        drinkRepo.save(drinkDto.toEntity());
    }

    // 모든 회원 랭킹 갱신
    @Transactional
    public void updateRanking() {
        List<User> userList = userRepo.findAll();
        List<UserDto> userDtoList = userList.stream().map(UserDto::new).collect(Collectors.toList());

        int allReviewCnt = reviewRepo.findAll().size();
        for(UserDto userDto: userDtoList) {
            Long userId = userDto.getUserId();
            int myReviewCnt = reviewRepo.findAllByDrinkId(userId).size();

            Optional<User> user = userRepo.findByUserId(userId);
            if(user.isEmpty()) {
                throw new CustomException(CustomExceptionList.MEMBER_NOT_FOUND);
            }

            if(allReviewCnt == 0) {
                user.get().updateRanking(0);
            } else {
                user.get().updateRanking(myReviewCnt / allReviewCnt * 100);
            }
        }
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

    @Transactional
    public void setTastePoint(Review resultReview){
        Drink drink = resultReview.getDrink();
        Long drinkId = drink.getDrinkId();

        int sweet = drink.getSweetScore() + resultReview.getSweetScore();
        int sour = drink.getSourScore() + resultReview.getSourScore();
        int throat = drink.getThroatScore() + resultReview.getThroatScore();
        int body = drink.getBodyScore() + resultReview.getBodyScore();
        int refresh = drink.getRefreshScore() + resultReview.getRefreshScore();
        int flavor = drink.getFlavorScore() + resultReview.getFlavorScore();

        Taste tasteSweet = tasteRepo.findSweetByDrinkId(drinkId);
        Taste tasteSour = tasteRepo.findSourByDrinkId(drinkId);
        Taste tasteBody = tasteRepo.findBodyByDrinkId(drinkId);
        Taste tasteRefresh = tasteRepo.findRefreshByDrinkId(drinkId);
        Taste tasteFlavor = tasteRepo.findFlavorByDrinkId(drinkId);
        Taste tasteThroat = tasteRepo.findThroatByDrinkId(drinkId);


        if(sweet == -5){
            int sweetPoint = tasteSweet.getScore() - 1;
            if(sweetPoint > 0){
                tasteSweet.setScore(sweetPoint);
                drink.setSweetScore(0);
            }
        }else if(sweet == 5){
            int sweetPoint = tasteSweet.getScore() + 1;
            if(sweetPoint < 6){
                tasteSweet.setScore(sweetPoint);
                drink.setSweetScore(0);
            }
        }else{
            drink.setSweetScore(sweet);
        }

        if(sour == -5){
            int sourPoint = tasteSour.getScore() - 1;
            if(sourPoint > 0){
                tasteSour.setScore(sourPoint);
                drink.setSourScore(0);
            }
        }else if(sour == 5){
            int sourPoint = tasteSour.getScore() + 1;
            if(sourPoint < 6){
                tasteSour.setScore(sourPoint);
                drink.setSourScore(0);
            }
        }else{
            drink.setSourScore(sour);
        }

        if(throat == -5){
            int throatPoint = tasteThroat.getScore() - 1;
            if(throatPoint > 0){
                tasteThroat.setScore(throatPoint);
                drink.setThroatScore(0);
            }
        }else if(throat == 5){
            int throatPoint = tasteThroat.getScore() + 1;
            if(throatPoint < 6){
                tasteThroat.setScore(throatPoint);
                drink.setThroatScore(0);
            }
        }else{
            drink.setThroatScore(throat);
        }

        if(body == -5){
            int bodyPoint = tasteBody.getScore() - 1;
            if(bodyPoint > 0){
                tasteBody.setScore(bodyPoint);
                drink.setBodyScore(0);
            }
        }else if(body == 5){
            int bodyPoint = tasteBody.getScore() + 1;
            if(bodyPoint < 6){
                tasteBody.setScore(bodyPoint);
                drink.setBodyScore(0);
            }
        }else{
            drink.setBodyScore(body);
        }

        if(refresh == -5){
            int refreshPoint = tasteRefresh.getScore() - 1;
            if(refreshPoint > 0){
                tasteRefresh.setScore(refreshPoint);
                drink.setRefreshScore(0);
            }
        }else if(refresh == 5){
            int refreshPoint = tasteRefresh.getScore() + 1;
            if(refreshPoint < 6){
                tasteRefresh.setScore(refreshPoint);
                drink.setRefreshScore(0);
            }
        }else{
            drink.setRefreshScore(refresh);
        }

        if(flavor == -5){
            int flavorPoint = tasteFlavor.getScore() - 1;
            if(flavorPoint > 0){
                tasteFlavor.setScore(flavorPoint);
                drink.setFlavorScore(0);
            }
        }else if(flavor == 5){
            int flavorPoint = tasteFlavor.getScore() + 1;
            if(flavorPoint < 6){
                tasteFlavor.setScore(flavorPoint);
                drink.setFlavorScore(0);
            }
        }else{
            drink.setFlavorScore(flavor);
        }

        tasteRepo.save(tasteSweet);
        tasteRepo.save(tasteSour);
        tasteRepo.save(tasteBody);
        tasteRepo.save(tasteThroat);
        tasteRepo.save(tasteRefresh);
        tasteRepo.save(tasteFlavor);
        drinkRepo.save(drink);
    }
}
