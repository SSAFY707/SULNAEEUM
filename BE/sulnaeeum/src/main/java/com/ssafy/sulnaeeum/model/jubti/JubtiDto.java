package com.ssafy.sulnaeeum.model.jubti;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "jubti 질문지")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class JubtiDto {

    @Schema(description = "아이디 (auto_increment)")
    private int jubtiId;

    @Schema(description = "질문 번호")
    private int questionId;

    @Schema(description = "질문")
    private String question;
}
