package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "주종")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DrinkTypeDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long drinkTypeId;

    @Schema(description = "주종")
    private String drinkTypeName;

    // DTO -> Entity 변환
    public DrinkType toEntity() {
        return DrinkType.builder()
                .drinkTypeId(this.drinkTypeId)
                .drinkTypeName(this.drinkTypeName).build();
    }
}
