package com.ssafy.sulnaeeum.model.jumak.entity;

import com.ssafy.sulnaeeum.model.jumak.dto.LikeJumakDto;
import com.ssafy.sulnaeeum.model.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="my_jumak")
public class MyJumak {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long myJumakId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 찜한 회원

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jumak_id")
    private Jumak jumak;

    public LikeJumakDto toLikeJumakDto(){
        return LikeJumakDto.builder()
                .storeId(jumak.getJumakId())
                .storeName(jumak.getJumakName())
                .storeLink(jumak.getJumakUrl())
                .storeAddress(jumak.getJumakLocation())
                .build();
    }
}
