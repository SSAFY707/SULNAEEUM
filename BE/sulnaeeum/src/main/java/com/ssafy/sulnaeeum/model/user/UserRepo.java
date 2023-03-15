package com.ssafy.sulnaeeum.model.user;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {

    @EntityGraph(attributePaths = "authorities")
    Optional<User> findOneWithAuthoritiesByKakaoId(String kakaoId);

    Optional<User> findByKakaoId(String kakaoId);
}
