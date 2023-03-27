package com.ssafy.sulnaeeum.model.map.entity;

import com.ssafy.sulnaeeum.model.map.dto.BreweryDto;
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
@Table(name="brewery")
public class Brewery {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long breweryId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "map_id")
    private Map map; // 지역

    @Column(length = 20, nullable = false)
    private String breweryName; // 양조장 이름

    @Column(length = 50, nullable = false)
    private String breweryLocation; // 양조장 주소

    @Column(nullable = false)
    private String breweryUrl; // 양조장 사이트 주소

    @Column(length = 12, nullable = false)
    private String contact; // 양조장 연락처

    @Column(nullable = false)
    private String breweryImg; // 양조장 이미지

    // Entity -> DTO 변환
    public BreweryDto toDto() {
        return BreweryDto.builder()
                .breweryId(this.breweryId)
                .mapDto(this.map.toDto())
                .breweryName(this.breweryName)
                .breweryLocation(this.breweryLocation)
                .breweryUrl(this.breweryUrl)
                .contact(this.contact)
                .breweryImg(this.breweryImg).build();
    }
}