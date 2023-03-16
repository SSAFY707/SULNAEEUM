package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DrinkTypeRepo extends JpaRepository<DrinkType, Integer> {

    // 주종이름으로 주종 정보 찾기
    Optional<DrinkType> findByDrinkTypeName(String drinkTypeName);
}
