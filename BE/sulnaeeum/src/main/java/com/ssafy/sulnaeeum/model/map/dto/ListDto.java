package com.ssafy.sulnaeeum.model.map.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "한 지역의 양조장 및 체험 프로그램에 대한 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class ListDto {

    @Schema(description = "양조장")
    private List<BreweryDto> breweryDtoList;

    @Schema(description = "체험 프로그램")
    private List<ProgramDto> programDtoList;
}
