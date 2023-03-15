package com.ssafy.sulnaeeum.model.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepo userRepo;

    // userId를 통해 유저 정보와 권한 정보를 함께 가져오는 메서드
    @Override
    @Transactional
    public UserDetails loadUserByUsername(final String kakaoId) {

        return userRepo.findOneWithAuthoritiesByKakaoId(kakaoId)
                .map(user -> createUser(kakaoId, user))
                .orElseThrow(() -> new UsernameNotFoundException(kakaoId + " -> 데이터베이스에서 찾을 수 없습니다."));
    }

    // user가 활성화 상태라면, 권한 정보와
    private org.springframework.security.core.userdetails.User createUser(String kakaoId, User user) {

        if (!user.isActivated()) {
            throw new RuntimeException(kakaoId + " -> 활성화되어 있지 않습니다.");
        }

        List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
                .collect(Collectors.toList());

        return new org.springframework.security.core.userdetails.User(user.getKakaoId(),
                user.getPassword(),
                grantedAuthorities);
    }
}