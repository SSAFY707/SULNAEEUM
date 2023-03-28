package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "회원별 전통주 찜 술 정보만")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikeDrinkListDto {
    @Schema(description = "전통주")
    private List<DrinkDto> likeDrinkList;
}
