package com.ssafy.sulnaeeum.model.map.repo;

import com.ssafy.sulnaeeum.model.map.entity.Map;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepo extends JpaRepository<Map, Long> {
}
