package com.ssafy.sulnaeeum.model.user.dto;

import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.entity.UserPreference;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Schema(description = "유저 취행 조사")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserPreferenceDto {

    @Schema(description = "신맛")
    private int tasteSour; // 신맛

    @Schema(description = "단맛")
    private int tasteSweet; // 단맛

    @Schema(description = "향")
    private int tasteFlavor; // 향

    @Schema(description = "청량감")
    private int tasteRefresh; // 청량감

    @Schema(description = "바디감")
    private int tasteBody; // 바디감

    @Schema(description = "목넘김")
    private int tasteThroat; // 목넘김

    @Schema(description = "도수")
    private int level; // 도수

    @Schema(description = "안주")
    private String dish; // 안주

    @Schema(description = "가중치")
    private String weight; // 가중치

    public UserPreference toEntity() {

        return UserPreference.builder()
                .tasteSour(tasteSour)
                .tasteSweet(tasteSweet)
                .tasteFlavor(tasteFlavor)
                .tasteRefresh(tasteRefresh)
                .tasteThroat(tasteThroat)
                .tasteBody(tasteBody)
                .level(level)
                .dish(dish)
                .weight(weight)
                .build();
    }
}
