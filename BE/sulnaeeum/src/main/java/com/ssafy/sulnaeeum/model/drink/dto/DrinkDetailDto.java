package com.ssafy.sulnaeeum.model.drink.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "전통주의 모든 정보 조회")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DrinkDetailDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long drinkId;

    @Schema(description = "이름")
    private String drinkName;

    @Schema(description = "정보")
    private String drinkInfo;

    @Schema(description = "이미지")
    private String drinkImage;

    @Schema(description = "판매처")
    private String drinkSaleUrl;

    @Schema(description = "가격")
    private String drinkPrice;

    @Schema(description = "양")
    private String drinkAmount;

    @Schema(description = "도수")
    private int drinkLevel;

    @Schema(description = "주종")
    private String drinkTypeName;

    @Schema(description = "찜 개수")
    private int likeCnt;

    @Schema(description = "리뷰 개수")
    private int reviewCnt;

    @Schema(description = "평점 평균")
    private double avgScore;

    @Schema(description = "어울리는 안주")
    private String dishName;

    @Schema(description = "재료")
    private List<String> ingredient;

    @Schema(description = "찜 여부")
    private boolean like;

    @Schema(description = "클리어 여부")
    private boolean clear;
}
