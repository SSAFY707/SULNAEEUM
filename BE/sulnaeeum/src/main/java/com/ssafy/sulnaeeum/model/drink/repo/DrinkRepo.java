package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DrinkRepo extends JpaRepository<Drink, Integer> {

    // drink_id로 찾기
    Optional<Drink> findByDrinkId(Long drinkId);

    // drink_type_id로 찾기
    List<Drink> findByDrinkType(Long drinkTypeId);

    List<Drink> findTop10ByOrderByLikeCntDesc();

    List<Drink> findTop10ByOrderByReviewCntDesc();

    @Query(value = "select * from drink where drink_id in (select twenties from ranking)", nativeQuery = true)
    List<Drink> findTwenties();

    @Query(value = "select * from drink where drink_id in (select thirties from ranking)", nativeQuery = true)
    List<Drink> findThirties();

    @Query(value = "select * from drink where drink_id in (select forties from ranking)", nativeQuery = true)
    List<Drink> findForties();

    @Query(value = "select * from drink where drink_id in (select fifties from ranking)", nativeQuery = true)
    List<Drink> findFifties();

    @Query(value = "select * from drink where drink_id in (select sixties from ranking)", nativeQuery = true)
    List<Drink> findSixties();

    @Query(value = "select * from drink where drink_id in (select female from ranking)", nativeQuery = true)
    List<Drink> findFemale();

    @Query(value = "select * from drink where drink_id in (select male from ranking)", nativeQuery = true)
    List<Drink> findMale();
}
