package com.ssafy.sulnaeeum.exception;

import lombok.Getter;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@Getter
@ToString
public enum CustomExceptionList {

    RUNTIME_EXCEPTION(HttpStatus.BAD_REQUEST, "E001", "잘못된 요청입니다."),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "E002", "서버 오류 입니다."),
    CONTAIN_NULL(HttpStatus.NO_CONTENT, "E003", "NULL 값이 존재합니다."),
    TOKEN_VALID_FAILED(HttpStatus.UNAUTHORIZED, "E004", "유효하지 않은 토큰입니다."),
    MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND, "E005", "존재하지 않는 회원입니다."),
    ROW_NOT_FOUND(HttpStatus.NOT_FOUND, "E006", "테이블에 해당하는 행이 존재하지 않습니다.");

    private final HttpStatus status;
    private final String code;
    private String message;

    CustomExceptionList(HttpStatus status, String code) {
        this.status = status;
        this.code = code;
    }

    CustomExceptionList(HttpStatus status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
