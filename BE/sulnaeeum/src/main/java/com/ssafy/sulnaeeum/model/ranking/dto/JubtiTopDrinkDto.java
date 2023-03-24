package com.ssafy.sulnaeeum.model.ranking.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "JUBTI 기반 상위 전통주 리스트")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class JubtiTopDrinkDto {

    @Schema(description = "20대 상위 전통주")
    private List<DrinkDto> twentiesTopDrink;

    @Schema(description = "30대 상위 전통주")
    private List<DrinkDto> thirtiesTopDrink;

    @Schema(description = "40대 상위 전통주")
    private List<DrinkDto> fortiesTopDrink;

    @Schema(description = "50대 상위 전통주")
    private List<DrinkDto> fiftiesTopDrink;

    @Schema(description = "60대 상위 전통주")
    private List<DrinkDto> sixtiesTopDrink;

    @Schema(description = "여성 상위 전통주")
    private List<DrinkDto> femaleTopDrink;

    @Schema(description = "남성 상위 전통주")
    private List<DrinkDto> maleTopDrink;
}
