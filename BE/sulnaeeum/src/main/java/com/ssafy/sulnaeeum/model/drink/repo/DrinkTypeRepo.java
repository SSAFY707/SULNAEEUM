package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.DrinkType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface DrinkTypeRepo extends JpaRepository<DrinkType, Integer> {

    // 주종이름으로 주종 정보 찾기
    Optional<DrinkType> findByDrinkTypeName(String drinkTypeName);

    // 주종 아이디로 주종 이름 찾기
    @Query(value = "select drink_type_name from drink_type where drink_type_id = ?1", nativeQuery = true)
    Optional<String> findByDrinkTypeId(Long drinkTypeId);
}
