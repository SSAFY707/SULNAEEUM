package com.ssafy.sulnaeeum.model.today.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "오늘의 전통주 정보를 담을 Dto")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class TodayDrinkDto {
    @Schema(description = "오늘의 전통주 아이디")
    private Long todayId;

    @Schema(description = "오늘의 전통주 도수")
    private int todayLevel;

    @Schema(description = "오늘의 전통주 이름")
    private String todayDrink;

    @Schema(description = "오늘의 전통주 종류")
    private String todayType;

    @Schema(description = "전통주 용량")
    private String todayAmount;

    @Schema(description = "오늘의 전통주 이미지")
    private String todayImage;

    public TodayDrinkDto(DrinkDto drinkDto){
        this.todayId = drinkDto.getDrinkId();
        this.todayLevel = drinkDto.getDrinkLevel();
        this.todayDrink = drinkDto.getDrinkName();
        this.todayType = drinkDto.getDrinkTypeDto().getDrinkTypeName();;
        this.todayAmount = drinkDto.getDrinkAmount();
        this.todayImage = drinkDto.getDrinkImage();
    }
}
