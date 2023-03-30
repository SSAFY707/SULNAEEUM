package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface IngredientRepo extends JpaRepository<Ingredient, Long> {
    @Query(value = "select * from ingredient where drink_id = ?1", nativeQuery = true)
    List<Ingredient> findAllByDrinkId(Long drinkId);
}