package com.padel.padel_global_score.presentation.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record CreateTeamDTO(
        @NotNull(message = "leftSideId no puede ser nulo")
        @Min(value = 1, message = "leftSideId debe ser mayor que 0")
        Long leftSideId,

        @NotNull(message = "rightSideId no puede ser nulo")
        @Min(value = 1, message = "rightSideId debe ser mayor que 0")
        Long rightSideId,

        String urlPhoto
) {
}
