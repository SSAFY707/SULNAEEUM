package com.ssafy.sulnaeeum.model.jubti.repo;

import com.ssafy.sulnaeeum.model.jubti.entity.JubtiResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JubtiRepo extends JpaRepository<JubtiResult, Long> {
    @Query(value = "select * from jubti_result where sex = ?1 and age = ?2", nativeQuery = true)
    List<JubtiResult> findPresent(String sex, String age);
}
