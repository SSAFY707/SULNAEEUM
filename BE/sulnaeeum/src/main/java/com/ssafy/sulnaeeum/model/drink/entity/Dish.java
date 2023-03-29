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
@Table(name="dish")
public class Dish {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long dishId; // auto_increment PK

    @Column(length = 20, nullable = false)
    private String dishName; // 안주 이름

    @Column(length = 10, nullable = false)
    private String dishCategory; // 안주 분류
}
