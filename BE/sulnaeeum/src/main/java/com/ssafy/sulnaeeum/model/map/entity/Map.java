package com.ssafy.sulnaeeum.model.map.entity;

import com.ssafy.sulnaeeum.model.map.dto.MapDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="map")
public class Map {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long mapId; // auto_increment PK

    @Column(length = 3, nullable = false)
    private String mapName; // 지역명

    // Entity -> DTO 변환
    public MapDto toDto() {
        return MapDto.builder()
                .mapId(this.mapId)
                .mapName(this.mapName).build();
    }
}
