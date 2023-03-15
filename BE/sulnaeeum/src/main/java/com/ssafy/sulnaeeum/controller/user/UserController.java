package com.ssafy.sulnaeeum.controller.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.sulnaeeum.jwt.JwtFilter;
import com.ssafy.sulnaeeum.model.user.dto.KakaoLoginDto;
import com.ssafy.sulnaeeum.model.user.dto.TokenDto;
import com.ssafy.sulnaeeum.model.user.service.KakaoLoginService;
import com.ssafy.sulnaeeum.model.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    private final KakaoLoginService kakaoUserService;

    @GetMapping("/kakao/login")
    @Operation(summary = "KAKAO 회원가입", description = "KAKAO 회원가입")
    public ResponseEntity<KakaoLoginDto> kakaoLogin(@Parameter(name = "code", description = "카카오 서버로부터 받은 인가 코드") @RequestParam String code, HttpServletResponse response) throws JsonProcessingException {

        KakaoLoginDto kakaoSocialDto = kakaoUserService.kakaoLogin(code);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + kakaoSocialDto.getTokenDto().getAccessToken());

        return new ResponseEntity<>(kakaoSocialDto, httpHeaders, HttpStatus.OK);
    }

    @PostMapping("/refresh")
    @Operation(summary = "토큰 재발급", description = "토큰 재발급")
    public ResponseEntity<TokenDto> refreshToken(@RequestBody TokenDto tokenRequestDto){

        TokenDto tokenDto = userService.refreshToken(tokenRequestDto);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + tokenDto.getAccessToken());

        return new ResponseEntity<>(tokenDto, httpHeaders, HttpStatus.OK);
    }

    @GetMapping("/logout")
    @Operation(summary = "로그아웃", description = "로그아웃")
    public ResponseEntity<String> logout(@Parameter String kakaoId){

        userService.logout(kakaoId);

        return new ResponseEntity<>("Logout", HttpStatus.OK);
    }


}
