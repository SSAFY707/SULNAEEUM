package com.ssafy.sulnaeeum.model.jumak.entity;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
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
@Table(name="jumak")
public class DrinkJumak {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long drinkJumakId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drink_id")
    private Drink drink; // 전통주

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jumak_id")
    private Jumak jumak; // 술집
}
