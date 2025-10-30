package com.telegrambot.telegram_bot.presentation.dto;

import java.time.LocalDate;
import java.util.ArrayList;

public record ResultDTO(
    String teamA,
    String teamB,
    String winner,
    String location,
    String time,
    LocalDate date,
    ArrayList<SetDTO> results
) {
}
