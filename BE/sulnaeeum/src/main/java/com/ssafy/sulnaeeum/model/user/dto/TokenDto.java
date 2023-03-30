package com.ssafy.sulnaeeum.model.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "토큰(Refresh & Access Token")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenDto {

    @Schema(description = "Access Token")
    private String accessToken;

    @Schema(description = "Rresh Token")
    private String refreshToken;
}