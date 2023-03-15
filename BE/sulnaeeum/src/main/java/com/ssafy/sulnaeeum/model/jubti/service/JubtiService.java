package com.ssafy.sulnaeeum.model.jubti.service;

import com.ssafy.sulnaeeum.model.jubti.dto.JubtiResultDto;
import com.ssafy.sulnaeeum.model.jubti.repo.JubtiRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JubtiService {

    @Autowired
    JubtiRepo jubtiRepo;

    public void saveResult(JubtiResultDto jubtiResultDto) {
        jubtiRepo.save(jubtiResultDto.toEntity());
    }
}
