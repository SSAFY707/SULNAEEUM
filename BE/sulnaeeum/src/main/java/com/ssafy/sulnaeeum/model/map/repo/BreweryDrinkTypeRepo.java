package com.ssafy.sulnaeeum.model.map.repo;

import com.ssafy.sulnaeeum.model.map.entity.BreweryDrinkType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BreweryDrinkTypeRepo extends JpaRepository<BreweryDrinkType, Long> {

    // 해당 양조장에 해당하는 모든 주종 조회
    @Query(value = "select drink_type_id from brewery_drink_type where brewery_id = ?1", nativeQuery = true)
    List<Integer> findByBreweryId(Long breweryId);
}
