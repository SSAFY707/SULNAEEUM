package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.drink.entity.Taste;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "전통주별 맛 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class TasteDto {

    @Schema(description = "맛 종류")
    private Long tasteType;

    @Schema(description = "점수")
    private int score;

    // 생성자 (List<Entity> -> List<DTO> 변환을 위함)
    public TasteDto(Taste taste) {
        this.tasteType = taste.getTasteType().getTasteTypeId();
        this.score = taste.getScore();
    }
}
