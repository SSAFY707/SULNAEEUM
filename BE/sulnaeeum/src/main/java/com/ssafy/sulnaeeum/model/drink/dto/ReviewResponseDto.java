package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.drink.entity.Review;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "리뷰 조회 내용")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponseDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long reviewId;

    @Schema(description = "회원 아이디")
    private Long userId;

    @Schema(description = "회원 닉네임")
    private String userNickName;

    @Schema(description = "회원 프로필 이미지")
    private String userImg;

    @Schema(description = "점수")
    private int score;

    @Schema(description = "내용")
    private String content;

    // 생성자 (List<Entity> -> List<DTO> 변환을 위함)
    public ReviewResponseDto(Review review) {
        UserDto userDto = review.getUser().toDto();
        this.reviewId = review.getReviewId();
        this.userId = userDto.getUserId();
        this.userNickName = userDto.getNickname();
        this.userImg = userDto.getImg();
        this.score = review.getScore();
        this.content = review.getContent();
    }
}
