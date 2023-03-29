package com.ssafy.sulnaeeum.model.drink.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "안주")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DishDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long dishId;

    @Schema(description = "술집 이름")
    private String dish;
}
