package com.ssafy.sulnaeeum.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ExceptionResponse {

    private final String code;
    private final String message;

    @Builder
    public ExceptionResponse(String code, String message) {
        this.code = code;
        this.message = message;
    }
}
