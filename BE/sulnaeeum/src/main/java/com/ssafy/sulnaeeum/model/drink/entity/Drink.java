package com.ssafy.sulnaeeum.model.drink.entity;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDetailDto;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDetailPageDto;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
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
@Table(name="drink")
public class Drink {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long drinkId; // auto_increment PK

    @Column(length = 25)
    private String drinkName; // 이름

    @Column(length = 2000)
    private String drinkInfo; // 정보

    private String drinkImage; // 이미지

    private String drinkSaleUrl; // 판매 사이트

    @Column(length = 100)
    private String drinkPrice; // 가격 (won)

    @Column(length = 100)
    private String drinkAmount; // 양 (ml)

    private int drinkLevel; // 도수

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drink_type_id")
    private DrinkType drinkType; // 주종

    private int likeCnt; // 찜 개수

    private int reviewCnt; // 리뷰 개수

    private double avgScore; // 평점 평균

    // Entity -> DTO 변환
    public DrinkDto toDto() {
        return DrinkDto.builder()
                .drinkId(this.drinkId)
                .drinkName(this.drinkName)
                .drinkInfo(this.drinkInfo)
                .drinkImage(this.drinkImage)
                .drinkSaleUrl(this.drinkSaleUrl)
                .drinkPrice(this.drinkPrice)
                .drinkAmount(this.drinkAmount)
                .drinkLevel(this.drinkLevel)
                .drinkTypeDto(this.drinkType.toDto())
                .likeCnt(this.likeCnt)
                .reviewCnt(this.reviewCnt)
                .avgScore(this.avgScore).build();
    }

    // DrinkEntity -> DrinkDetailDto (like, clear는 없음 - 나중에 set 할 예정)
    public DrinkDetailDto toDrinkDetailDto() {
        return DrinkDetailDto.builder()
                .drinkId(this.drinkId)
                .drinkName(this.drinkName)
                .drinkInfo(this.drinkInfo)
                .drinkImage(this.drinkImage)
                .drinkSaleUrl(this.drinkSaleUrl)
                .drinkPrice(this.drinkPrice)
                .drinkAmount(this.drinkAmount)
                .drinkLevel(this.drinkLevel)
                .drinkTypeName(this.drinkType.getDrinkTypeName())
                .avgScore(this.avgScore).build();
    }
}