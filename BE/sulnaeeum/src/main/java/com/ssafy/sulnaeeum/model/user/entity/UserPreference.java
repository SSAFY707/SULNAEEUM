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

    @Column(length = 20, nullable = false)
    private String dish; // 안주

    @Column(length = 20, nullable = false)
    private String weight; // 가중치

    public void updateInfo(int tasteSour, int tasteSweet, int tasteFlavor, int tasteRefresh, int tasteBody, int tasteThroat, int level, String dish, String weight ){
        this.tasteSour = tasteSour;
        this.tasteSweet = tasteSweet;
        this.tasteFlavor = tasteFlavor;
        this.tasteRefresh = tasteRefresh;
        this.tasteBody = tasteBody;
        this.tasteThroat = tasteThroat;
        this.level = level;
        this.dish = dish;
        this.weight = weight;
    }
}
