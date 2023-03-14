package com.ssafy.sulnaeeum.model.jubti;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "jubti 결과")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class JubtiAnswerDto {

    @Schema(description = "아이디 (auto_increment)")
    private int jubtiAnswerId;

    @Schema(description = "나이")
    private String age;

    @Schema(description = "성별")
    private String sex;

    @Schema(description = "도수")
    private int level;

    @Schema(description = "청량감")
    private int tasteRefresh;

    @Schema(description = "바디감")
    private int tasteBody;

    @Schema(description = "신맛")
    private int tasteSour;

    @Schema(description = "단맛")
    private int tasteSweet;

    @Schema(description = "안주")
    private String dish;

    @Schema(description = "E or I")
    private String mbtiFirst;

    @Schema(description = "N or S")
    private String mbtiSecond;

    @Schema(description = "F or T")
    private String mbtiThird;

    @Schema(description = "J or P")
    private String mbtiFourth;

    // List<Entity> -> List<DTO> 변환을 위함
    public JubtiAnswerDto(JubtiAnswer jubtiAnswer) {
        this.jubtiAnswerId = jubtiAnswer.getJubtiAnswerId();
        this.age = jubtiAnswer.getAge();
        this.sex = jubtiAnswer.getSex();
        this.level = jubtiAnswer.getLevel();

        this.tasteRefresh = jubtiAnswer.getTasteRefresh();
        this.tasteBody = jubtiAnswer.getTasteBody();
        this.tasteSour = jubtiAnswer.getTasteSour();
        this.tasteSweet = jubtiAnswer.getTasteSweet();

        this.dish = jubtiAnswer.getDish();

        this.mbtiFirst = jubtiAnswer.getMbtiFirst();
        this.mbtiSecond = jubtiAnswer.getMbtiSecond();
        this.mbtiThird = jubtiAnswer.getMbtiThird();
        this.mbtiFourth = jubtiAnswer.getMbtiFourth();
    }

    // DTO -> Entity 변환을 위함
    public JubtiAnswer toEntity() {
        return JubtiAnswer.builder()
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
