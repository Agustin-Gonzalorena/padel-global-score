package com.telegrambot.telegram_bot.presentation.controller;

import com.telegrambot.telegram_bot.presentation.dto.MatchDTO;
import com.telegrambot.telegram_bot.presentation.dto.ResultDTO;
import com.telegrambot.telegram_bot.service.MatchSchedulerService;
import com.telegrambot.telegram_bot.service.NotificationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notifications")
public class NotificationController {
    private final NotificationService service;
    private final MatchSchedulerService matchSchedulerService;
    public NotificationController(NotificationService service, MatchSchedulerService matchSchedulerService) {
        this.matchSchedulerService = matchSchedulerService;
        this.service = service;
    }

    @PostMapping("/create")
    public void create(@RequestBody MatchDTO dto) {
        String msg = "Hoy se juega\uD83D\uDCAA, exitos chicos!!!";
        matchSchedulerService.scheduleMatchNotification(msg,dto.date());
        service.nextMatch(dto);
    }
    @PostMapping("/finish")
    public void finish(@RequestBody ResultDTO dto) {
        service.matchResult(dto);
    }
    @GetMapping("/test")
    public void send(){
        service.sendNotification("Padel Global Score Notificaciones.");
    }
}
