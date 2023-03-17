package com.ssafy.sulnaeeum.model.mypage.entity;

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
    private User user; // 작성자

    private int taste1; // 첫 번째 맛 평가

    private int taste2; // 두 번째 맛 평가

    private int taste3; // 세 번째 맛 평가

    private String content; // 내용
}
