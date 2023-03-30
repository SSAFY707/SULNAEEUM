package com.ssafy.sulnaeeum.model.mypage.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.entity.*;
import com.ssafy.sulnaeeum.model.drink.repo.*;
import com.ssafy.sulnaeeum.model.mypage.dto.Word;
import com.ssafy.sulnaeeum.model.mypage.dto.Words;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class MypageService {
    private final UserRepo userRepository;
    private final ReviewRepo reviewRepo;
    private final LikeDrinkRepo likeDrinkRepo;
    private final TasteRepo tasteRepo;
    private final DishDrinkRepo drinkRepo;
    private final IngredientRepo ingredientRepo;
    Map<String, Double> counting;

    public UserDto getInfo(String kakaoId) {

        User user = userRepository.findByKakaoId(kakaoId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));

        return user.toDto();
    }

    @Transactional
    public Words textmMining(String kakaoId) {


        User user = userRepository.findByKakaoId(kakaoId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));

        // 마신 술 조회 - 주종 정보 + 술의 번호
        List<Review> clearDrinks = reviewRepo.findAllByDrinkId(user.getUserId());

        // 찜한 술 조회 - 주종 정보 + 술의 번호
        List<LikeDrink> likeDrinks = likeDrinkRepo.findByUserId(user.getUserId());

        counting = new HashMap<>();

        // 마신 & 찜한 술의 번호들로 맛, 재료, 안주 조회 후 카운팅
        for (Review clearDrink :clearDrinks) {
            textMiningCal(clearDrink.getDrink());
        }
        for (LikeDrink likeDrink :likeDrinks) {
            textMiningCal(likeDrink.getDrink());
        }
        
        List<Word> words = new ArrayList<>();
        for (Map.Entry<String, Double> entry :counting.entrySet()) {
            words.add(new Word(entry.getKey(),entry.getValue()));
        }

        Collections.sort(words);
        return Words.builder().words(words).build();
    }

    public void textMiningCal(Drink drink) {
        Double dev = 5.0;
        // 타입
        if(counting.containsKey(drink.getDrinkType().getDrinkTypeName())){
            counting.put(drink.getDrinkType().getDrinkTypeName(), counting.get(drink.getDrinkType().getDrinkTypeName())+1);
        } else {
            counting.put(drink.getDrinkType().getDrinkTypeName(),1.0);
        }
        // 맛
        List<Taste> tastes = tasteRepo.findByDrink(drink);

        for (Taste taste : tastes){
            if(taste.getTasteType().getTasteName().equals("바디감")){
                Double heaviness = 0.0;
                Double lightness = 0.0;

                if(taste.getScore()==1) {
                    heaviness = 0.0;
                    lightness = 5.0;

                } else if(taste.getScore()==2) {
                    heaviness = 0.0;
                    lightness = 3.0;

                } else if(taste.getScore()==3) {
                    heaviness = 1.0;
                    lightness = 1.0;

                } else if(taste.getScore()==4) {
                    heaviness = 3.0;
                    lightness = 0.0;

                } else if(taste.getScore()==5) {
                    heaviness = 5.0;
                    lightness = 0.0;
                }

                if(counting.containsKey("무거움")){
                    counting.put("무거움", counting.get("무거움")+heaviness/dev);
                } else {
                    counting.put("무거움",heaviness/dev);
                }

                if(counting.containsKey("가벼움")){
                    counting.put("가벼움", counting.get("가벼움")+lightness/dev);
                } else {
                    counting.put("가벼움",lightness/dev);
                }

            } else if(taste.getTasteType().getTasteName().equals("목넘김")){
                Double soft = 0.0;
                Double coarseness = 0.0;

                if(taste.getScore()==1) {
                    coarseness = 0.0;
                    soft = 5.0;

                } else if(taste.getScore()==2) {
                    coarseness = 0.0;
                    soft = 3.0;

                } else if(taste.getScore()==3) {
                    coarseness = 1.0;
                    soft = 1.0;

                } else if(taste.getScore()==4) {
                    coarseness = 3.0;
                    soft = 0.0;

                } else if(taste.getScore()==5) {
                    coarseness = 5.0;
                    soft = 0.0;
                }

                if(counting.containsKey("부드러움")){
                    counting.put("부드러움", counting.get("부드러움")+soft/dev);
                } else {
                    counting.put("부드러움",soft/dev);
                }

                if(counting.containsKey("거침")){
                    counting.put("거침", counting.get("거침")+coarseness/dev);
                } else {
                    counting.put("거침",coarseness/dev);
                }

            } else {
                if(counting.containsKey(taste.getTasteType().getTasteName())){
                    counting.put(taste.getTasteType().getTasteName(),taste.getScore()/dev);
                }
            }
        }

        // 안주
        List<DishDrink> dishDrinks = drinkRepo.findByDrink(drink);

        for(DishDrink dishDrink : dishDrinks) {
            if(counting.containsKey(dishDrink.getDish().getDishCategory())){
                counting.put(dishDrink.getDish().getDishCategory(), counting.get(dishDrink.getDish().getDishCategory())+1.0);
            } else {
                counting.put(dishDrink.getDish().getDishCategory(),1.0);
            }

            if(counting.containsKey(dishDrink.getDish().getDishName())){
                counting.put(dishDrink.getDish().getDishName(), counting.get(dishDrink.getDish().getDishName())+1.0);
            } else {
                counting.put(dishDrink.getDish().getDishName(),1.0);
            }
        }

        // 재료
        List<Ingredient> ingredients = ingredientRepo.findByDrink(drink);

        for (Ingredient ingredient : ingredients) {
            if(counting.containsKey(ingredient.getIngredientType().getIngredientName())){
                counting.put(ingredient.getIngredientType().getIngredientName(), counting.get(ingredient.getIngredientType().getIngredientName())+1.0);
            } else {
                counting.put(ingredient.getIngredientType().getIngredientName(),1.0);
            }
        }
    }
}
