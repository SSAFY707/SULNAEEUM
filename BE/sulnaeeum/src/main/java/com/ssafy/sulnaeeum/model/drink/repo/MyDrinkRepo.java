package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.MyDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MyDrinkRepo extends JpaRepository<MyDrink, Long> {

    // 해당하는 술을 해당하는 회원이 클리어 했는지 여부 확인
    @Query(value = "select * from my_drink where drink_id = ?1 and user_id = ?2", nativeQuery = true)
    Optional<MyDrink> findClearInfo(Long drinkId, Long userId);

    // 해당 회원이 클리어한 술 모두 조회
    @Query(value = "select * from my_drink where user_id = ?1", nativeQuery = true)
    List<MyDrink> findByUserId(Long userId);
}
