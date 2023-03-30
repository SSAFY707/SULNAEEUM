package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.DishDrink;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DishDrinkRepo extends JpaRepository<DishDrink, Long> {

    List<DishDrink> findByDrink(Drink drink);
}
