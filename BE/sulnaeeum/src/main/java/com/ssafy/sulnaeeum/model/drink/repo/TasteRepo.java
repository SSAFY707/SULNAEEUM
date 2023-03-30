package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Taste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TasteRepo extends JpaRepository<Taste, Long> {

    @Query(value = "select * from taste where drink_id = ?1", nativeQuery = true)
    List<Taste> findTaste(Long drinkId);
}
