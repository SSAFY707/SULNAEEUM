package com.ssafy.sulnaeeum.model.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
@Table(name="user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(name="user_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name="age",nullable = false)
    private String age;

    @Column(name="sex",nullable = false)
    private boolean sex;

    @Column(name="nickname",nullable = false)
    private String nickname;

    @Column(name="img",nullable = false)
    private String img;

    @Column(name="ranking",nullable = true)
    @ColumnDefault("0")
    private int ranking;

    @Column(name="level",nullable = true)
    private int level;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;
}
