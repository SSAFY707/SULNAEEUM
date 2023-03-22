package com.ssafy.sulnaeeum.model.user.dto;

import com.ssafy.sulnaeeum.model.user.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "유저 조회")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private String email; // kakao

    private String provideId;

    public static UserDto from(User user) {
        if(user == null) return null;

        return UserDto.builder()
                .email(user.getKakaoId())
                .build();
    }
}
