package com.ssafy.sulnaeeum.model.jumak.repo;

import com.ssafy.sulnaeeum.model.jumak.entity.DrinkJumak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinkJumakRepo extends JpaRepository<DrinkJumak, Long> {
}
