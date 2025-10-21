package com.padel.padel_global_score.presentation.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public record MatchResultsDTO(
        @NotNull(message = "La lista de resultas no puede ser null")
        @Valid
        @Size(min = 3, max = 3, message = "Deben ser 3 sets")
        List<SetResultsDTO> results
) {
}
