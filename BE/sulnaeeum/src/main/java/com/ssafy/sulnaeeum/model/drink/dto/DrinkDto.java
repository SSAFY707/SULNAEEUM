package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "전통주")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DrinkDto {

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
    private DrinkTypeDto drinkTypeDto;

    @Schema(description = "찜 개수")
    private int likeCnt;

    @Schema(description = "리뷰 개수")
    private int reviewCnt;

    @Schema(description = "평점 평균")
    private double avgScore;

    // DTO -> Entity 변환
    public Drink toEntity() {
        return Drink.builder()
                .drinkId(this.drinkId)
                .drinkName(this.drinkName)
                .drinkInfo(this.drinkInfo)
                .drinkImage(this.drinkImage)
                .drinkSaleUrl(this.drinkSaleUrl)
                .drinkPrice(this.drinkPrice)
                .drinkAmount(this.drinkAmount)
                .drinkLevel(this.drinkLevel)
                .drinkType(this.drinkTypeDto.toEntity())
                .likeCnt(this.likeCnt)
                .reviewCnt(this.reviewCnt)
                .avgScore(this.avgScore).build();
    }
}
