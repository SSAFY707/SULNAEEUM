package com.ssafy.sulnaeeum.model.today.dto;

import com.ssafy.sulnaeeum.model.drink.entity.Dish;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "오늘의 안주 정보를 담을 Dto")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class TodayDishDto {
    @Schema(description = "오늘의 안주 아이디")
    private Long todayId;

    @Schema(description = "오늘의 안주 이름")
    private String todayDish;


    public TodayDishDto(Dish dish){
        this.todayId = dish.getDishId();
        this.todayDish = dish.getDishName();
    }
}
