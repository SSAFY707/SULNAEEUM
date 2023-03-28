package com.ssafy.sulnaeeum.model.jumak.repo;

import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JumakRepo extends JpaRepository<Jumak, Long> {

    @Query(value = "select * from jumak where jumak_id in (select jumak_id from drink_jumak where drink_id = ?1)", nativeQuery = true)
    List<Jumak> findByDrink(Long drinkId);
}
