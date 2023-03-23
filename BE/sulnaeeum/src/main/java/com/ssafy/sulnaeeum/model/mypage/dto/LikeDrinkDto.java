package com.ssafy.sulnaeeum.model.mypage.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "회원별 전통주 찜 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class LikeDrinkDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long likeDrinkId;

    @Schema(description = "전통주")
    private DrinkDto drinkDto;

    @Schema(description = "회원")
    private UserDto userDto;

    // 생성자
    public LikeDrinkDto(DrinkDto drinkDto, UserDto userDto) {
        this.drinkDto = drinkDto;
        this.userDto = userDto;
    }

    // DTO -> Entity 변환
    public LikeDrink toEntity() {
        return LikeDrink.builder()
                .likeDrinkId(this.likeDrinkId)
                .user(this.userDto.toEntity())
                .drink(this.drinkDto.toEntity()).build();
    }
}
