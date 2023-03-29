package com.ssafy.sulnaeeum.model.drink.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "찜한 술")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyPageDrinkDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long drinkId;

    @Schema(description = "이름")
    private String drinkName;

    @Schema(description = "이미지")
    private String drinkImage;

    @Schema(description = "양")
    private String drinkAmount;

    @Schema(description = "도수")
    private int drinkLevel;

    @Schema(description = "주종")
    private  String drinkType;
}
