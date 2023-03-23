package com.ssafy.sulnaeeum.model.user.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.sulnaeeum.model.user.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.persistence.Column;

@Schema(description = "유저 조회")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

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
}
