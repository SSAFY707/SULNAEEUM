package com.ssafy.sulnaeeum.model.map.entity;

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
@Table(name="brewery")
public class Brewery {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long breweryId; // auto_increment PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "map_id")
    private Map map; // 지역

    @Column(length = 10, nullable = false)
    private String breweryName; // 양조장 이름

    @Column(length = 30, nullable = false)
    private String breweryLocation; // 주소

    @Column(length = 50, nullable = false)
    private String breweryUrl; // 양조장 사이트 주소

    @Column(length = 12, nullable = false)
    private String contact; // 연락처
}
