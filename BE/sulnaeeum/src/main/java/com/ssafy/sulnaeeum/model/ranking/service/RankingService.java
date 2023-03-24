package com.ssafy.sulnaeeum.model.ranking.service;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.ranking.dto.JubtiTopDrinkDto;
import com.ssafy.sulnaeeum.model.ranking.dto.TopDrinkListDto;
import com.ssafy.sulnaeeum.model.ranking.repo.RankingRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RankingService {

    private final DrinkRepo drinkRepo;

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

        List<Drink> twentiesTopDrink = drinkRepo.findTwenties();
        List<Drink> thirtiesTopDrink = drinkRepo.findThirties();
        List<Drink> fortiesTopDrink = drinkRepo.findForties();
        List<Drink> fiftiesTopDrink = drinkRepo.findFifties();
        List<Drink> sixtiesTopDrink = drinkRepo.findSixties();
        List<Drink> femaleTopDrink = drinkRepo.findFemale();
        List<Drink> maleTopDrink = drinkRepo.findMale();

        List<DrinkDto> twentiesTopDrinkDto = new ArrayList<>();
        List<DrinkDto> thirtiesTopDrinkDto = new ArrayList<>();
        List<DrinkDto> fortiesTopDrinkDto = new ArrayList<>();
        List<DrinkDto> fiftiesTopDrinkDto = new ArrayList<>();
        List<DrinkDto> sixtiesTopDrinkDto = new ArrayList<>();
        List<DrinkDto> femaleTopDrinkDto = new ArrayList<>();
        List<DrinkDto> maleTopDrinkDto = new ArrayList<>();

        for (int i = 0; i < twentiesTopDrink.size(); i++) {
            twentiesTopDrinkDto.add(twentiesTopDrink.get(i).toDto());
            thirtiesTopDrinkDto.add(thirtiesTopDrink.get(i).toDto());
            fortiesTopDrinkDto.add(fortiesTopDrink.get(i).toDto());
            fiftiesTopDrinkDto.add(fiftiesTopDrink.get(i).toDto());
            sixtiesTopDrinkDto.add(sixtiesTopDrink.get(i).toDto());
            femaleTopDrinkDto.add(femaleTopDrink.get(i).toDto());
            maleTopDrinkDto.add(maleTopDrink.get(i).toDto());
        }

        return JubtiTopDrinkDto.builder()
                .twentiesTopDrink(twentiesTopDrinkDto)
                .thirtiesTopDrink(thirtiesTopDrinkDto)
                .fortiesTopDrink(fortiesTopDrinkDto)
                .fiftiesTopDrink(fiftiesTopDrinkDto)
                .sixtiesTopDrink(sixtiesTopDrinkDto)
                .femaleTopDrink(femaleTopDrinkDto)
                .maleTopDrink(maleTopDrinkDto)
                .build();
    }
}
