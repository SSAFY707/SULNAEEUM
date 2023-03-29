package com.ssafy.sulnaeeum.model.jumak.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "회원별 찜한 가게리스트 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class LikeJumakListDto {

    @Schema(description = "회원별 찜한 가게 정보")
    List<LikeJumakDto> userPreferenceStore;
}
