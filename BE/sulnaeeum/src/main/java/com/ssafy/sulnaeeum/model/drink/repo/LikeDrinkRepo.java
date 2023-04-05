package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.LikeDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeDrinkRepo extends JpaRepository<LikeDrink, Long> {

    // 해당하는 술을 해당하는 회원이 찜 했는지 여부 확인
    @Query(value = "select * from like_drink where drink_id = ?1 and user_id = ?2", nativeQuery = true)
    Optional<LikeDrink> findLikeInfo(Long drinkId, Long userId);

    // 해당 회원이 찜한 술 모두 조회
    @Query(value = "select * from like_drink where user_id = ?1", nativeQuery = true)
    List<LikeDrink> findByUserId(Long userId);

    // 해당 회원이 찜한 모든 술의 id 조회
    @Query(value = "select drink_id from like_drink where user_id = ?1", nativeQuery = true)
    List<Long> findMyDrink(Long userId);

    @Query(value = "select count(*) from like_drink where user_id = ?1", nativeQuery = true)
    int findCntByUser(Long userId);
}
