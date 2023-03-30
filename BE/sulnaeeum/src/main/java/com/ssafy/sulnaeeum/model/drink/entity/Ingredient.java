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
@Table(name="ingredient")
public class Ingredient {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long ingredientId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_type_id")
    private IngredientType ingredientType; // 재료

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drink_id")
    private Drink drink; // 전톻주
}
