package com.padel.padel_global_score.service;

import com.padel.padel_global_score.persistence.entity.AppUser;
import com.padel.padel_global_score.persistence.repository.AppUserRepo;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {
    private final AppUserRepo repo;

    public AppUserService(AppUserRepo repo) {
        this.repo = repo;
    }

    public AppUser getUserByUsername(String username) {
        return repo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
