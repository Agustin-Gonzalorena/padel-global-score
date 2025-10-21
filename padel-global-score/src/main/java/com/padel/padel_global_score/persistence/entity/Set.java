package com.padel.padel_global_score.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Set {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int numberSet;
    private int gamesTeamA;
    private int gamesTeamB;

    @ManyToOne
    @JoinColumn(name = "match_id", nullable = false)
    @JsonIgnore
    private Match match;


}
