package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.jumak.dto.JumakDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "전통주 상세 정보 (전통주 상세 페이지 조회용)")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class DrinkDetailPageDto {

    @Schema(description = "전통주 정보")
    private DrinkDetailDto drinkDetailDto;

    @Schema(description = "리뷰")
    private List<ReviewResponseDto> reviewResponseDto;

    @Schema(description = "전통주 식당")
    private List<JumakDto> jumakDto;

    @Schema(description = "비슷한 술")
    private SimilarDrinkDto similarDrinkDto;
}
