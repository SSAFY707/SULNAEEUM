package com.ssafy.sulnaeeum.model.jubti;

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
