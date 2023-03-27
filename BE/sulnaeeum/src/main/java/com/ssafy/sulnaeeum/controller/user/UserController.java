package com.ssafy.sulnaeeum.controller.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.sulnaeeum.jwt.JwtFilter;
import com.ssafy.sulnaeeum.model.user.dto.KakaoLoginDto;
import com.ssafy.sulnaeeum.model.user.dto.TokenDto;
import com.ssafy.sulnaeeum.model.user.dto.UserPreferenceDto;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.service.KakaoLoginService;
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
import java.util.Map;

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
    public ResponseEntity<Map<String, Map<String, String>>> preference(@RequestBody UserPreferenceDto userPreferenceDto){

        String kakaoId = SecurityContextHolder.getContext().getAuthentication().getName();

        userPreferenceService.preference(kakaoId, userPreferenceDto);

        Map<String, Map<String, String>> recommend = userPreferenceService.recommendUserDrink(userPreferenceDto);

        return new ResponseEntity<>(recommend, HttpStatus.OK);
    }

}
