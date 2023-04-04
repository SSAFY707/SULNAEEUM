package com.ssafy.sulnaeeum.model.user.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.Ingredient;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.IngredientRepo;
import com.ssafy.sulnaeeum.model.jubti.entity.JubtiResult;
import com.ssafy.sulnaeeum.model.jubti.repo.JubtiRepo;
import com.ssafy.sulnaeeum.model.ranking.dto.RecommendRankingDto;
import com.ssafy.sulnaeeum.model.user.dto.PresentDto;
import com.ssafy.sulnaeeum.util.FlaskUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class PresentService {

    private final JubtiRepo jubtiRepo;
    private final FlaskUtil flaskUtil;
    private final DrinkRepo drinkRepo;
    private final IngredientRepo ingredientRepo;

    @Transactional
    public List<RecommendRankingDto> getPresentDrink(PresentDto presentDto){
        String requestUrl = "https://j8a707.p.ssafy.io/flask/recommend/contents";
        Map<String, List> params = new HashMap<>();
        List<Integer> input_data = new ArrayList<>();

        String sex = presentDto.getSex();
        int ageNum = presentDto.getAge();

        String age = "";

        if(20 <= ageNum && ageNum < 30) age = "20s";
        else if(30 <= ageNum && ageNum < 40) age = "30s";
        else if(40 <= ageNum && ageNum < 50) age = "40s";
        else if(50 <= ageNum && ageNum < 60) age = "50s";
        else age = "60s";

        System.out.println(sex + " " + age);
        List<JubtiResult> jubtiResultList = jubtiRepo.findPresent(sex, age);
        System.out.println(jubtiResultList.size());

        int[] data = new int[13];

        for(int i = 0; i < jubtiResultList.size(); i++){
            data[0] += jubtiResultList.get(i).getTasteSweet();
            data[1] += jubtiResultList.get(i).getTasteSour();
            data[2] += jubtiResultList.get(i).getTasteRefresh();
            data[3] += jubtiResultList.get(i).getTasteFlavor();
            data[4] += jubtiResultList.get(i).getTasteThroat();
            data[5] += jubtiResultList.get(i).getTasteBody();
            data[6] += jubtiResultList.get(i).getLevel();
        }

        for(int i = 0; i < 13; i++) {
            data[i] = data[i] / jubtiResultList.size();
            input_data.add(data[i]);
        }

        if(presentDto.getTasteSweet() != 0){
            input_data.set(0, presentDto.getTasteSweet());
        }if(presentDto.getTasteSour() != 0){
            input_data.set(1, presentDto.getTasteSour());
        }if(presentDto.getTasteRefresh() != 0){
            input_data.set(2, presentDto.getTasteRefresh());
        }if(presentDto.getTasteFlavor() != 0){
            input_data.set(3, presentDto.getTasteFlavor());
        }if(presentDto.getTasteThroat() != 0){
            input_data.set(4, presentDto.getTasteThroat());
        }if(presentDto.getTasteBody() != 0){
            input_data.set(5, presentDto.getTasteBody());
        }

        System.out.println(input_data);

        params.put("input_data", input_data);

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = flaskUtil.requestFlask(requestUrl, params);

        System.out.println(jsonObject.keySet());
        System.out.println(jsonObject.get("0").toString());
        System.out.println(jsonObject.values());

        List<RecommendRankingDto> recommend = new ArrayList<>();

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
            RecommendRankingDto rankingDto = new RecommendRankingDto(drinkDto, ingredientList);

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
