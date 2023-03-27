package com.ssafy.sulnaeeum.model.map.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "지도 전체 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class MapInfoDto {

    @Schema(description = "지역 번호")
    private Long mapId;

    @Schema(description = "양조장 및 축제")
    private ListDto listDto;
}
