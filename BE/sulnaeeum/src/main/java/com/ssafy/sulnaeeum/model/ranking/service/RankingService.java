package com.ssafy.sulnaeeum.model.ranking.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.entity.Ingredient;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.drink.repo.IngredientRepo;
import com.ssafy.sulnaeeum.model.jubti.entity.JubtiResult;
import com.ssafy.sulnaeeum.model.jubti.repo.JubtiRepo;
import com.ssafy.sulnaeeum.model.ranking.dto.JubtiTopDrinkDto;
import com.ssafy.sulnaeeum.model.ranking.dto.RankingDto;
import com.ssafy.sulnaeeum.model.ranking.dto.TopDrinkListDto;
import com.ssafy.sulnaeeum.model.ranking.entity.Ranking;
import com.ssafy.sulnaeeum.model.ranking.repo.RankingRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class RankingService {

    private final DrinkRepo drinkRepo;
    private final JubtiRepo jubtiRepo;
    private final RankingRepo rankingRepo;
    private final IngredientRepo ingredientRepo;

    @Transactional
    public TopDrinkListDto getTopLike() {

        List<Drink> topDrinkList = drinkRepo.findTop10ByOrderByLikeCntDesc();

        List<DrinkDto> topDrinkListDto = new ArrayList<>();
        for (Drink drink: topDrinkList) {
            topDrinkListDto.add(drink.toDto());
        }

        return TopDrinkListDto.builder().topDrinkList(topDrinkListDto).build();
    }

    @Transactional
    public TopDrinkListDto getTopReview() {

        List<Drink> topDrinkList = drinkRepo.findTop10ByOrderByReviewCntDesc();

        List<DrinkDto> topDrinkListDto = new ArrayList<>();
        for (Drink drink: topDrinkList) {
            topDrinkListDto.add(drink.toDto());
        }

        return TopDrinkListDto.builder().topDrinkList(topDrinkListDto).build();
    }

    @Transactional
    public JubtiTopDrinkDto getTopJubti() {

        List<Drink> femaleTopDrink = drinkRepo.findFemale();
        List<Drink> maleTopDrink = drinkRepo.findMale();
        List<Drink> totalTopDrink = drinkRepo.findTotal();

        for(int i = 0; i < 10; i++){
            System.out.println(femaleTopDrink.get(i).getDrinkId());
        }

        List<RankingDto> femaleTopDrinkDto = new ArrayList<>();
        List<RankingDto> maleTopDrinkDto = new ArrayList<>();
        List<RankingDto> totalTopDrinkDto = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            List<Ingredient> ingredients = ingredientRepo.findByDrink(femaleTopDrink.get(i));
            List<String> ingredientNameList = getIngredientName(ingredients);
            femaleTopDrinkDto.add(new RankingDto(femaleTopDrink.get(i).toDto(), ingredientNameList));

            ingredients = ingredientRepo.findByDrink(maleTopDrink.get(i));
            ingredientNameList = getIngredientName(ingredients);
            maleTopDrinkDto.add(new RankingDto(maleTopDrink.get(i).toDto(), ingredientNameList));

            ingredients = ingredientRepo.findByDrink(totalTopDrink.get(i));
            ingredientNameList = getIngredientName(ingredients);
            totalTopDrinkDto.add(new RankingDto(totalTopDrink.get(i).toDto(), ingredientNameList));
        }

        return JubtiTopDrinkDto.builder()
                .femaleTopDrink(femaleTopDrinkDto)
                .maleTopDrink(maleTopDrinkDto)
                .totalTopDrink(totalTopDrinkDto)
                .build();
    }

    private List<String> getIngredientName(List<Ingredient> ingredients){
        List<String> names = new ArrayList<>();

        for(int i = 0; i < ingredients.size(); i++) names.add(ingredients.get(i).getIngredientType().getIngredientName());

        return names;
    }

    @Transactional
    @Scheduled(cron = "0 0/1 13,14 * * *")
