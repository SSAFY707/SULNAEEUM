package com.ssafy.sulnaeeum.model.mypage.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "유저 프로필 조회")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MyInfoDto {
    @Schema(description = "userId")
    private Long userId; // kakao

    @Schema(description = "kakaoId")
    private String kakaoId; // kakao

    @Schema(description = "nickname")
    private String nickname;

    @Schema(description = "age")
    private String age;

    @Schema(description = "sex")
    private String sex;

    @Schema(description = "img")
    private String img;

    @Schema(description = "ranking")
    private int ranking;

    @Schema(description = "finish")
    private boolean finish;

    @Schema(description = "likeDrinkCnt")
    private int likeDrinkCnt;

    @Schema(description = "likeJumakCnt")
    private int likeJumakCnt;

    @Schema(description = "clearDrinkCnt")
    private int clearDrinkCnt;
}
