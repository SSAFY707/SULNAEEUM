package com.ssafy.sulnaeeum.model.mypage.dto;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import com.ssafy.sulnaeeum.model.user.entity.User;
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
    private Drink drink;

    @Schema(description = "회원")
    private User user;

    // 생성자
    public LikeDrinkDto(Drink drink, User user) {
        this.user = user;
        this.drink = drink;
    }

    // DTO -> Entity 변환
    public LikeDrink toEntity() {
        return LikeDrink.builder()
                .likeDrinkId(this.likeDrinkId)
                .user(this.user)
                .drink(this.drink).build();
    }
}
