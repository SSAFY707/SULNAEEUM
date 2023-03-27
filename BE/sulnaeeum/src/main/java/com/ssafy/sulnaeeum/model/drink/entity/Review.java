package com.ssafy.sulnaeeum.model.drink.entity;

import com.ssafy.sulnaeeum.model.drink.dto.ReviewDto;
import com.ssafy.sulnaeeum.model.drink.dto.ReviewResponseDto;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import com.ssafy.sulnaeeum.model.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="review")
public class Review {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long reviewId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 회원

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drink_id")
    private Drink drink; // 전통주

    private int sweetScore; // 단 맛 점수

    private int sourScore; // 신 맛 점수

    private int flavorScore; // 향 점수

    private int throatScore; // 목넘김 점수

    private int bodyScore; // 바디감 점수

    private int refreshScore; // 청량감 점수

    private int score; // 전체 점수

    private String content; // 내용

//    // Entity -> DTO 변환
//    public ReviewDto toDto() {
//        return ReviewDto.builder()
//                .reviewId(this.reviewId)
//                .userDto(this.user.toDto())
//                .drinkDto(this.drink.toDto())
//                .sweetScore(this.sweetScore)
//                .sourScore(this.sourScore)
//                .flavorScore(this.flavorScore)
//                .throatScore(this.throatScore)
//                .bodyScore(this.bodyScore)
//                .refreshScore(this.refreshScore)
//                .score(this.score)
//                .content(this.content).build();
//    }

    // ReviewEntity -> ReviewResponseDto 변환
    public ReviewResponseDto toDto() {
        UserDto userDto = this.user.toDto();
        return ReviewResponseDto.builder()
                .reviewId(this.reviewId)
                .userId(userDto.getUserId())
                .userNickName(userDto.getNickname())
                .userImg(userDto.getImg())
                .score(this.score)
                .content(this.content).build();
    }
}
