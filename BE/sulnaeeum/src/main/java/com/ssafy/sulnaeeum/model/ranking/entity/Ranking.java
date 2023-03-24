package com.ssafy.sulnaeeum.model.ranking.entity;

import com.ssafy.sulnaeeum.model.drink.entity.Drink;
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
@Table(name="ranking")
public class Ranking {

    @Id
    @Column(name="ranking_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rankingId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "twenties")
    private Drink twenties;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "thirties")
    private Drink thirties;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "forties")
    private Drink forties;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fifties")
    private Drink fifties;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sixties")
    private Drink sixties;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "female")
    private Drink female;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "male")
    private Drink male;
}
