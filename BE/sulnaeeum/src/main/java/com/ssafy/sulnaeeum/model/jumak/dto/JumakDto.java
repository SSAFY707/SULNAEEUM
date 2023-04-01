package com.ssafy.sulnaeeum.model.jumak.dto;

import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "전통주 식당")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class JumakDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long jumakId;

    @Schema(description = "식당 이름")
    private String jumakName;

    @Schema(description = "식당 링크")
    private String jumakUrl;

    @Schema(description = "식당 주소")
    private String jumakLocation;

    // 생성자 (List<Entity> -> List<DTO>)
    public JumakDto(Jumak jumak) {
        this.jumakId = jumak.getJumakId();
        this.jumakName = jumak.getJumakName();
        this.jumakUrl = jumak.getJumakUrl();
        this.jumakLocation = jumak.getJumakLocation();
    }

    // DTO -> Entity 변환
    public Jumak toEntity() {
        return Jumak.builder()
                .jumakId(this.jumakId)
                .jumakName(this.jumakName)
                .jumakUrl(this.jumakUrl)
                .jumakLocation(this.jumakLocation).build();
    }
}
