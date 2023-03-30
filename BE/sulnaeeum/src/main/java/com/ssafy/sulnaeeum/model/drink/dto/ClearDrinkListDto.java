package com.ssafy.sulnaeeum.model.drink.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "회원별 클리어한 전통주 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClearDrinkListDto {

    @Schema(description = "전통주")
    private List<MyPageDrinkDto> userClear;
}
