package com.ssafy.sulnaeeum.model.ranking.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "상위 전통주 리스트")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class TopDrinkListDto {

    @Schema(description = "전통주")
    private List<DrinkDto> topDrinkList;
}
