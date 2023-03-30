package com.ssafy.sulnaeeum.model.mypage.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Schema(description = "텍스트 마이닝")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Words {

    @Schema(description = "텍스트마이닝 정보")
    List<Word> words;
}
