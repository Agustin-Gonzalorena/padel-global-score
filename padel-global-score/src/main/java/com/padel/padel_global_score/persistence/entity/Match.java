package com.padel.padel_global_score.persistence.entity;

import com.padel.padel_global_score.persistence.StateMatch;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@Data
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private StateMatch state;
    private LocalDate date;
    private LocalTime time;
    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @ManyToOne
    @JoinColumn(name = "team_a_id")
    private Team teamA;
    @ManyToOne
    @JoinColumn(name = "team_b_id")
    private Team teamB;

    @ManyToOne
    @JoinColumn(name = "winner_id")
    private Team winner;

    //ophanRemoval true para que si se borra un match se borren sus sets asociados
    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Set> sets;

}
