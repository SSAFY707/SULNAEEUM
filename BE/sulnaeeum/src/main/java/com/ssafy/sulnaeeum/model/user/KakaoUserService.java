package com.ssafy.sulnaeeum.model.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

@RequiredArgsConstructor
@Service
@Slf4j
public class KakaoUserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepo userRepository;

    @Value("${kakao.client.id}")
    private String clientId;

    @Transactional
    public KakaoSocialDto kakaoLogin(String code) throws JsonProcessingException {
        // 1. "인가 코드"로 "액세스 토큰" 요청
        String accessToken = getAccessToken(code, "http://localhost:3000/user/kakao/callback");

        // 2. 필요시에 회원가입
        User kakaoUser = registerKakaoUserIfNeeded(accessToken);


//        // 3. 로그인 JWT 토큰 발행
//        String token = jwtTokenCreate(kakaoUser);
//
//        return SignupSocialDto.builder()
//                .token(token)
//                .userId(kakaoUser.getId())
//                .build();
        return null;
    }

    private String getAccessToken(String code, String redirect_uri) throws JsonProcessingException {
        // HTTP Header 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HTTP Body 생성
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("client_id", clientId);
        body.add("redirect_uri", redirect_uri);
        body.add("code", code);

        // HTTP 요청 보내기
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(body, headers);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        // HTTP 응답 (JSON) -> 액세스 토큰 파싱
        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);
        return jsonNode.get("access_token").asText();
    }

    // 처음 로그인 시, 회원 가입 진행
    private User registerKakaoUserIfNeeded(String accessToken) throws JsonProcessingException {
        JsonNode jsonNode = getKakaoUserInfo(accessToken);

        log.info(jsonNode.toString());

        // DB 에 중복된 Kakao Id 가 있는지 확인
        String kakaoId = String.valueOf(jsonNode.get("id").asLong());
        User kakaoUser = userRepository.findOneWithAuthoritiesByKakaoId(kakaoId).orElse(null);

        // 회원가입
//        if (kakaoUser == null) {
//            String nickname = jsonNode.get("properties").get("nickname").asText();
//            String picture = jsonNode.get("properties").get("profile_image_url").asText();
//            String nickname = jsonNode.get("properties").get("nickname").asText();
//            String nickname = jsonNode.get("properties").get("nickname").asText();
//
//            // password: random UUID
//            String password = UUID.randomUUID().toString();
//            String encodedPassword = passwordEncoder.encode(password);
//
//            kakaoUser = new User(kakaoId, nickname, encodedPassword);
//            userRepository.save(kakaoUser);
//        }

        return kakaoUser;
    }

    // 카카오 동의 항목 가져오기
    private JsonNode getKakaoUserInfo(String accessToken) throws JsonProcessingException {

        // HTTP Header 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기
        HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoUserInfoRequest,
                String.class
        );

        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readTree(responseBody);
    }

//    // JWT 토큰 생성
//    private String jwtTokenCreate(User kakaoUser) {
//        String TOKEN_TYPE = "BEARER";
//
//        UserDetails userDetails = new UserDetailsImpl(kakaoUser);
//        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        UserDetailsImpl userDetails1 = ((UserDetailsImpl) authentication.getPrincipal());
//        final String token = JwtTokenUtils.generateJwtToken(userDetails1);
//        return TOKEN_TYPE + " " + token;
//    }

}
