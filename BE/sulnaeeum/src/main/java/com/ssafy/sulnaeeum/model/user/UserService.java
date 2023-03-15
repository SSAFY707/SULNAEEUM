package com.ssafy.sulnaeeum.model.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepo userRepository;

    @Transactional
    public TokenDto refreshToken(TokenDto tokenDto){
        return null;
    }

}
