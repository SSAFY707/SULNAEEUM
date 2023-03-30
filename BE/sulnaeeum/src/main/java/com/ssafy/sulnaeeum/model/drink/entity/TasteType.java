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
@Table(name="taste_type")
public class TasteType {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long tasteTypeId; // auto_increment PK

    @Column(length = 10, nullable = false)
    private String tasteName; // 맛 종류
}
