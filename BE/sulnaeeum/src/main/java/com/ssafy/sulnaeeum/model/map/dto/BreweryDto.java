package com.ssafy.sulnaeeum.model.map.dto;

import com.ssafy.sulnaeeum.model.map.entity.Brewery;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "양조장 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class BreweryDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long breweryId;

    @Schema(description = "지역")
    private MapDto mapDto;

    @Schema(description = "양조장 이름")
    private String breweryName;

    @Schema(description = "양조장 주소")
    private String breweryLocation;

    @Schema(description = "양조장 사이트 주소")
    private String breweryUrl;

    @Schema(description = "양조장 연락처")
    private String contact;

    @Schema(description = "양조장 이미지")
    private String breweryImg;

    @Schema(description = "양조장별 주종")
    private List<String> drinkTypeList;

    // 생성자 (List<Entity> -> List<DTO> 변환을 위함)
    public BreweryDto(Brewery brewery) {
        this.breweryId = brewery.getBreweryId();
        this.mapDto = brewery.getMap().toDto();
        this.breweryName = brewery.getBreweryName();
        this.breweryLocation = brewery.getBreweryLocation();
        this.breweryUrl = brewery.getBreweryUrl();
        this.contact = brewery.getContact();
        this.breweryImg = brewery.getBreweryImg();
    }

    // DTO -> Entity 변환
    public Brewery toEntity() {
        return Brewery.builder()
                .breweryId(this.breweryId)
                .map(this.mapDto.toEntity())
                .breweryName(this.breweryName)
                .breweryLocation(this.breweryLocation)
                .breweryUrl(this.breweryUrl)
                .contact(this.contact)
                .breweryImg(this.breweryImg).build();
    }
}
