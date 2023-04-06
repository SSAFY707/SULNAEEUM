package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DrinkRepo extends JpaRepository<Drink, Integer> {

    // drink_id로 찾기
    Optional<Drink> findByDrinkId(Long drinkId);

    /***
     * 정렬 조회
     ***/

    @Query(value = "select * from drink order by drink_name", nativeQuery = true)
    List<Drink> findAllSortByName();

    @Query(value = "select * from drink order by like_cnt + review_cnt desc", nativeQuery = true)
    List<Drink> findAllSortByPopularity();

    @Query(value = "select * from drink order by drink_level", nativeQuery = true)
    List<Drink> findAllSortByLevelAsc();

    @Query(value = "select * from drink order by drink_level desc", nativeQuery = true)
    List<Drink> findAllSortByLevelDesc();

    @Query(value = "select * from drink where drink_type_id = ?1 order by drink_name", nativeQuery = true)
    List<Drink> findSortByName(Long drinkTypeId);

    @Query(value = "select * from drink where drink_type_id = ?1 order by like_cnt + review_cnt desc", nativeQuery = true)
    List<Drink> findSortByPopularity(Long drinkTypeId);

    @Query(value = "select * from drink where drink_type_id = ?1 order by drink_level", nativeQuery = true)
    List<Drink> findSortByLevelAsc(Long drinkTypeId);

    @Query(value = "select * from drink where drink_type_id = ?1 order by drink_level desc", nativeQuery = true)
    List<Drink> findSortByLevelDesc(Long drinkTypeId);

    /***
     * 랭킹 조회
     ***/

    List<Drink> findTop10ByOrderByLikeCntDesc();

    List<Drink> findTop10ByOrderByReviewCntDesc();

    /***
     * 나이별 조회
     ***/

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.twenties", nativeQuery = true)
    List<Drink> findTwenties();

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.thirties", nativeQuery = true)
    List<Drink> findThirties();

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.forties", nativeQuery = true)
    List<Drink> findForties();

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.fifties", nativeQuery = true)
    List<Drink> findFifties();

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.sixties", nativeQuery = true)
    List<Drink> findSixties();

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.female", nativeQuery = true)
    List<Drink> findFemale();

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.male", nativeQuery = true)
    List<Drink> findMale();

    @Query(value = "select * from drink inner join ranking on drink.drink_id = ranking.total", nativeQuery = true)
    List<Drink> findTotal();

    /***
     * LIKE 키워드 검색 성능 테스트를 위함
     */
    @Query(value = "select * from drink where drink_name like %?1%", nativeQuery = true)
    List<Drink> searchKeywordTest(String keyword);
}
