package com.ssafy.sulnaeeum.model.jumak.dto;

import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "술집 등록 데이터")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class JumakInfoDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long jumakId;

    @Schema(description = "술집 이름")
    private String jumakName;

    @Schema(description = "술집 링크")
    private String jumakUrl;

    @Schema(description = "술집 주소")
    private String jumakLocation;

    @Schema(description = "판매 전통주")
    private Long[] drink;

    // DTO -> Entity 변환
    public Jumak toEntity() {
        return Jumak.builder()
                .jumakId(this.jumakId)
                .jumakName(this.jumakName)
                .jumakUrl(this.jumakUrl)
                .jumakLocation(this.jumakLocation).build();
    }
}
