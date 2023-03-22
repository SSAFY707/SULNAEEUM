package com.ssafy.sulnaeeum.model.user.dto;

import com.ssafy.sulnaeeum.model.user.dto.TokenDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.persistence.Column;

@Schema(description = "로그인 결과")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class KakaoLoginDto {

    @Schema(description = "TokenDto")
    TokenDto tokenDto;

    @Schema(description = "Kakao Id")
    private String kakaoId;

    @Schema(description = "닉네임")
    private String nickname;

    @Schema(description = "프로필")
    @Column(name="img",nullable = false)
    private String img;
}
