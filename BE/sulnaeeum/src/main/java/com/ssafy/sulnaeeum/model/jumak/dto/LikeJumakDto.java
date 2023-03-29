package com.ssafy.sulnaeeum.model.jumak.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Schema(description = "회원별 찜한 가게 정보")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikeJumakDto {

    @Schema(description = "가게Id")
    private Long storeId;

    @Schema(description = "이름")
    private String storeName;

    @Schema(description = "가게 링크")
    private String storeLink;

    @Schema(description = "주소")
    private String storeAddress;

    @Schema(description = "가게파는 술")
    private List<String> storeDrink;

    @Schema(description = "가게에서 파는 술 사진")
    private List<String> storeDrinkImage;

    @Schema(description = "가게에서 파는 술 주종")
    private List<String> storeDrinkType;

}
