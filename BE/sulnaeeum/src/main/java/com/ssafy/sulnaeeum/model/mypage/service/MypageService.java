package com.ssafy.sulnaeeum.model.mypage.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class MypageService {
    private final UserRepo userRepository;
    public UserDto getInfo(String kakaoId) {

        User user = userRepository.findByKakaoId(kakaoId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));

        return user.toDto();
    }

    public String textmMining(String kakaoId) {


        User user = userRepository.findByKakaoId(kakaoId).orElseThrow(() -> new CustomException(CustomExceptionList.MEMBER_NOT_FOUND));

        // 마신 술 조회 - 주종 정보 + 술의 번호

        // 찜한 술 조회 - 주종 정보 + 술의 번호

        // 마신 & 찜한 술의 번호들로 맛, 재료, 안주 조회

        return null;
    }
}
