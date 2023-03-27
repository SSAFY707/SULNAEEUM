package com.ssafy.sulnaeeum.model.map.repo;

import com.ssafy.sulnaeeum.model.map.entity.Brewery;
import com.ssafy.sulnaeeum.model.map.entity.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProgramRepo extends JpaRepository<Program, Long> {

    @Query(value = "select * from program where map_id = ?1", nativeQuery = true)
    List<Program> findByMapId(Long mapId);
}
