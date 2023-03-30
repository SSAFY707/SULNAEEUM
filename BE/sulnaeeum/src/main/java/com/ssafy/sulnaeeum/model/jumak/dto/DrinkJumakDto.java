package com.ssafy.sulnaeeum.model.jumak.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.jumak.entity.DrinkJumak;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "술집별 판매 전통주")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DrinkJumakDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long drinkJumakId;

    @Schema(description = "술집")
    private DrinkDto drinkDto;

    @Schema(description = "전통주")
    private JumakDto jumakDto;

    //  DTO -> Entity 변환
    public DrinkJumak toEntity() {
        return DrinkJumak.builder()
                .drinkJumakId(this.drinkJumakId)
                .drink(this.drinkDto.toEntity())
                .jumak(this.jumakDto.toEntity()).build();
    }
}
