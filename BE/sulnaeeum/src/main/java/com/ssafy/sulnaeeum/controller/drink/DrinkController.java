package com.ssafy.sulnaeeum.controller.drink;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkInfoDto;
import com.ssafy.sulnaeeum.model.drink.service.DrinkService;
import com.ssafy.sulnaeeum.model.mypage.service.LikeDrinkService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
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

    DrinkService drinkService;

    LikeDrinkService likeDrinkService;

    /***
     * [ 모든 전통주 조회 ]
     * - 조회한 내용을 필요한 데이터만 선별하여 반환 (id, 이름, 이미지, 양, 도수, 주종, 찜 여부)
     * - 이름 순 정렬
     * - 카테고리 분류
     ***/
    @Operation(summary = "모든 전통주 조회", description = "전체 전통주를 데이터 가공하여 필요한 정보만 정렬 및 분류하여 제공")
    @GetMapping("/{drinkTypeName}")
    public ResponseEntity<List<DrinkInfoDto>> getAllDrink(@PathVariable String drinkTypeName) {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(drinkService.getAllDrink(drinkTypeName, kakaoId), HttpStatus.OK);
    }

    /***
     * [ 전통주 찜 ]
     * - 기존에 찜 되어있지 않을 경우, DB에 찜 한 내용 저장 (찜 한 회원, 전통주)
     * - 기존에 찜 되어있을 경우, DB에서 기존에 찜 했던 내용 삭제
     */
    @Operation(summary = "전통주 찜", description = "찜하거나 찜을 취소")
    @PostMapping("/like/{drinkId}/{kakaoId}")
    public ResponseEntity<String> switchLikeDrink(@PathVariable Long drinkId) {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(likeDrinkService.switchLikeDrink(drinkId, kakaoId), HttpStatus.OK);
    }
}