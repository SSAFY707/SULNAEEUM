package com.ssafy.sulnaeeum.model.jubti.service;

import com.ssafy.sulnaeeum.model.jubti.dto.JubtiResultDto;
import com.ssafy.sulnaeeum.model.jubti.repo.JubtiRepo;
import org.springframework.stereotype.Service;

@Service
public class JubtiService {

    JubtiRepo jubtiRepo;

    // 주비티아이 검사 결과를 DB에 저장 (데이터 수집)
    public void saveResult(JubtiResultDto jubtiResultDto) {
        jubtiRepo.save(jubtiResultDto.toEntity());
    }
}
