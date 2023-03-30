package com.ssafy.sulnaeeum.model.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "내가 찜한 술과 클리어한 술 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class MineDto {

    @Schema(description = "아이디 (auto_increment)")
    private List<Long>  likeList;

    @Schema(description = "술집 이름")
    private List<Long> clearList;
}
