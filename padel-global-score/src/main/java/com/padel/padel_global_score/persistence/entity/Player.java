package com.padel.padel_global_score.persistence.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    private String name;
    @Column(name = "url_photo")
    private String urlPhoto;
    @Column(name = "strength")
    private String strength;
    @Column(name = "weakness")
    private String weakness;
}
