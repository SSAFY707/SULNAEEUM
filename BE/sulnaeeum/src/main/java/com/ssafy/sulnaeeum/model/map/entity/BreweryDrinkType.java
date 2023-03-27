package com.ssafy.sulnaeeum.model.map.entity;

import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import com.ssafy.sulnaeeum.model.map.dto.BreweryDrinkTypeDto;
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
@Table(name="brewery_drink_type")
public class BreweryDrinkType {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long breweryDrinkTypeId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drink_type_id")
    private DrinkType drinkType; // 주종

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brewery_id")
    private Brewery brewery; // 양조장

    // Entity -> DTO 변환
    public BreweryDrinkTypeDto toDto() {
        return BreweryDrinkTypeDto.builder()
                .breweryDrinkTypeId(this.breweryDrinkTypeId)
                .drinkTypeDto(this.drinkType.toDto())
                .breweryDto(this.brewery.toDto()).build();
    }
}
