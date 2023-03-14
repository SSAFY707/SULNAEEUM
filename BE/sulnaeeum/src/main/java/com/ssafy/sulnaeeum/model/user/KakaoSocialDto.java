package com.ssafy.sulnaeeum.model.user;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class KakaoSocialDto {

    String token;

    String userId;
}
