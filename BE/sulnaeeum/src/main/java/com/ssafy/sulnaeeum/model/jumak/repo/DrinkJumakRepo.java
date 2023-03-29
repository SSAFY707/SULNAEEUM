package com.ssafy.sulnaeeum.model.jumak.repo;

import com.ssafy.sulnaeeum.model.jumak.entity.DrinkJumak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DrinkJumakRepo extends JpaRepository<DrinkJumak, Long> {

    @Query(value = "select * from drink_jumak where jumak_id =?1",nativeQuery = true)
    List<DrinkJumak> findByJumakId(Long jumakId);
}
