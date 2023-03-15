package com.ssafy.sulnaeeum.model.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(name = "kakaoId", nullable = false, unique = true)
    private String kakaoId; // kakao

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name="nickname",nullable = false)
    private String nickname;

    @Column(name="age",nullable = false)
    private String age;

    @Column(name="sex",nullable = false,columnDefinition = "TINYINT")
    private boolean sex;

    @Column(name="img",nullable = false)
    private String img;


    @JsonIgnore
    @Column(name = "activated",columnDefinition = "TINYINT")
    private boolean activated;

    @Column(name="ranking",nullable = false)
    private int ranking;

    @Column(name="level",nullable = false)
    private int level;

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

}
