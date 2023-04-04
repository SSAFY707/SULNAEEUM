package com.ssafy.sulnaeeum.controller.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.sulnaeeum.jwt.JwtFilter;
import com.ssafy.sulnaeeum.model.drink.dto.SimilarDrinkDto;
import com.ssafy.sulnaeeum.model.ranking.dto.RecommendRankingDto;
import com.ssafy.sulnaeeum.model.user.dto.*;
import com.ssafy.sulnaeeum.model.user.service.KakaoLoginService;
import com.ssafy.sulnaeeum.model.user.service.PresentService;
import com.ssafy.sulnaeeum.model.user.service.UserPreferenceService;
import com.ssafy.sulnaeeum.model.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "UserController", description = "유저 API")
public class UserController {

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";
    private final UserService userService;
    private final KakaoLoginService kakaoUserService;
    private final UserPreferenceService userPreferenceService;

    private final PresentService presentService;

    /***
     * [KAKAO 회원가입 및 로그인]
     ***/
    @GetMapping("/kakao/login")
    @Operation(summary = "KAKAO 회원가입 및 로그인", description = "KAKAO에서 받아온 code값 넣어주기")
    public ResponseEntity<KakaoLoginDto> kakaoLogin(@Parameter(name = "code", description = "카카오 서버로부터 받은 인가 코드") @RequestParam String code, HttpServletResponse response) throws JsonProcessingException {

        KakaoLoginDto kakaoSocialDto = kakaoUserService.kakaoLogin(code);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + kakaoSocialDto.getTokenDto().getAccessToken());

        return new ResponseEntity<>(kakaoSocialDto, httpHeaders, HttpStatus.OK);
    }

    /***
     * [토큰 재발급]
     ***/
    @PostMapping("/refresh")
    @Operation(summary = "토큰 재발급", description = "Refresh & Access Token 보내주기")
    public ResponseEntity<TokenDto> refreshToken(@RequestBody TokenDto tokenRequestDto){

        TokenDto tokenDto = userService.refreshToken(tokenRequestDto);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + tokenDto.getAccessToken());

        return new ResponseEntity<>(tokenDto, httpHeaders, HttpStatus.OK);
    }

    /***
     * [로그아웃]
     ***/
    @GetMapping("/kakao/logout")
    @Operation(summary = "로그아웃", description = "로그아웃")
    public ResponseEntity<String> logout(){

        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        userService.logout(kakaoId);
        return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
    }

    /***
     * [회원 취향조사]
     ***/
    @PostMapping("/preference")
    @Operation(summary = "유저 취향 조사", description = "유저 취향 조사")
    public ResponseEntity<List<RecommendRankingDto>> preference(@RequestBody UserPreferenceDto userPreferenceDto){

        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        userPreferenceService.preference(kakaoId, userPreferenceDto);

        List<RecommendRankingDto> recommend = userPreferenceService.recommendUserDrink(userPreferenceDto);

        return new ResponseEntity<>(recommend, HttpStatus.OK);
    }

    /***
     * [ 회원이 찜 및 클리어한 전통주 조회 ]
     ***/
    @Operation(summary = "", description = "")
    @GetMapping("/mine")
    public ResponseEntity<MineDto> getMine() {
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();
        return new ResponseEntity<>(userService.getMine(kakaoId), HttpStatus.OK);
    }

    /***
     * [ 회원 취향의 전통주 추천]
     ***/
    @GetMapping("/recommend")
    @Operation(summary = "유저 취향 전통주 추천", description = "유저 취향을 가져와 전통주를 추천한다")
    public ResponseEntity<List<RecommendRankingDto>> getRecommendDrink(){
        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        UserPreferenceDto userPreferenceDto = userPreferenceService.getUserPreferenceDto(kakaoId);
        List<RecommendRankingDto> recommend = new ArrayList<>();;

        if(userPreferenceDto != null){
            recommend = userPreferenceService.recommendUserDrink(userPreferenceDto);
        }

        return new ResponseEntity<>(recommend, HttpStatus.OK);
    }

    /***
     * [ 선물 추천 ]
     ***/
    @Operation(summary = "전통주 상세 페이지", description = "전통주 상세 페이지 정보 모두 조회")
    @PostMapping("/recommend/present")
    public ResponseEntity<List<RecommendRankingDto>> getDrink(@RequestBody PresentDto presentDto) {
        return new ResponseEntity<>(presentService.getPresentDrink(presentDto), HttpStatus.OK);
    }

}