//    @Scheduled(cron = "0 0 0/1 * * *")
    public void jubtiRequest (){
        String requestUrl = "http://j8a707.p.ssafy.io/flask/ranking";
        Map<String, List> params = null;
        List<List<Integer>> input_data = new ArrayList<>();
        List<JubtiResult> jubtiResultList = jubtiRepo.findAll();

        int size = jubtiResultList.size();
        int maleCnt = 0, femaleCnt = 0, twentiesCnt = 0, thirtiesCnt = 0, fortiesCnt = 0, fiftiesCnt = 0, sixtiesCnt = 0;

        List<Integer> twenties = new ArrayList<>();
        List<Integer> thirties = new ArrayList<>();
        List<Integer> forties = new ArrayList<>();
        List<Integer> fifties = new ArrayList<>();
        List<Integer> sixties = new ArrayList<>();
        List<Integer> female = new ArrayList<>();
        List<Integer> male = new ArrayList<>();
        List<Integer> total = new ArrayList<>();

        for(int i = 0; i < 13; i++){
            twenties.add(0);
            thirties.add(0);
            forties.add(0);
            fifties.add(0);
            sixties.add(0);
            female.add(0);
            male.add(0);
            total.add(0);
        }

        for(int i = 0; i < size; i++){
            params = new HashMap<>();
            List<Integer> input = new ArrayList<>();

            JubtiResult jubti = jubtiResultList.get(i);

            String dish = jubti.getDish();
            int[] dish_arr = null;

            if(dish.equals("jeon")){
                dish_arr = new int[] {3, 0, 0, 0, 0, 0};
            }else if(dish.equals("meat")){
                dish_arr = new int[] {0, 3, 0, 0, 0, 0};
            }else if(dish.equals("seafood")){
                dish_arr = new int[] {0, 0, 3, 0, 0, 0};
            }else if(dish.equals("soup")){
                dish_arr = new int[] {0, 0, 0, 3, 0, 0};
            }else if(dish.equals("western")){
                dish_arr = new int[] {0, 0, 0, 0, 3, 0};
            }else{
                dish_arr = new int[] {0, 0, 0, 0, 0, 3};
            }

            input.add(jubti.getTasteSweet());
            input.add(jubti.getTasteSour());
            input.add(jubti.getTasteRefresh());
            input.add(jubti.getTasteFlavor());
            input.add(jubti.getTasteThroat());
            input.add(jubti.getTasteBody());
            input.add(jubti.getLevel());

            for(int j = 0; j < 6; j++) input.add(dish_arr[j]);

            for(int j = 0; j < 13; j++){
                if(jubti.getSex().equals("남성")){
                    male.set(j, input.get(j) + male.get(j));
                    maleCnt++;
                }else{
                    female.set(j, input.get(j) + female.get(j));
                    femaleCnt++;
                }

                if(jubti.getAge().equals("20s")){
                    twenties.set(j, input.get(j) + twenties.get(j));
                    twentiesCnt++;
                }else if(jubti.getAge().equals("30s")){
                    thirties.set(j, input.get(j) + thirties.get(j));
                    thirtiesCnt++;
                }else if(jubti.getAge().equals("40s")){
                    forties.set(j, input.get(j) + forties.get(j));
                    fortiesCnt++;
                }else if(jubti.getAge().equals("50s")){
                    fifties.set(j, input.get(j) + fifties.get(j));
                    fiftiesCnt++;
                }else {
                    sixties.set(j, input.get(j) + sixties.get(j));
                    sixtiesCnt++;
                }

                total.set(j, input.get(j) + total.get(j));
            }
        }

        for(int i = 0; i < 13; i++){
            male.set(i, male.get(i) / maleCnt);
            female.set(i, female.get(i) / femaleCnt);
            twenties.set(i, twenties.get(i) / twentiesCnt);
            thirties.set(i, thirties.get(i) / thirtiesCnt);
            forties.set(i, forties.get(i) / fortiesCnt);
            fifties.set(i, fifties.get(i) / fiftiesCnt);
            sixties.set(i, sixties.get(i) / sixtiesCnt);
            total.set(i, total.get(i) / size);
        }

        input_data.add(male);
        input_data.add(female);
        input_data.add(total);
        input_data.add(twenties);
        input_data.add(thirties);
        input_data.add(forties);
        input_data.add(fifties);
        input_data.add(sixties);

        params.put("input_data", input_data);
        System.out.println(params);

        HttpHeaders headers = new HttpHeaders();
        headers.add("accept", "text/plain;charset=UTF-8");

        HttpEntity<Map<String, List>> entity = new HttpEntity<>(params, headers);

        RestTemplate rt = new RestTemplate();

        ResponseEntity<String> response = rt.exchange(
                requestUrl,
                HttpMethod.POST,
                entity,
                String.class
        );
        String result = response.getBody();

        setTopJubti(result);
    }

    public String setTopJubti(String result){

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = null;

        try {
            jsonObject = (JSONObject) jsonParser.parse(result);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        List<List<Drink>> topDrink = new ArrayList<>();

        for(int i = 0; i < 8; i++){
            String key = Integer.toString(i);
            String sVal = jsonObject.get(key).toString();

            topDrink.add(new ArrayList<>());
            List<Map<String, String>> jsonList = null;

            try {
                jsonList = (List) jsonParser.parse(sVal);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            for(int j = 0; j < jsonList.size(); j++){
                JSONObject jsonValue = null;

                try {
                    jsonValue = (JSONObject) jsonParser.parse(jsonList.get(j).toString());
                } catch (ParseException e) {
                    e.printStackTrace();
                }

                Long drink_id = (Long)jsonValue.get("drink_id");

                Optional<Drink> findDrink = drinkRepo.findByDrinkId(drink_id);
                if(findDrink.isEmpty()) {
                    throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
                }

                topDrink.get(i).add(findDrink.get());
            }
        }

        for(int i = 0; i < topDrink.get(0).size(); i++){
            Ranking ranking = new Ranking();
            if(!rankingRepo.findById((long)i+1).isEmpty()){
                System.out.println(i+1 + "번 있음!");
                ranking = rankingRepo.findById((long)i+1).get();
            }

            ranking.setMale(topDrink.get(0).get(i));
            ranking.setFemale(topDrink.get(1).get(i));
            ranking.setTotal(topDrink.get(2).get(i));
            ranking.setTwenties(topDrink.get(3).get(i));
            ranking.setThirties(topDrink.get(4).get(i));
            ranking.setForties(topDrink.get(5).get(i));
            ranking.setFifties(topDrink.get(6).get(i));
            ranking.setSixties(topDrink.get(7).get(i));

            System.out.println("성공");
            rankingRepo.save(ranking);
        }

        return "good";
    }
}
