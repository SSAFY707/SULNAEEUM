package com.ssafy.sulnaeeum.model.jubti.service;

import com.ssafy.sulnaeeum.model.jubti.dto.JubtiResultDto;
import com.ssafy.sulnaeeum.model.jubti.repo.JubtiRepo;
import com.ssafy.sulnaeeum.rabbitmq.Producer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JubtiService {

    @Autowired
    JubtiRepo jubtiRepo;

    @Autowired
    Producer producer;

    // 주비티아이 검사 결과를 DB에 저장 (데이터 수집)
    public void saveResult(JubtiResultDto jubtiResultDto) {

        // DB 저장
        jubtiRepo.save(jubtiResultDto.toEntity());

        // Flask로 보내서 데이터 보정
        producer.sendMessage(jubtiResultDto);
    }
}
