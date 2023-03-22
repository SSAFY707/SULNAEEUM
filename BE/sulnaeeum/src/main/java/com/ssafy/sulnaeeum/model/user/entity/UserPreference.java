package com.ssafy.sulnaeeum.model.user.entity;

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
@Table(name="user_preference")
public class UserPreference {

    @Id
    @Column(name="preference_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long preferenceId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 찜한 회원

    @Column(nullable = false)
    private int tasteSour; // 신맛

    @Column(nullable = false)
    private int tasteSweet; // 단맛

    @Column(nullable = false)
    private int tasteFlavor; // 향

    @Column(nullable = false)
    private int tasteRefresh; // 청량감

    @Column(nullable = false)
    private int tasteBody; // 바디감

    @Column(nullable = false)
    private int tasteThroat; // 목넘김

    @Column(nullable = false)
    private int level; // 도수
    @Column(length = 10, nullable = false)
    private String dish; // 안주
}
