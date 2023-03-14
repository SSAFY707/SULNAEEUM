package com.ssafy.sulnaeeum.model.jubti;

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
@Table(name="jubti_answer")
public class JubtiAnswer {

    @Id
    @GeneratedValue
    @Column(name = "jubti_answer_id")
    private int jubtiAnswerId; // auto_increment PK

    @Column(length = 3)
    private String age; // 나이

    @Column(length = 2)
    private String sex; // 성별

    private int level; // 도수

    private int tasteRefresh; // 청량감

    private int tasteBody; // 바디감

    private int tasteSour; // 신맛

    private int tasteSweet; // 단맛

    @Column(length = 10)
    private String dish; // 안주

    @Column(name = "mbti_first", length = 1)
    private String mbtiFirst; // E or I

    @Column(name = "mbti_second", length = 1)
    private String mbtiSecond; // N or S

    @Column(name = "mbti_third", length = 1)
    private String mbtiThird; // F or T

    @Column(name = "mbti_fourth", length = 1)
    private String mbtiFourth; // J or P

    // Entity -> DTO 변환
    public JubtiAnswerDto toDto() {
        return JubtiAnswerDto.builder()
                .jubtiAnswerId(this.jubtiAnswerId)
                .age(this.age)
                .sex(this.sex)
                .level(this.level)
                .tasteRefresh(this.tasteRefresh)
                .tasteBody(this.tasteBody)
                .tasteSour(this.tasteSour)
                .tasteSweet(this.tasteSweet)
                .dish(this.dish)
                .mbtiFirst(this.mbtiFirst)
                .mbtiSecond(this.mbtiSecond)
                .mbtiThird(this.mbtiThird)
                .mbtiFourth(this.mbtiFourth).build();
    }
}
