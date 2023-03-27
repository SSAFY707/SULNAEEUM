package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {

    // 해당 술의 내 리뷰 조회
    @Query(value = "select * from review where user_id = ?1 and drink_id = ?2", nativeQuery = true)
    Optional<Review> findMyReview(Long userId, Long drinkId);

    // 해당 전통주의 모든 리뷰 조회
    @Query(value = "select * from review where drink_id = ?1", nativeQuery = true)
    List<Review> findAllByDrinkId(Long drinkId);
}
