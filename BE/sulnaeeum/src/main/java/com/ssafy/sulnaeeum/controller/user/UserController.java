package com.ssafy.sulnaeeum.controller.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.sulnaeeum.exception.DuplicateMemberException;
import com.ssafy.sulnaeeum.jwt.JwtFilter;
import com.ssafy.sulnaeeum.jwt.TokenProvider;
import com.ssafy.sulnaeeum.model.user.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final UserService userService;
    private final KakaoUserService kakaoUserService;

    @PostMapping("/login")
    @Operation(summary = "로그인", description = "로그인")
    public ResponseEntity<TokenDto> login(@RequestBody LoginDto loginDto){

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getProvideId());

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
    }

    @PostMapping("/signup")
    @Operation(summary = "KAKAO 회원가입", description = "KAKAO 회원가입")
    public ResponseEntity<UserDto> signup(@RequestBody UserDto userDto) {

        return ResponseEntity.ok(userService.signup(userDto));
    }

    @GetMapping("/user/kakao/callback")
    @Operation(summary = "KAKAO 회원가입", description = "KAKAO 회원가입")
    public Long kakaoLogin(@Parameter(name = "code", description = "카카오 서버로부터 받은 인가 코드") @RequestParam String code, HttpServletResponse response) throws JsonProcessingException {

        log.info("카카오 회원가입");
        KakaoSocialDto kakaoSocialDto = kakaoUserService.kakaoLogin(code);
//        response.addHeader(AUTH_HEADER, signupKakaoDto.getToken());
//
//        return signupKakaoDto.getUserId();

        return Long.parseLong("1234");
    }
}
