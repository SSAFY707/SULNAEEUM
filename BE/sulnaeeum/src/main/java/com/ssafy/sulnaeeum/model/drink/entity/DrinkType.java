package com.ssafy.sulnaeeum.model.drink.entity;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkTypeDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="drink_type")
@Getter
public class DrinkType {

    @Id
    @GeneratedValue
    @Column(name = "drink_type_id")
    private Long drinkTypeId; // auto_increment PK

    private String drinkTypeName; // 주종 이름

    public DrinkTypeDto toDto(){
        return DrinkTypeDto.builder()
                .drinkTypeId(this.drinkTypeId)
                .drinkTypeName(this.drinkTypeName)
                .build();
    }
}