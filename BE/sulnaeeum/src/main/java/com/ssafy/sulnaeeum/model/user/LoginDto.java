package com.ssafy.sulnaeeum.model.user;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {

    private String email; // kakao

    private String provideId;
}
