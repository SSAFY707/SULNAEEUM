package com.ssafy.sulnaeeum.model.jumak.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "술집")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class JumakDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long jumakId;

    @Schema(description = "술집 이름")
    private String jumakName;

    @Schema(description = "술집 링크")
    private String jumakUrl;

    @Schema(description = "술집 주소")
    private String jumakLocation;
}
