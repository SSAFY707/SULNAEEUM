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
@Table(name="ingredient_type")
public class IngredientType {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long ingredientTypeId; // auto_increment PK

    @Column(length = 20, nullable = false)
    private String ingredientName; // 재료 이름
}
