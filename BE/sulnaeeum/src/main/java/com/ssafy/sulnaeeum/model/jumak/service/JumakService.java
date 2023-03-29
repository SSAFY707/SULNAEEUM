package com.ssafy.sulnaeeum.model.jumak.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.entity.Drink;
import com.ssafy.sulnaeeum.model.drink.repo.DrinkRepo;
import com.ssafy.sulnaeeum.model.jumak.dto.DrinkJumakDto;
import com.ssafy.sulnaeeum.model.jumak.dto.JumakInfoDto;
import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import com.ssafy.sulnaeeum.model.jumak.repo.DrinkJumakRepo;
import com.ssafy.sulnaeeum.model.jumak.repo.JumakRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class JumakService {

    @Autowired
    JumakRepo jumakRepo;

    @Autowired
    DrinkJumakRepo drinkJumakRepo;

    @Autowired
    DrinkRepo drinkRepo;

    // 식당 정보 저장
    @Transactional
    public String insertJumak(JumakInfoDto jumakInfoDto) {
        jumakRepo.save(jumakInfoDto.toEntity());
        Optional<Jumak> jumak = jumakRepo.findLastJumak();
        if(jumak.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }

        for(Long drinkId: jumakInfoDto.getDrink()) {
            Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
            if(drink.isEmpty()) {
                throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
            }

            DrinkJumakDto drinkJumakDto = new DrinkJumakDto();
            drinkJumakDto.setJumakDto(jumak.get().toDto());
            drinkJumakDto.setDrinkDto(drink.get().toDto());
            drinkJumakRepo.save(drinkJumakDto.toEntity());
        }

        return "insert jumak success";
    }
}
