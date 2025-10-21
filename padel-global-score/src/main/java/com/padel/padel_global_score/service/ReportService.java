package com.padel.padel_global_score.service;

import com.padel.padel_global_score.persistence.StateMatch;
import com.padel.padel_global_score.persistence.entity.Match;
import com.padel.padel_global_score.presentation.dto.HeadToHeadDTO;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;

@Service
public class ReportService {
    private final MatchService matchService;

    public ReportService(MatchService matchService) {
        this.matchService = matchService;
    }

    public HeadToHeadDTO getHeadToHeadReport(Long teamAId, Long teamBId) {
        List<Match> matches = matchService.getAllMatchesByTeams(teamAId, teamBId)
                .stream()
                .sorted(Comparator.comparing(Match::getId)) // orden ascendente por id (ajustá si preferís fecha)
                .toList();

        int countTeamAWins = 0;
        int countTeamBWins = 0;
        int totalMatches = 0;

        for (Match match : matches) {
            if (match.getState() == StateMatch.SUSPENDED) {
                totalMatches++;
            }
            if (match.getWinner() == null) continue;
            totalMatches++;
            Long winnerId = match.getWinner().getId();
            if (Objects.equals(winnerId, teamAId)) countTeamAWins++;
            else if (Objects.equals(winnerId, teamBId)) countTeamBWins++;
        }

        // --- Calcular racha actual partiendo desde el partido más reciente ---
        int streakTeamA = 0;
        int streakTeamB = 0;

        // 1) encontrar el último partido (más reciente) que tenga ganador
        Long currentWinnerId = null;
        for (int i = matches.size() - 1; i >= 0; i--) {
            Match m = matches.get(i);
            if (m.getWinner() != null) {
                currentWinnerId = m.getWinner().getId();
                break;
            }
        }

        // 2) si existe, contar hacia atrás todas las victorias consecutivas del mismo winner
        if (currentWinnerId != null) {
            int streak = 0;
            for (int i = matches.size() - 1; i >= 0; i--) {
                Match m = matches.get(i);
                if (m.getWinner() == null) continue;
                Long wid = m.getWinner().getId();
                if (Objects.equals(wid, currentWinnerId)) {
                    streak++;
                } else {
                    break; // se cortó la racha
                }
            }
            if (Objects.equals(currentWinnerId, teamAId)) streakTeamA = streak;
            else if (Objects.equals(currentWinnerId, teamBId)) streakTeamB = streak;
        }

        return new HeadToHeadDTO(totalMatches, countTeamAWins, countTeamBWins, streakTeamA, streakTeamB);
    }


}
