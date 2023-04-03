package com.ssafy.sulnaeeum.model.jubti.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Schema(description = "선물 대상 취향 조사")
@Setter
@Getter
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class PresentDto {
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

    @Schema(description = "연령대")
    private String age;

    @Schema(description = "성별")
    private String sex;
}
