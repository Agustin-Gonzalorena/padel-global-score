package com.padel.padel_global_score.service;

import com.padel.padel_global_score.exception.ResourceNotFoundException;
import com.padel.padel_global_score.persistence.entity.Location;
import com.padel.padel_global_score.persistence.repository.LocationRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {
    private final LocationRepo repo;

    public LocationService(LocationRepo repo) {
        this.repo = repo;
    }

    public Location getById(Long id) {
        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Location not found"));
    }

    public List<Location> getAllLocations() {
        return repo.findAll();
    }
}
