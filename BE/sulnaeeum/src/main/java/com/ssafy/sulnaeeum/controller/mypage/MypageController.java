package com.ssafy.sulnaeeum.controller.mypage;

import com.ssafy.sulnaeeum.model.mypage.dto.LikeDrinkDto;
import com.ssafy.sulnaeeum.model.mypage.service.LikeDrinkService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mypage")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "MypageController", description = "마이페이지 API")
public class MypageController {

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";
    private final LikeDrinkService likeDrinkService;
    /***
     * [찜한 전통주 조회]
     ***/
    @Operation(summary = "찜한 전통주 조회", description = "찜한 전통주 조회")
    @GetMapping("/likeDrink/")
    public ResponseEntity<LikeDrinkDto> getLikeDrink() {

        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        LikeDrinkDto likeDrinkDto = likeDrinkService.getLikeDrink(kakaoId);

        return new ResponseEntity<>(likeDrinkDto, HttpStatus.OK);
    }

}
