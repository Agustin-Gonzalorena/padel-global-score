package com.padel.padel_global_score.presentation.dto;

import jakarta.validation.constraints.NotBlank;

public record LoginDTO(@NotBlank(message = "username required.") String username,
                       @NotBlank(message = "password required.") String password) {
}
