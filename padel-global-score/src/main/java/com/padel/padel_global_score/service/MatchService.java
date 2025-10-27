package com.padel.padel_global_score.service;

import com.padel.padel_global_score.exception.BadRequestException;
import com.padel.padel_global_score.exception.ResourceNotFoundException;
import com.padel.padel_global_score.persistence.StateMatch;
import com.padel.padel_global_score.persistence.entity.Location;
import com.padel.padel_global_score.persistence.entity.Match;
import com.padel.padel_global_score.persistence.entity.Set;
import com.padel.padel_global_score.persistence.entity.Team;
import com.padel.padel_global_score.persistence.repository.MatchRepo;
import com.padel.padel_global_score.presentation.dto.CreateMatchDTO;
import com.padel.padel_global_score.presentation.dto.MatchResultsDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MatchService {
    private final MatchRepo repo;
    private final TeamService teamService;
    private final LocationService locationService;

    public MatchService(MatchRepo repo, TeamService teamService, LocationService locationService) {
        this.repo = repo;
        this.teamService = teamService;
        this.locationService = locationService;
    }

    public Match createMatch(CreateMatchDTO dto) {
        if (dto.teamAId().equals(dto.teamBId())) {
            throw new BadRequestException("The two teams must be different");
        }
        Team teamA = teamService.getTeamById(dto.teamAId());
        Team teamB = teamService.getTeamById(dto.teamBId());
        Location location = locationService.getById(dto.locationId());

        Match match = new Match();
        match.setTeamA(teamA);
        match.setTeamB(teamB);
        match.setDate(dto.date());
        match.setTime(dto.time());
        match.setLocation(location);
        match.setState(StateMatch.PENDING);
        return repo.save(match);
    }

    @Transactional
    public Match finishMatch(Long id, MatchResultsDTO dto) {
        Match match = getMatchById(id);
        match.setState(StateMatch.COMPLETED);

        addSet(dto, match);

        Team winner = determineWinner(dto, match.getTeamA(), match.getTeamB());
        match.setWinner(winner);
        return repo.save(match);
    }

    @Transactional
    public Match suspendMatch(Long id, MatchResultsDTO dto) {
        Match match = getMatchById(id);
        match.setState(StateMatch.SUSPENDED);
        match.setWinner(null);
        addSet(dto, match);
        return repo.save(match);
    }

    public Match getMatchById(Long id) {
        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Match not found"));
    }

    public List<Match> getAllMatchesByTeams(Long teamAId, Long teamBId) {
        return repo.findByTeams(teamAId, teamBId);
    }

    public Page<Match> search(Long teamAId, Long teamBId, Long winner, Long location, Pageable pageable) {
        return repo.search(teamAId, teamBId, winner, location, pageable);
    }

    public Match deleteMatch(Long id) {
        Match match = getMatchById(id);
        repo.delete(match);
        return match;
    }


    /*----------*/

    private void addSet(MatchResultsDTO dto, Match match) {
        match.getSets().clear(); // borrar sets anteriores si existen
        dto.results().forEach(res -> {
            Set set = new Set();
            set.setNumberSet(res.numberSet());
            set.setGamesTeamA(res.gamesTeamA());
            set.setGamesTeamB(res.gamesTeamB());
            set.setMatch(match);
            match.getSets().add(set);
        });
    }

    private Team determineWinner(MatchResultsDTO dto, Team teamA, Team teamB) {
        int TeamASetsWon = 0;
        int TeamBSetsWon = 0;
        for (var res : dto.results()) {
            if (res.gamesTeamA() > res.gamesTeamB()) {
                TeamASetsWon++;
            } else {
                TeamBSetsWon++;
            }
        }
        return TeamASetsWon > TeamBSetsWon ? teamA : teamB;
    }
}