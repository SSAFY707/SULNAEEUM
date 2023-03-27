package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "회원별 클리어한 전통주")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class MyDrinkDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long myDrinkId;

    @Schema(description = "전통주")
    private DrinkDto drinkDto;

    @Schema(description = "회원")
    private UserDto userDto;
}
