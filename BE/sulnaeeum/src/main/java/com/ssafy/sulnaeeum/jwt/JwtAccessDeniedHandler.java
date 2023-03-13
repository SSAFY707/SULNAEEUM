package com.ssafy.sulnaeeum.jwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
    
    // 필요한 권한이 존재하지 않는 경우에 403 FORBIDDEN 에러를 리턴하는 메서드 
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        log.info("잘못된 권한 정보 jwt");
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }
}
