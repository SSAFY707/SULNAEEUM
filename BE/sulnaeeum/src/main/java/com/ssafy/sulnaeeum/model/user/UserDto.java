package com.ssafy.sulnaeeum.model.user;

import lombok.*;

import javax.persistence.Column;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private String email; // kakao

    private String provideId;

}
