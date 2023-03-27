package com.ssafy.sulnaeeum.model.map.dto;

import com.ssafy.sulnaeeum.model.map.entity.Map;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "지역명")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class MapDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long mapId;

    @Schema(description = "지역명")
    private String mapName;

    // 생성자 (List<Entity> -> List<DTO> 변환을 위함)
    public MapDto(Map map) {
        this.mapId = map.getMapId();
        this.mapName = map.getMapName();
    }

    // DTO -> Entity 변환
    public Map toEntity() {
        return Map.builder()
                .mapId(this.mapId)
                .mapName(this.mapName).build();
    }
}
