package com.ssafy.sulnaeeum.model.map.repo;

import com.ssafy.sulnaeeum.model.map.entity.Brewery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BreweryRepo extends JpaRepository<Brewery, Long> {

    @Query(value = "select * from brewery where map_id = ?1", nativeQuery = true)
    List<Brewery> findByMapId(Long mapId);
}
