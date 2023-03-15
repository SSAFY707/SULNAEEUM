package com.ssafy.sulnaeeum.model.jubti.dto;

import com.ssafy.sulnaeeum.model.jubti.entity.JubtiResult;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "jubti 결과 (가공 후)")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class JubtiResultDto {

    @Schema(description = "아이디 (auto_increment)")
    private int jubtiResultId;

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

    // List<Entity> -> List<DTO> 변환을 위함
    public JubtiResultDto(JubtiResult jubtiResult) {
        this.jubtiResultId = jubtiResult.getJubtiResultId();
        this.age = jubtiResult.getAge();
        this.sex = jubtiResult.getSex();
        this.level = jubtiResult.getLevel();

        this.tasteRefresh = jubtiResult.getTasteRefresh();
        this.tasteBody = jubtiResult.getTasteBody();
        this.tasteSour = jubtiResult.getTasteSour();
        this.tasteSweet = jubtiResult.getTasteSweet();

        this.dish = jubtiResult.getDish();
    }

    // DTO -> Entity 변환을 위함
    public JubtiResult toEntity() {
        return JubtiResult.builder()
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
