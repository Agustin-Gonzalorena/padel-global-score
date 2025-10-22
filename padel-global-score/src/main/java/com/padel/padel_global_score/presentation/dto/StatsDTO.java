package com.padel.padel_global_score.presentation.dto;

public record StatsDTO(
        Long winGamesTeamA,
        Long winGamesTeamB,
        Long totalGames,

        Long winSetsTeamA,
        Long winSetsTeamB,
        Long totalSets,

        Long winMatchesTeamA,
        Long winMatchesTeamB,
        Long totalMatches,

        Long winTiebreaksTeamA,
        Long winTiebreaksTeamB,
        Long totalTiebreaks,

        Long maxStreakTeamA,
        Long maxStreakTeamB,

        Long currentStreakTeamA,
        Long currentStreakTeamB
) {
}
