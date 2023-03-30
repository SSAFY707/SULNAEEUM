package com.ssafy.sulnaeeum.model.mypage.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "텍스트 마이닝")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Word implements Comparable<Word>{

    @Schema(description = "텍스트마이닝 텍스트")
    String text;

    @Schema(description = "텍스트마이닝 CNT")
    Double value;

    @Override
    public int compareTo(Word o) {
        return Double.compare(this.value,o.value)*-1;
    }
}