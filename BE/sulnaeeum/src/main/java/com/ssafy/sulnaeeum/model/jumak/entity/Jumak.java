package com.ssafy.sulnaeeum.model.jumak.entity;

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
@Table(name="jumak")
public class Jumak {

    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long jumakId; // auto_increment PK

    @Column(length = 10)
    private String jumakName; // 이름

    private String jumakUrl; // 카카오맵 링크

    private String jumakLocation; // 주소


}
