package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.IngredientType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientTypeRepo extends JpaRepository<IngredientType, Long> {

    // 해당 술의 재료 모두 조회
    @Query(value = "select ingredient_name from ingredient_type where ingredient_type_id in (select ingredient_type_id from ingredient where drink_id = ?1)", nativeQuery = true)
    List<String> findIngredientName(Long drinkId);
}
