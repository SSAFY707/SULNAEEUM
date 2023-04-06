package com.ssafy.sulnaeeum.model.ranking.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "Ranking 술의 정보를 담을 Dto")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class RecommendRankingDto {
    @Schema(description = "전통주 아이디")
    private Long drinkId;

    @Schema(description = "전통주 도수")
    private int drinkLevel;

    @Schema(description = "전통주 이름")
    private String drinkName;

    @Schema(description = "전통주 이미지")
    private String drinkImg;

    @Schema(description = "전통주 용량")
    private String drinkAmount;

    @Schema(description = "전통주 종류")
    private String drinkType;

    @Schema(description = "전통주 가격")
    private String drinkPrice;

    @Schema(description = "전통주 재료")
    private List<String> ingredientList;

    public RecommendRankingDto(DrinkDto drinkDto, List<String> ingredientList){
        this.drinkId = drinkDto.getDrinkId();
        this.drinkLevel = drinkDto.getDrinkLevel();
        this.drinkName = drinkDto.getDrinkName();
        this.drinkImg = drinkDto.getDrinkImage();
        this.drinkAmount = drinkDto.getDrinkAmount();
        this.drinkType = drinkDto.getDrinkTypeDto().getDrinkTypeName();
        this.drinkPrice = drinkDto.getDrinkPrice();
        this.ingredientList = ingredientList;
    }
}