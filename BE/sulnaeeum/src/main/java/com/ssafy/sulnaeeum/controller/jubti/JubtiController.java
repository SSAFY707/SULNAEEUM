package com.ssafy.sulnaeeum.controller.jubti;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jubti")
@Slf4j
@Tag(name = "JubtiController", description = "주비티아이 API")
public class JubtiController {

    @PutMapping()
    @Operation(summary = "테스트", description = "테스트용 메서드")
    public ResponseEntity<Integer> test() {
        return new ResponseEntity<>(1, HttpStatus.OK);
    }
}
