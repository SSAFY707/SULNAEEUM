package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.model.drink.dto.SimilarDrinkDto;
import com.ssafy.sulnaeeum.model.jubti.entity.JubtiResult;
import com.ssafy.sulnaeeum.model.jubti.repo.JubtiRepo;
import com.ssafy.sulnaeeum.model.jubti.dto.PresentDto;
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

    @Transactional
    public List<SimilarDrinkDto> getPresentDrink(PresentDto presentDto){
        String requestUrl = "http://j8a707.p.ssafy.io:5000/recommend/contents";
        Map<String, List> params = new HashMap<>();
        List<Integer> input_data = new ArrayList<>();

        String sex = presentDto.getSex();
        String age = presentDto.getAge();

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

        if(presentDto.getTasteSweet() != 0)

        System.out.println(input_data);

        params.put("input_data", input_data);

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = flaskUtil.requestFlask(requestUrl, params);

        System.out.println(jsonObject.keySet());
        System.out.println(jsonObject.get("0").toString());
        System.out.println(jsonObject.values());

        List<SimilarDrinkDto> recommend = new ArrayList<>();

        for(int i = 0; i < 5; i++){
            String key = Integer.toString(i);
            String sVal = jsonObject.get(key).toString();

            JSONObject jsonValue = null;

            try {
                jsonValue = (JSONObject) jsonParser.parse(sVal);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            SimilarDrinkDto similarDrinkDto = new SimilarDrinkDto(jsonValue);
            recommend.add(similarDrinkDto);
        }

        return recommend;
    }
}
