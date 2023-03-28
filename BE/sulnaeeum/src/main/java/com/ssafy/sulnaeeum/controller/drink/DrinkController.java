package com.ssafy.sulnaeeum.controller.drink;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkInfoDto;
import com.ssafy.sulnaeeum.model.drink.dto.ReviewRequestDto;
import com.ssafy.sulnaeeum.model.drink.dto.ReviewResponseDto;
import com.ssafy.sulnaeeum.model.drink.service.DrinkService;
import com.ssafy.sulnaeeum.model.drink.service.ReviewService;
import com.ssafy.sulnaeeum.model.drink.service.LikeDrinkService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drink")
@Slf4j
@Tag(name = "DrinkController", description = "전통주 페이지 API")
public class DrinkController {

    @Autowired
    DrinkService drinkService;

    @Autowired
    LikeDrinkService likeDrinkService;

    @Autowired
    ReviewService reviewService;

    // =================================================================================================================
    // -----------------------------------------------   [ 회원 ]   -----------------------------------------------------
    // =================================================================================================================

    /***
     * [ 모든 전통주 조회 ]
     * - 조회한 내용을 필요한 데이터만 선별하여 반환 (id, 이름, 이미지, 양, 도수, 주종, 찜 여부, 클리어 여부)
     * - 이름, 인기, 도수(높은 순, 낮은 순) 기준 정렬 (인기, 도수의 경우 같을 경우에는 이름으로 정렬)
     * - 카테고리 분류
     ***/
    @Operation(summary = "모든 전통주 조회 - 회원", description = "전체 전통주를 데이터 가공하여 필요한 정보만 정렬 및 분류하여 제공")
    @GetMapping("/{drinkTypeId}")
    public ResponseEntity<List<DrinkInfoDto>> getAllDrinkForUser(@PathVariable Long drinkTypeId, @RequestParam String sortType) {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(drinkService.getAllDrink(drinkTypeId, kakaoId, sortType), HttpStatus.OK);
    }

    /***
     * [ 전통주 찜 ]
     * - 기존에 찜 되어있지 않을 경우, DB에 찜 한 내용 저장 (찜 한 회원, 전통주)
     * - 기존에 찜 되어있을 경우, DB에서 기존에 찜 했던 내용 삭제
     ***/
    @Operation(summary = "전통주 찜 - 회원", description = "찜하거나 찜을 취소")
    @PostMapping("/like/{drinkId}")
    public ResponseEntity<String> switchLikeDrinkForUser(@PathVariable Long drinkId) {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(likeDrinkService.switchLikeDrink(drinkId, kakaoId), HttpStatus.OK);
    }

    /***
     * [ 리뷰 작성 or 수정 ]
     * - 해당 전통주에 대하여 해당하는 회원이 이미 리뷰를 작성한 경우, `수정`으로 판단 -> update
     * - 해당 전통주에 대하여 해당하는 회원이 아직 리뷰를 작성하지 않은 경우, `작성`으로 판단 -> insert
     * - 리뷰 `작성` 시 Drink 엔티티의 reviewCnt 1 증가 시켜줌
     ***/
    @Operation(summary = "리뷰 작성 or 수정 - 회원", description = "리뷰 작성 or 수정 (전통주 클리어)")
    @PostMapping("/review/{drinkId}")
    public ResponseEntity<String> writeReview(@PathVariable Long drinkId, @RequestBody ReviewRequestDto reviewRequestDto) {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(reviewService.writeReview(drinkId, kakaoId, reviewRequestDto), HttpStatus.OK);
    }

    /***
     * [ 리뷰 삭제 ]
     * - DB에서 리뷰 delete
     * - Drink 엔티티의 reviewCnt 1 증가 시켜줌
     ***/
    @Operation(summary = "리뷰 삭제 - 회원", description = "리뷰 삭제 (전통주 클리어 취소)")
    @DeleteMapping("/review/{drinkId}")
    public ResponseEntity<String> deleteReview(@PathVariable Long drinkId) {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(reviewService.deleteReview(drinkId, kakaoId), HttpStatus.OK);
    }

    /***
     * [ 내 리뷰 조회 ]
     * - 해당 전통주의 내 리뷰 필터링
     * - 존재하지 않을 시, null 반환
     ***/
    @Operation(summary = "내 리뷰 조회", description = "내 리뷰 조회")
    @GetMapping("/review/{drinkId}")
    public ResponseEntity<ReviewResponseDto> getMyReview(@PathVariable Long drinkId) {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(reviewService.getMyReview(drinkId, kakaoId), HttpStatus.OK);
    }

//    /***
//     * [ 전통주 상세 페이지 조회 ]
//     * - 해당 전통주 정보 중 필요한 정보들을 가공하여 모두 조회 (전통주 정보, 리뷰, 술집, 찜 및 클리어 여부 등)
//     * - 비슷한 술 추천 정보 조회 (Flask 통해서 추천 정보 받아옴)
//     ***/
//    @Operation(summary = "전통주 상세 페이지", description = "전통주 상세 페이지 정보 모두 조회")
//    @GetMapping("/detail/{drinkId}")
//    public ResponseEntity<> getDrink(@PathVariable Long drinkId) {
//        return new ResponseEntity<>();
//    }

    // =================================================================================================================
    // ----------------------------------------------   [ 비회원 ]   ----------------------------------------------------
    // =================================================================================================================

    /***
     * [ 모든 전통주 조회 ]
     * - 조회한 내용을 필요한 데이터만 선별하여 반환 (id, 이름, 이미지, 양, 도수, 주종, 찜 여부)
     * - 이름, 인기, 도수(높은 순, 낮은 순) 기준 정렬 (인기, 도수의 경우 같을 경우에는 이름으로 정렬)
     * - 카테고리 분류
     * - 찜 여부는 모두 false 반환
     ***/
    @Operation(summary = "모든 전통주 조회 - 비회원", description = "전체 전통주를 데이터 가공하여 필요한 정보만 정렬 및 분류하여 제공")
    @GetMapping("/n/{drinkTypeId}")
    public ResponseEntity<List<DrinkInfoDto>> getAllDrink(@PathVariable Long drinkTypeId, @RequestParam String sortType) {
        return new ResponseEntity<>(drinkService.getAllDrink(drinkTypeId, null, sortType), HttpStatus.OK);
    }

    /***
     * [ 모든 리뷰 조회 ]
     ***/
    @Operation(summary = "모든 리뷰 조회 - 비회원", description = "전체 리뷰 리스트 제공")
    @GetMapping("/n/review/{drinkId}")
    public ResponseEntity<List<ReviewResponseDto>> getAllReview(@PathVariable Long drinkId) {
        return new ResponseEntity<>(reviewService.getAllReview(drinkId), HttpStatus.OK);
    }
}
