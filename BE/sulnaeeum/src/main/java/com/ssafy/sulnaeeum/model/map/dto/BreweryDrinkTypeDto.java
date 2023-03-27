package com.ssafy.sulnaeeum.model.map.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkTypeDto;
import com.ssafy.sulnaeeum.model.map.entity.BreweryDrinkType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "양조장별 주종 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class BreweryDrinkTypeDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long breweryDrinkTypeId;

    @Schema(description = "주종")
    private DrinkTypeDto drinkTypeDto;

    @Schema(description = "양조장")
    private BreweryDto breweryDto;

    // 생성자 (List<Entity> -> List<DTO> 변환을 위함)
    public BreweryDrinkTypeDto(BreweryDrinkType breweryDrinkType) {
        this.breweryDrinkTypeId= breweryDrinkType.getBreweryDrinkTypeId();
        this.drinkTypeDto = breweryDrinkType.getDrinkType().toDto();
        this.breweryDto = breweryDrinkType.getBrewery().toDto();
    }

    // DTO -> Entity 변환
    public BreweryDrinkType toEntity() {
        return BreweryDrinkType.builder()
                .breweryDrinkTypeId(this.breweryDrinkTypeId)
                .drinkType(drinkTypeDto.toEntity())
                .brewery(breweryDto.toEntity()).build();
    }
}
