package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DrinkRepo extends JpaRepository<Drink, Integer> {

    // drink_id로 찾기
    Optional<Drink> findByDrinkId(Long drinkId);

    // drink_type_id로 찾기
    List<Drink> findByDrinkType(Long drinkTypeId);
}
