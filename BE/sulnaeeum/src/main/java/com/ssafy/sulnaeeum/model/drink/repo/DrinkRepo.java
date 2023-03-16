package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DrinkRepo extends JpaRepository<Drink, Integer> {

    // drink_id로 찾기
    Optional<Drink> findByDrinkId(Long drinkId);

    // 모두 조회하고, drink_name 순으로 정렬
    @Query(value = "select * from drink order by drink_name", nativeQuery = true)
    List<Drink> findAll();

    // drink_type_drink_type_id로 분류하여 조회하고, drink_name으로 정렬
    @Query(value = "select * from drink where drink_type_id = ?1 order by drink_name", nativeQuery = true)
    List<Drink> findByDrinkTypeId(Long drinkTypeId);
}
