package com.ssafy.sulnaeeum.controller.jubti;

import com.ssafy.sulnaeeum.model.jubti.JubtiResultDto;
import com.ssafy.sulnaeeum.model.jubti.JubtiService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "JubtiController", description = "주비티아이 API")
@RestController
@RequestMapping("/api/jubti")
@Slf4j
public class JubtiController {

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    JubtiService jubtiService;

    @Operation(summary = "응답 저장", description = "한 사용자의 jubti 응답 결과를 DB에 저장 (데이터 수집)")
    @PostMapping("/save")
    public ResponseEntity<String> saveResult(@RequestBody JubtiResultDto jubtiResultDto) {
        try {
            System.out.println("호출됨 !!!!!!!");
            jubtiService.saveResult(jubtiResultDto);
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(FAIL, HttpStatus.OK);
        }
    }
}
