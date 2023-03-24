package com.ssafy.sulnaeeum.model.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {

    @Id
    @Column(name="user_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "kakao_id", nullable = false, unique = true)
    private String kakaoId; // kakao

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name="nickname",nullable = false)
    private String nickname;

    @Column(name="age",nullable = true)
    private String age;

    @Column(name="sex",nullable = true)
    private String sex;

    @Column(name="img",nullable = false)
    private String img;

    @JsonIgnore
    @Column(name = "activated",columnDefinition = "TINYINT")
    private boolean activated;

    @Column(name="ranking",nullable = false)
    private int ranking;

    @Column(name="finish",nullable = false, columnDefinition = "TINYINT")
    private boolean finish;

    @Column(name="token",nullable = true)
    private String token;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;

    public void updateToken(String token){
        this.token = token;
    }

    public void updateFinish(boolean finish){
        this.finish = finish;
    }

    // Entity -> DTO 변환
    public UserDto toDto() {
        return UserDto.builder()
                .userId(this.userId)
                .kakaoId(this.kakaoId)
                .nickname(this.nickname)
                .age(this.age)
                .sex(this.sex)
                .img(this.img)
                .ranking(this.ranking)
                .finish(this.finish).build();
    }
}
