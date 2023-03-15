package com.ssafy.sulnaeeum.model.drink.entity;

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
@Table(name="DrinkController")
public class Drink {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private int drinkId; // auto_increment PK

    @Column(length = 25)
    private String drinkName; // 전통주 이름

    private String drinkInfo; // 전통주 정보

    private String drinkSaleUrl; // 전통주 판매 사이트

    @Column(length = 10)
    private String drinkPrice; // 가격 (won)

    @Column(length = 10)
    private String drinkAmount; // 양 (ml)

    private int drinkLevel; // 도수

    @ManyToOne(fetch = FetchType.LAZY)
    private DrinkType drinkType; // 주종
}
