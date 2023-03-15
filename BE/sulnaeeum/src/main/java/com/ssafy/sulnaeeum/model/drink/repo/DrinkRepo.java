package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DrinkRepo extends JpaRepository<Drink, Integer> {

    public Optional<Drink> findByDrinkId(Long drinkId);

    @Query(value = "select * from drink order by drink_name", nativeQuery = true)
    public List<Drink> findAll();

    @Query(value = "select * from drink where drink_type_drink_type_id = ?1 order by drink_name", nativeQuery = true)
    public List<Drink> findByDrinkTypeId(Long drinkTypeId);
}
