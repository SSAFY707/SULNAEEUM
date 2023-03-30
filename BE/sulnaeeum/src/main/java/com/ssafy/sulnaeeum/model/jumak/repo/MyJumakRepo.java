package com.ssafy.sulnaeeum.model.jumak.repo;

import com.ssafy.sulnaeeum.model.jumak.entity.MyJumak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MyJumakRepo extends JpaRepository<MyJumak, Long> {

    @Query(value = "select * from my_jumak where user_id = ?1", nativeQuery = true)
    List<MyJumak> findByUserId(Long userId);
}
