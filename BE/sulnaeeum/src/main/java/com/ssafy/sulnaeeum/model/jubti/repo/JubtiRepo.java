package com.ssafy.sulnaeeum.model.jubti.repo;

import com.ssafy.sulnaeeum.model.jubti.entity.JubtiResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JubtiRepo extends JpaRepository<JubtiResult, Long> {
}
