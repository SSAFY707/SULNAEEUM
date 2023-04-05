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


    // 생성자 (List<Entity> -> List<DTO> 변환을 위함)
    public UserDto(User user) {
        this.userId = user.getUserId();
        this.kakaoId = user.getKakaoId();
        this.nickname = user.getNickname();
        this.age = user.getAge();
        this.sex = user.getSex();
        this.img = user.getImg();
        this.ranking = user.getRanking();
        this.finish = user.isFinish();
    }

    // DTO -> Entity 변환
    public User toEntity() {
        return User.builder()
                .userId(this.userId)
                .kakaoId(this.kakaoId)
                .nickname(this.nickname)
                .age(this.age)
                .sex(this.sex)
                .img(this.img)
                .ranking(this.ranking)
                .finish(this.finish)
                .build();
    }
}
