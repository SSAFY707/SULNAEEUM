package com.ssafy.sulnaeeum.model.map.dto;

import com.ssafy.sulnaeeum.model.map.entity.Brewery;
import com.ssafy.sulnaeeum.model.map.entity.Program;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "체험 프로그램 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class ProgramDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long programId;

    @Schema(description = "지역")
    private MapDto mapDto;

    @Schema(description = "프로그램 이름")
    private String programName;

    @Schema(description = "체험 장소")
    private String programLocation;

    @Schema(description = "상시 방문 가능 여부")
    private boolean alwaysVisit;

    @Schema(description = "예약 방문 가능 여부")
    private boolean reserveVisit;

    @Schema(description = "체험 프로그램 사이트 주소")
    private String programUrl;

    @Schema(description = "내용")
    private String content;

    @Schema(description = "체험 프로그램 이미지")
    private String programImg;

    // 생성자 (List<Entity> -> List<DTO> 변환을 위함)
    public ProgramDto(Program program) {
        this.programId = program.getProgramId();
        this.mapDto = program.getMap().toDto();
        this.programName = program.getProgramName();
        this.programLocation = program.getProgramLocation();
        this.alwaysVisit = program.isAlwaysVisit();
        this.reserveVisit = program.isReserveVisit();
        this.programUrl = program.getProgramUrl();
        this.content = program.getContent();
        this.programImg = program.getProgramImg();
    }

    // DTO -> Entity 변환
    public Program toEntity() {
        return Program.builder()
                .programId(this.programId)
                .map(this.mapDto.toEntity())
                .programName(this.programName)
                .programLocation(this.programLocation)
                .alwaysVisit(this.alwaysVisit)
                .reserveVisit(this.reserveVisit)
                .programUrl(this.programUrl)
                .content(this.content)
                .programImg(this.programImg).build();
    }
}
