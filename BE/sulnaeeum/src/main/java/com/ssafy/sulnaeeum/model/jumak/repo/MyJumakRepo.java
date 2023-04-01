package com.ssafy.sulnaeeum.model.jumak.repo;

import com.ssafy.sulnaeeum.model.jumak.entity.MyJumak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MyJumakRepo extends JpaRepository<MyJumak, Long> {

    @Query(value = "select * from my_jumak where user_id = ?1", nativeQuery = true)
    List<MyJumak> findByUserId(Long userId);

    // user_id, jumak_id로 내가 찜한 전통주 술집 찾기
    @Query(value = "select * from my_jumak where user_id = ?1 and jumak_id = ?2", nativeQuery = true)
    Optional<MyJumak> findMyJumak(Long userId, Long jumakId);
}
