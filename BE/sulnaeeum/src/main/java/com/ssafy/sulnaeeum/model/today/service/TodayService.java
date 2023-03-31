package com.ssafy.sulnaeeum.model.today.service;

import com.ssafy.sulnaeeum.model.drink.dto.DrinkDto;
import com.ssafy.sulnaeeum.model.drink.entity.Dish;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.repo.DishRepo;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.today.dto.TodayCheersDto;
import com.ssafy.sulnaeeum.model.today.dto.TodayDishDto;
import com.ssafy.sulnaeeum.model.today.dto.TodayDrinkDto;
import com.ssafy.sulnaeeum.model.today.entity.Cheers;
import com.ssafy.sulnaeeum.model.today.repo.CheersRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TodayService {

    private final DrinkRepo drinkRepo;
    private final DishRepo dishRepo;
    private final CheersRepo cheersRepo;

    @Transactional
    public TodayDrinkDto getTodayDrink(){
        List<Drink> drinkList = drinkRepo.findAll();
        int size = drinkList.size();

        int randomId = (int)(Math.random() * size);

        TodayDrinkDto todayDrinkDto = new TodayDrinkDto(drinkList.get(randomId).toDto());
        System.out.println(todayDrinkDto.toString());
        return todayDrinkDto;
    }

    @Transactional
    public TodayDishDto getTodayDish(){
        List<Dish> dishList = dishRepo.findAll();
        int size = dishList.size();

        int randomId = (int)(Math.random() * size);

        TodayDishDto todayDishDto = new TodayDishDto(dishList.get(randomId));
        System.out.println(todayDishDto.toString());
        return todayDishDto;
    }

    @Transactional
    public TodayCheersDto getTodayCheers(){
        List<Cheers> cheersList = cheersRepo.findAll();
        int size = cheersList.size();

        int randomId = (int)(Math.random() * size);

        TodayCheersDto todayCheersDto = new TodayCheersDto(cheersList.get(randomId));
        System.out.println(todayCheersDto.toString());
        return todayCheersDto;
    }
}
