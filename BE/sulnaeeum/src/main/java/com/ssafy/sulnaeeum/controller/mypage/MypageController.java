package com.ssafy.sulnaeeum.controller.mypage;

import com.ssafy.sulnaeeum.model.mypage.dto.LikeDrinkListDto;
import com.ssafy.sulnaeeum.model.mypage.service.LikeDrinkService;
import com.ssafy.sulnaeeum.model.mypage.service.MypageService;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
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
    private final MypageService mypageService;

    /***
     * [프로필 조회]
     ***/
    @Operation(summary = "프로필 조회", description = "프로필 조회")
    @GetMapping("/info")
    public ResponseEntity<UserDto> getInfo() {

        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        UserDto userDto = mypageService.getInfo(kakaoId);

        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    /***
     * [찜한 전통주 조회]
     ***/
    @Operation(summary = "찜한 전통주 조회", description = "찜한 전통주 조회")
    @GetMapping("/like/drink")
    public ResponseEntity<LikeDrinkListDto> getLikeDrink() {

        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        LikeDrinkListDto likeDrinkListDto = likeDrinkService.getLikeDrink(kakaoId);

        return new ResponseEntity<>(likeDrinkListDto, HttpStatus.OK);
    }

    /***
     * [택스트 마이닝]
     * - 내가 클리어한 & 찜한 전통주의 맛, 재료, 안주, 주종 총 4가지의 정보를 카운트하여 오름 차순 정렬
     ***/
    @Operation(summary = "택스트 마이닝", description = "택스트 마이닝")
    @GetMapping("/textmining")
    public ResponseEntity<String> textmMining() {

        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        String tmp = mypageService.textmMining(kakaoId);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
