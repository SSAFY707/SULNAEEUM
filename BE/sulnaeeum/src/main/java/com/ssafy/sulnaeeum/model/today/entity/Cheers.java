package com.ssafy.sulnaeeum.model.today.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="cheers")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Cheers {
    @Id
    @Column(name="cheers_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cheers_id;
    @Column(name="cheers_name",nullable = false)
    private String cheersName;
    @Column(name="cheers_content",nullable = false)
    private String cheersContent;
}
