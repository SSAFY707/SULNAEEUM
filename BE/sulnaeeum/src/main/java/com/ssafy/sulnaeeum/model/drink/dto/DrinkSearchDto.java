package com.ssafy.sulnaeeum.model.drink.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "전통주 정보 (검색용)")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DrinkSearchDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long drinkId;

    @Schema(description = "이름")
    private String drinkName;

    @Schema(description = "이미지")
    private String drinkImage;
}
