package com.ssafy.sulnaeeum.model.jubti.entity;

import com.ssafy.sulnaeeum.model.jubti.dto.JubtiResultDto;
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
@Table(name="jubti_result")
public class JubtiResult {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private int jubtiResultId; // auto_increment PK

    @Column(length = 3, nullable = false)
    private String age; // 나이

    @Column(length = 2, nullable = false)
    private String sex; // 성별

    @Column(nullable = false)
    private int level; // 도수

    @Column(nullable = false)
    private int tasteRefresh; // 청량감

    @Column(nullable = false)
    private int tasteBody; // 바디감

    @Column(nullable = false)
    private int tasteSour; // 신맛

    @Column(nullable = false)
    private int tasteSweet; // 단맛

    @Column(length = 10, nullable = false)
    private String dish; // 안주

    // Entity -> DTO 변환
    public JubtiResultDto toDto() {
        return JubtiResultDto.builder()
                .jubtiResultId(this.jubtiResultId)
                .age(this.age)
                .sex(this.sex)
                .level(this.level)
                .tasteRefresh(this.tasteRefresh)
                .tasteBody(this.tasteBody)
                .tasteSour(this.tasteSour)
                .tasteSweet(this.tasteSweet)
                .dish(this.dish).build();
    }
}
