package com.padel.padel_global_score.presentation.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record SetResultsDTO(
        @NotNull(message = "El número de set no puede ser nulo")
        @Min(value = 1, message = "El número de set debe ser mayor que 0")
        @Max(value = 3, message = "El número de set debe ser menor o igual a 3")
        Integer numberSet,
        @NotNull(message = "Los juegos del equipo A no pueden ser nulos")
        @Min(value = 0, message = "Los juegos del equipo A deben ser mayores o iguales a 0")
        @Max(value = 7, message = "Los juegos del equipo A deben ser menores o iguales a 7")
        Integer gamesTeamA,
        @NotNull(message = "Los juegos del equipo B no pueden ser nulos")
        @Min(value = 0, message = "Los juegos del equipo B deben ser mayores o iguales a 0")
        @Max(value = 7, message = "Los juegos del equipo B deben ser menores o iguales a 7")
        Integer gamesTeamB) {
}
