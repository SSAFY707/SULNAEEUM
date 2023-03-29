package com.ssafy.sulnaeeum.model.jumak.entity;

import com.ssafy.sulnaeeum.model.jumak.dto.JumakDto;
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
@Table(name="jumak")
public class Jumak {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long jumakId; // auto_increment PK

    @Column(length = 10, nullable = false)
    private String jumakName; // 이름

    @Column(nullable = false)
    private String jumakUrl; // 카카오맵 링크

    @Column(nullable = false)
    private String jumakLocation; // 주소

    // DTO -> Entity 변환
    public JumakDto toDto() {
        return JumakDto.builder()
                .jumakId(this.jumakId)
                .jumakName(this.jumakName)
                .jumakUrl(this.jumakUrl)
                .jumakLocation(this.jumakLocation).build();
    }
}
