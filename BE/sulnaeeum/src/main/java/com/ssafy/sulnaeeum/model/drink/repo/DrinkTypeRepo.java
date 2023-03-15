package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DrinkTypeRepo extends JpaRepository<DrinkType, Integer> {

    public Optional<DrinkType> findByDrinkTypeName(String drinkTypeName);
}
