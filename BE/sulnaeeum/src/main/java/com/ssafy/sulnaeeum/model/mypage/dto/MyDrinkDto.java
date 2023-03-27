package com.ssafy.sulnaeeum.model.mypage.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.mypage.entity.MyDrink;
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

    // 생성자
    public MyDrinkDto(DrinkDto drinkDto, UserDto userDto) {
        this.drinkDto = drinkDto;
        this.userDto = userDto;
    }

    // DTO -> Entity 변환
    public MyDrink toEntity() {
        return MyDrink.builder()
                .myDrinkId(this.myDrinkId)
                .drink(this.drinkDto.toEntity())
                .user(this.userDto.toEntity()).build();
    }
}
