package com.ssafy.sulnaeeum.model.drink.entity;

import com.ssafy.sulnaeeum.model.drink.dto.TasteDto;
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
@Table(name="taste")
public class Taste {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long tasteId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drink_id")
    private Drink drink; // 전통주

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "taste_type_id")
    private TasteType tasteType; // 맛

    @Column(nullable = false)
    private int score; // 맛 점수
}
