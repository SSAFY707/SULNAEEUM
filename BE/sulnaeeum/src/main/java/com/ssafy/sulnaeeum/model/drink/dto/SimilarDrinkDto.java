package com.ssafy.sulnaeeum.model.drink.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.json.simple.JSONObject;

@Schema(description = "비슷한 술")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class SimilarDrinkDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long drinkId;

    @Schema(description = "전통주 이름")
    private String drinkName;

    @Schema(description = "전통주 이미지")
    private String drinkImage;

    @Schema(description = "도수")
    private int drinkLevel;

    @Schema(description = "용량")
    private String drinkAmount;

    public SimilarDrinkDto(JSONObject jsonObject) {
        this.drinkId = Long.parseLong(jsonObject.get("drink_id").toString());
        this.drinkName = jsonObject.get("drink_name").toString();
        this.drinkImage = jsonObject.get("drink_image").toString().replace("\\", "");
        this.drinkLevel = Integer.parseInt(jsonObject.get("drink_level").toString());
        this.drinkAmount = jsonObject.get("drink_amount").toString();
    }
}
