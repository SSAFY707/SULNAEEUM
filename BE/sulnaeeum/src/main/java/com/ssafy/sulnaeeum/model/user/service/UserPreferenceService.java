package com.ssafy.sulnaeeum.model.user.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.Ingredient;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.IngredientRepo;
import com.ssafy.sulnaeeum.model.ranking.dto.RankingDto;
import com.ssafy.sulnaeeum.model.user.dto.UserPreferenceDto;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.entity.UserPreference;
import com.ssafy.sulnaeeum.model.user.repo.UserPreferenceRepo;
import com.ssafy.sulnaeeum.model.user.repo.UserRepo;
import com.ssafy.sulnaeeum.util.FlaskUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserPreferenceService {
    private final UserPreferenceRepo userPreferenceRepo;
    private final UserRepo userRepository;
    private final FlaskUtil flaskUtil;
    private final DrinkRepo drinkRepo;
    private final IngredientRepo ingredientRepo;

    /***
     * 회원 가입 시 회원 취향을 저장
     ***/
    @Transactional
    public void preference(String kakaoId, UserPreferenceDto userPreferenceDto) {

        User user = userRepository.findByKakaoId(kakaoId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));

        UserPreference userPreference = userPreferenceRepo.findByUser(user).orElse(null);

        if(userPreference!=null){
            userPreference.updateInfo(userPreferenceDto.getTasteSour(),userPreferenceDto.getTasteSweet(),
                    userPreferenceDto.getTasteFlavor(), userPreferenceDto.getTasteRefresh(), userPreferenceDto.getTasteBody(),
                    userPreferenceDto.getTasteThroat(), userPreferenceDto.getLevel(),userPreferenceDto.getDish(), userPreferenceDto.getWeight());
        }
        else {
            userPreference = userPreferenceDto.toEntity();
            userPreference.setUser(user);
            userPreferenceRepo.save(userPreference);
        }

        user.updateFinish(true);
        user.updateInfo(userPreferenceDto.getSex(), userPreferenceDto.getAge());
    }

    /***
     * UserPreferenceDto 요청
     ***/
    public UserPreferenceDto getUserPreferenceDto(String kakaoId){
        User user = userRepository.findByKakaoId(kakaoId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));
        UserPreference userPreference = userPreferenceRepo.findByUser(user).get();

        if(userPreference == null) return null;

        UserPreferenceDto userPreferenceDto = new UserPreferenceDto(userPreference, user);

        return userPreferenceDto;
    }

    /***
     * 회원 취향을 활용하여 Flask 에게 컨텐츠 기반 추천 API 요청
     ***/
    @Transactional
    public List<RankingDto> recommendUserDrink(UserPreferenceDto userPreferenceDto) {

        int drinkLevel = 0;

        if(userPreferenceDto.getLevel() == 1){
            drinkLevel= 4;
        }else if (userPreferenceDto.getLevel() == 2){
            drinkLevel = 7;
        }else if (userPreferenceDto.getLevel() == 3){
            drinkLevel = 15;
        }else if (userPreferenceDto.getLevel() == 4){
            drinkLevel = 25;
        }else if (userPreferenceDto.getLevel() == 5){
            drinkLevel = 40;
        }

        List<Integer> input_data = new ArrayList<>();
        input_data.add(userPreferenceDto.getTasteSweet());
        input_data.add(userPreferenceDto.getTasteSour());
        input_data.add(userPreferenceDto.getTasteRefresh());
        input_data.add(userPreferenceDto.getTasteFlavor());
        input_data.add(userPreferenceDto.getTasteThroat());
        input_data.add(userPreferenceDto.getTasteBody());
        input_data.add(drinkLevel);

        String dish = userPreferenceDto.getDish();
        int[] dish_arr = null;

        if(dish.equals("전/무침")){
            dish_arr = new int[] {3, 0, 0, 0, 0, 0};
        }else if(dish.equals("육류")){
            dish_arr = new int[] {0, 3, 0, 0, 0, 0};
        }else if(dish.equals("해산물")){
            dish_arr = new int[] {0, 0, 3, 0, 0, 0};
        }else if(dish.equals("탕/전골")){
            dish_arr = new int[] {0, 0, 0, 3, 0, 0};
        }else if(dish.equals("양식")){
            dish_arr = new int[] {0, 0, 0, 0, 3, 0};
        }else{
            dish_arr = new int[] {0, 0, 0, 0, 0, 3};
        }

        for(int i = 0; i < 6; i++) input_data.add(dish_arr[i]);

        Map<String, List> params = new HashMap<>();
        params.put("input_data", input_data);

        System.out.println(params);

        String requestUrl = "https://j8a707.p.ssafy.io/flask/recommend/contents";
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = flaskUtil.requestFlask(requestUrl, params);

        System.out.println(jsonObject.keySet());
        System.out.println(jsonObject.get("0").toString());
        System.out.println(jsonObject.values());

        List<RankingDto> recommend = new ArrayList<>();

        for(int i = 0; i < 5; i++){
            String key = Integer.toString(i);
            String sVal = jsonObject.get(key).toString();

            JSONObject jsonValue = null;

            try {
                jsonValue = (JSONObject) jsonParser.parse(sVal);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            Long drinkId = (Long)jsonValue.get("drink_id");

            Drink drink = drinkRepo.findByDrinkId(drinkId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));
            DrinkDto drinkDto = drink.toDto();
            List<Ingredient> ingredients = ingredientRepo.findByDrink(drink);
            List<String> ingredientList = getIngredientName(ingredients);
            RankingDto rankingDto = new RankingDto(drinkDto, ingredientList);

            recommend.add(rankingDto);
        }

        return recommend;
    }

    private List<String> getIngredientName(List<Ingredient> ingredients){
        List<String> names = new ArrayList<>();

        for(int i = 0; i < ingredients.size(); i++) names.add(ingredients.get(i).getIngredientType().getIngredientName());

        return names;
    }
}
