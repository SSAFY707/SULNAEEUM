package com.ssafy.sulnaeeum.model.user.repo;

import com.ssafy.sulnaeeum.model.user.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {

    @EntityGraph(attributePaths = "authorities")
    Optional<User> findOneWithAuthoritiesByKakaoId(String kakaoId);

    Optional<User> findByKakaoId(String kakaoId);

    // kakao_id로 user_id 찾기
    @Query(value = "select user_id from user where kakao_id = ?1", nativeQuery = true)
    Optional<Long> findUserId(String kakaoId);
}
