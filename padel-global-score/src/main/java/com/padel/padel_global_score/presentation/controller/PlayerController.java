package com.padel.padel_global_score.presentation.controller;

import com.padel.padel_global_score.presentation.dto.CreatePlayerDTO;
import com.padel.padel_global_score.presentation.dto.response.SuccessResponse;
import com.padel.padel_global_score.service.PlayerService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/players")
public class PlayerController {
    private final PlayerService service;

    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @PostMapping("")
    ResponseEntity<SuccessResponse> createPlayer(@Valid @RequestBody CreatePlayerDTO dto) {
        return ResponseEntity.status(201).body(new SuccessResponse(201, service.createPlayer(dto)));
    }

    @GetMapping("")
    ResponseEntity<SuccessResponse> getAllPlayers() {
        return ResponseEntity.status(200).body(new SuccessResponse(200, service.getAllPlayers()));
    }

    @GetMapping("/{id}")
    ResponseEntity<SuccessResponse> getPlayerById(@PathVariable Long id) {
        return ResponseEntity.status(200).body(new SuccessResponse(200, service.getPlayerById(id)));
    }
}
