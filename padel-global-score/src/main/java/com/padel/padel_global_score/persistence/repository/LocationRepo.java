package com.padel.padel_global_score.persistence.repository;

import com.padel.padel_global_score.persistence.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepo extends JpaRepository<Location, Long> {
}
