package com.ssafy.sulnaeeum.controller.jubti;

import com.ssafy.sulnaeeum.model.jubti.dto.JubtiResultDto;
import com.ssafy.sulnaeeum.model.jubti.service.JubtiService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jubti")
@Slf4j
@Tag(name = "JubtiController", description = "주비티아이 API")
public class JubtiController {

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    JubtiService jubtiService;

    /***
     * [ 응답 저장 ]
     * - 응답 결과를 db에 저장 (데이터 수집)
     */
    @Operation(summary = "응답 저장", description = "jubti 응답 결과를 DB에 저장")
    @PostMapping("/save")
    public ResponseEntity<String> saveResult(@RequestBody JubtiResultDto jubtiResultDto) {
        jubtiService.saveResult(jubtiResultDto);
        return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
    }
}
