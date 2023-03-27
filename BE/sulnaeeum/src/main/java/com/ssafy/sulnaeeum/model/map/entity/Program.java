package com.ssafy.sulnaeeum.model.map.entity;

import com.ssafy.sulnaeeum.model.map.dto.ProgramDto;
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
@Table(name="program")
public class Program {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long programId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "map_id")
    private Map map; // 지역

    @Column(length = 20, nullable = false)
    private String programName; // 프로그램 이름

    @Column(length = 30, nullable = false)
    private String programLocation; // 체험 장소

    private boolean alwaysVisit; // 상시 방문 가능 여부

    private boolean reserveVisit; // 예약 방문 가능 여부

    @Column(nullable = false)
    private String programUrl; // 체험 프로그램 사이트 주소

    @Column(nullable = false)
    private String content; // 내용

    @Column(nullable = false)
    private String programImg; // 체험 프로그램 이미지

    // Entity -> DTO 변환
    public ProgramDto toDto() {
        return ProgramDto.builder()
                .programId(this.programId)
                .mapDto(this.map.toDto())
                .programName(this.programName)
                .programLocation(this.programLocation)
                .alwaysVisit(this.alwaysVisit)
                .reserveVisit(this.reserveVisit)
                .programUrl(this.programUrl)
                .content(this.content)
                .programImg(this.programImg).build();
    }
}