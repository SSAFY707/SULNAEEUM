package com.ssafy.sulnaeeum.model.jubti;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JubtiRepo extends JpaRepository<JubtiResult, Long> {
}
