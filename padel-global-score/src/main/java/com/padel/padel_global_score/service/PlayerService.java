package com.padel.padel_global_score.service;

import com.padel.padel_global_score.exception.ResourceNotFoundException;
import com.padel.padel_global_score.persistence.entity.Player;
import com.padel.padel_global_score.persistence.repository.PlayerRepo;
import com.padel.padel_global_score.presentation.dto.CreatePlayerDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {
    private final PlayerRepo repo;

    public PlayerService(PlayerRepo repo) {
        this.repo = repo;
    }

    public Player createPlayer(CreatePlayerDTO dto) {
        if (repo.findByName(dto.name()).isPresent()) {
            throw new ResourceNotFoundException("Player already exists");
        }
        Player player = new Player();
        if (dto.urlPhoto() != null) player.setUrlPhoto(dto.urlPhoto());
        player.setName(dto.name());
        player.setStrength(dto.strength());
        player.setWeakness(dto.weakness());
        return repo.save(player);
    }

    public List<Player> getAllPlayers() {
        return repo.findAll();
    }

    public Player getPlayerById(Long id) {
        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
    }

    public Player getPlayerByName(String name) {
        return repo.findByName(name.toLowerCase()).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
    }
}
