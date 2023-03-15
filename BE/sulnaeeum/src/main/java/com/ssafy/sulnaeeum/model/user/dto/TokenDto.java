package com.ssafy.sulnaeeum.model.user.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenDto {

    private String accessToken;

    private String refreshToken;
}