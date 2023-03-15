package com.ssafy.sulnaeeum.exception;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {

    private final CustomExceptionList exception;

    public CustomException(CustomExceptionList e) {
        super(e.getMessage());
        this.exception = e;
    }
}
