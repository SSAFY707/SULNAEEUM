package com.ssafy.sulnaeeum.controller.ranking;

import com.ssafy.sulnaeeum.model.ranking.dto.JubtiTopDrinkDto;
import com.ssafy.sulnaeeum.model.ranking.dto.TopDrinkListDto;
import com.ssafy.sulnaeeum.model.ranking.service.RankingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ranking")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "RankingController", description = "랭킹 API")
public class RankingController {

    private final RankingService rankingService;

    /***
     * [좋아요 TOP10 전통주 조회]
     * - 유저가 좋아요한 상위 전통주 조회
     ***/
    @Operation(summary = "좋아요 TOP10 전통주 조회", description = "좋아요 TOP10 전통주 조회")
    @GetMapping("/top/like")
    public ResponseEntity<TopDrinkListDto> getTopLike() {

        TopDrinkListDto topDrinkList = rankingService.getTopLike();

        return new ResponseEntity<>(topDrinkList, HttpStatus.OK);
    }

    /***
     * [리뷰순 TOP10 전통주 조회]
     * - 유저가 리뷰한 상위 전통주 조회
     ***/
    @Operation(summary = "리뷰순 TOP10 전통주 조회", description = "리뷰순 TOP10 전통주 조회")
    @GetMapping("/top/review")
    public ResponseEntity<TopDrinkListDto> getTopReview() {

        TopDrinkListDto topDrinkList = rankingService.getTopReview();

        return new ResponseEntity<>(topDrinkList, HttpStatus.OK);
    }

    /***
     * [ 성별 & 나이별 상위 전통주 조회]
     * - JUBTI 데이터 기반으로 성별 & 나이별 상위 전통주 조회
     ***/
    @Operation(summary = "리뷰순 TOP10 전통주 조회", description = "리뷰순 TOP10 전통주 조회")
    @GetMapping("/top/jubti")
    public ResponseEntity<JubtiTopDrinkDto> getTopJubti() {

        JubtiTopDrinkDto jubtiTopDrinkDto = rankingService.getTopJubti();

        return new ResponseEntity<>(jubtiTopDrinkDto, HttpStatus.OK);
    }
}
