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
@Table(name="drink_type")
public class DrinkType {

    @Id
    @GeneratedValue
    @Column(name = "drink_type_id")
    private int drinkTypeId; // auto_increment PK

    private String drinkTypeName; // 주종 이름
}