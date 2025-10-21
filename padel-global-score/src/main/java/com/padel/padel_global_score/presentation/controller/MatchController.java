package com.padel.padel_global_score.presentation.controller;

import com.padel.padel_global_score.presentation.dto.CreateMatchDTO;
import com.padel.padel_global_score.presentation.dto.MatchResultsDTO;
import com.padel.padel_global_score.presentation.dto.response.SuccessResponse;
import com.padel.padel_global_score.service.MatchService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/matches")
public class MatchController {
    private final MatchService service;

    public MatchController(MatchService service) {
        this.service = service;
    }

    @PostMapping("")
    public ResponseEntity<SuccessResponse> createMatch(@Valid @RequestBody CreateMatchDTO dto) {
        return ResponseEntity.status(201)
                .body(new SuccessResponse(201, service.createMatch(dto)));
    }

    @PutMapping("/finish/{id}")
    public ResponseEntity<SuccessResponse> finishMatch(@PathVariable Long id, @Valid @RequestBody MatchResultsDTO dto) {
        return ResponseEntity.status(201)
                .body(new SuccessResponse(201, service.finishMatch(id, dto)));
    }

    @PutMapping("/suspend/{id}")
    public ResponseEntity<SuccessResponse> suspendMatch(@PathVariable Long id, @Valid @RequestBody MatchResultsDTO dto) {
        return ResponseEntity.status(201)
                .body(new SuccessResponse(201, service.suspendMatch(id, dto)));
    }

    @GetMapping("")
    public ResponseEntity<SuccessResponse> search(
            @RequestParam Long teamA,
            @RequestParam Long teamB,
            @RequestParam(required = false) Long winner,
            @RequestParam(required = false) Long location,
            Pageable pageable) {
        return ResponseEntity.status(200)
                .body(new SuccessResponse(200, service.search(teamA, teamB, winner, location, pageable)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<SuccessResponse> deleteMatch(@PathVariable Long id) {
        return ResponseEntity.status(200)
                .body(new SuccessResponse(200, service.deleteMatch(id)));
    }
}
