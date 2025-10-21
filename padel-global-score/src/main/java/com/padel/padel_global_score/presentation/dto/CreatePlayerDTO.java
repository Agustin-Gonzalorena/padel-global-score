package com.padel.padel_global_score.presentation.dto;

import jakarta.validation.constraints.NotBlank;

public record CreatePlayerDTO(
        @NotBlank(message = "El nombre no puede estar vacío")
        String name,
        @NotBlank(message = "Fortaleza no puede estar vacía")
        String strength,
        @NotBlank(message = "Debilidad no puede estar vacía") //TODO cambiar mensajes a ingles
        String weakness,
        String urlPhoto
) {
    public String name() {
        return name != null ? name.toLowerCase().trim() : null;
    }

    public String strength() {
        return strength != null ? strength.toLowerCase() : null;
    }

    public String weakness() {
        return weakness != null ? weakness.toLowerCase() : null;
    }
}
