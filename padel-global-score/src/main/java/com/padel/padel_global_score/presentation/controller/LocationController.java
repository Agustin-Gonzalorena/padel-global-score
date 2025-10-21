package com.padel.padel_global_score.presentation.controller;

import com.padel.padel_global_score.presentation.dto.response.SuccessResponse;
import com.padel.padel_global_score.service.LocationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locations")
public class LocationController {
    private final LocationService service;

    public LocationController(LocationService service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<SuccessResponse> get() {
        return ResponseEntity.status(200)
                .body(new SuccessResponse(200, service.getAllLocations()));
    }


}
