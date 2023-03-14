package com.ssafy.sulnaeeum.jwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
@Slf4j
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    // 유효한 자격증명을 제공하지 않고 접근하려 할때 401 Unauthorized 에러를 리턴할 메서드
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {

        log.info("유효하지 않은 자격증명입니다.");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }
}