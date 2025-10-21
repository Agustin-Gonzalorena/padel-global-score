package com.padel.padel_global_score.persistence.repository;

import com.padel.padel_global_score.persistence.entity.Match;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepo extends JpaRepository<Match, Long> {

    @Query("SELECT m " +
            "FROM Match m " +
            "WHERE (m.teamA.id = :teamAId " +
            "AND m.teamB.id = :teamBId) OR " +
            "(m.teamA.id = :teamBId " +
            "AND m.teamB.id = :teamAId)" +
            "ORDER BY m.id DESC")
    List<Match> findByTeams(Long teamAId, Long teamBId);


    @Query("SELECT m " +
            "FROM Match m " +
            "WHERE (:winner IS NULL OR m.winner.id = :winner) AND " +
            "(:teamAId IS NULL OR m.teamA.id = :teamAId OR m.teamB.id = :teamAId) AND " +
            "(:teamBId IS NULL OR m.teamA.id = :teamBId OR m.teamB.id = :teamBId) AND " +
            "(:locationId IS NULL OR m.location.id = :locationId)" +
            "ORDER BY m.id DESC")
    Page<Match> search(Long teamAId, Long teamBId, Long winner, Long locationId, Pageable pageable);
}
