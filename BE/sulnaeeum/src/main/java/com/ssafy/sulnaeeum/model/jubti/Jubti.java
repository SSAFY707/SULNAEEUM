package com.ssafy.sulnaeeum.model.jubti;

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
@Table(name="jubti")
public class Jubti {

    @Id
    @GeneratedValue
    @Column(name = "jubti_id")
    private int jubtiId; // auto_increment PK

    @Column(name = "question_id")
    private int questionId; // 질문 번호

    @Column(length = 30)
    private String question; // 질문
}
