package com.telegrambot.telegram_bot.presentation.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record MatchDTO(
        LocalDate date,
        String location,
        String time,
        String teamA,
        String teamB
) {
}
