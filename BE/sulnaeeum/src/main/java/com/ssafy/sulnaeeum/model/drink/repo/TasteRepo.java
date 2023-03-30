package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.Taste;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TasteRepo extends JpaRepository<Taste, Long> {
    List<Taste> findByDrink(Drink drink);
}
