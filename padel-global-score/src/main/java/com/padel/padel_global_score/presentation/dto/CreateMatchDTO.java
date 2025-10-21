package com.padel.padel_global_score.presentation.dto;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.time.LocalTime;

public record CreateMatchDTO(
        @NotNull(message = "La fecha no puede ser nula")
        @FutureOrPresent(message = "La fecha debe ser hoy o en el futuro")
        LocalDate date,
        @NotNull(message = "La ubicación no puede ser nula")
        Long locationId,
        @NotNull(message = "La hora no puede ser nula")
        LocalTime time,
        @NotNull(message = "El equipo A no puede ser nulo")
        @Min(message = "El ID del equipo A debe ser mayor que 0", value = 1)
        Long teamAId,
        @NotNull(message = "El equipo B no puede ser nulo")
        @Min(message = "El ID del equipo B debe ser mayor que 0", value = 1)
        Long teamBId) {

}