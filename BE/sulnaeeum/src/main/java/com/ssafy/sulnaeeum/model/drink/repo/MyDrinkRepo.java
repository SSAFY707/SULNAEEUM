package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.MyDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyDrinkRepo extends JpaRepository<MyDrink, Long> {

    @Query(value = "select drink_id from my_drink where user_id = ?1", nativeQuery = true)
    List<Long> findMyDrink(Long userId);

    @Query(value = "select my_drink_id from my_drink where user_id = ?1 and drink_id = ?2", nativeQuery = true)
    Long findMyDrinkId(Long userId, Long drinkId);

    void deleteByMyDrinkId(Long myDrinkId);
}
