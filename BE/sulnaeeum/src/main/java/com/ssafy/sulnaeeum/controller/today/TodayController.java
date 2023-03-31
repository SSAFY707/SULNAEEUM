package com.ssafy.sulnaeeum.controller.today;

import com.ssafy.sulnaeeum.model.today.dto.TodayCheersDto;
import com.ssafy.sulnaeeum.model.today.dto.TodayDishDto;
import com.ssafy.sulnaeeum.model.today.dto.TodayDrinkDto;
import com.ssafy.sulnaeeum.model.today.service.TodayService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/today")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "UserController", description = "오늘의 API")
public class TodayController {

    private final TodayService todayService;

    @GetMapping("/n/cheers")
    @Operation(summary = "오늘의 건배사", description = "랜덤으로 저장된 오늘의 건배사 보여주기")
    public ResponseEntity<TodayCheersDto> getTodayCheers(){
        TodayCheersDto cheersDto = new TodayCheersDto();
        return new ResponseEntity<>(cheersDto, HttpStatus.OK);
    }

    @GetMapping("/n/drink")
    @Operation(summary = "오늘의 전통주", description = "랜덤으로 저장된 오늘의 전통주 보여주기")
    public ResponseEntity<TodayDrinkDto> getTodayDrink(){
        TodayDrinkDto todayDrinkDto = todayService.getTodayDrink();
        return new ResponseEntity<>(todayDrinkDto, HttpStatus.OK);
    }

    @GetMapping("/n/dish")
    @Operation(summary = "오늘의 전통주", description = "랜덤으로 저장된 오늘의 전통주 보여주기")
    public ResponseEntity<TodayDishDto> getTodayDish(){
        TodayDishDto todayDishDto = todayService.getTodayDish();
        return new ResponseEntity<>(todayDishDto, HttpStatus.OK);
    }
}
