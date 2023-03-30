package com.ssafy.sulnaeeum.model.drink.dto;

import com.ssafy.sulnaeeum.model.drink.entity.Review;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "리뷰")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long reviewId;

    @Schema(description = "회원")
    private UserDto userDto;

    @Schema(description = "전통주")
    private DrinkDto drinkDto;

    @Schema(description = "단 맛 점수")
    private int sweetScore;

    @Schema(description = "신 맛 점수")
    private int sourScore;

    @Schema(description = "향 점수")
    private int flavorScore;

    @Schema(description = "목넘김 점수")
    private int throatScore;

    @Schema(description = "바디감 점수")
    private int bodyScore;

    @Schema(description = "청량감 점수")
    private int refreshScore;

    @Schema(description = "전체 점수")
    private int score;

    @Schema(description = "내용")
    private String content;

    // DTO -> Entity 변환
    public Review toEntity() {
        return Review.builder()
                .reviewId(this.reviewId)
                .user(this.userDto.toEntity())
                .drink(this.drinkDto.toEntity())
                .sweetScore(this.sweetScore)
                .sourScore(this.sourScore)
                .flavorScore(this.flavorScore)
                .throatScore(this.throatScore)
                .bodyScore(this.bodyScore)
                .refreshScore(this.refreshScore)
                .score(this.score)
                .content(this.content).build();
    }
}
