package com.ssafy.sulnaeeum.model.jumak.repo;

import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JumakRepo extends JpaRepository<Jumak, Long> {

    @Query(value = "select * from jumak where jumak_id in (select jumak_id from drink_jumak where drink_id = ?1)", nativeQuery = true)
    List<Jumak> findByDrink(Long drinkId);

    @Query(value = "select * from jumak order by jumak_id desc limit 1", nativeQuery = true)
    Optional<Jumak> findLastJumak();

    Optional<Jumak> findByJumakId(Long jumakId);
}
