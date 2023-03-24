package com.ssafy.sulnaeeum.model.map.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "양조장 및 체험 프로그램에 대한 모든 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class MapInfoDto {

    @Schema(description = "양조장")
    private BreweryDto breweryDto;

    @Schema(description = "체험 프로그램")
    private ProgramDto programDto;
}
