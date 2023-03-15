package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "전통주 정보 (전통주 전체 페이지 조회용)")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DrinkInfoDto {

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
    private String drinkType;

    @Schema(description = "찜 여부")
    private boolean isMine;

    public DrinkInfoDto(Drink drink) {
        this.drinkId = drink.getDrinkId();
        this.drinkName = drink.getDrinkName();
        this.drinkImage = drink.getDrinkImage();
        this.drinkAmount = drink.getDrinkAmount();
        this.drinkLevel = drink.getDrinkLevel();
        this.drinkType = drink.getDrinkType().getDrinkTypeName();
    }
}
