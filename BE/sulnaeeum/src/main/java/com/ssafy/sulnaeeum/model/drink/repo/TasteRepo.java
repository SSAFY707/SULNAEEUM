package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.Taste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TasteRepo extends JpaRepository<Taste, Long> {

    @Query(value = "select * from taste where drink_id = ?1", nativeQuery = true)
    List<Taste> findTaste(Long drinkId);

    List<Taste> findByDrink(Drink drink);

    @Query(value = "select * from taste where drink_id = ?1 and taste_type_id=1", nativeQuery = true)
    Taste findSweetByDrinkId(Long drinkId);

    @Query(value = "select * from taste where drink_id = ?1 and taste_type_id=2", nativeQuery = true)
    Taste findSourByDrinkId(Long drinkId);

    @Query(value = "select * from taste where drink_id = ?1 and taste_type_id=3", nativeQuery = true)
    Taste findBodyByDrinkId(Long drinkId);

    @Query(value = "select * from taste where drink_id = ?1 and taste_type_id=4", nativeQuery = true)
    Taste findRefreshByDrinkId(Long drinkId);

    @Query(value = "select * from taste where drink_id = ?1 and taste_type_id=5", nativeQuery = true)
    Taste findFlavorByDrinkId(Long drinkId);

    @Query(value = "select * from taste where drink_id = ?1 and taste_type_id=6", nativeQuery = true)
    Taste findThroatByDrinkId(Long drinkId);
}
