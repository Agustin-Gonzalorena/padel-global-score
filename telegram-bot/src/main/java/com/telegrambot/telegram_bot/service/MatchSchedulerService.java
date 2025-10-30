package com.telegrambot.telegram_bot.service;

import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@Service
public class MatchSchedulerService {
    private final TaskScheduler scheduler;
    private final NotificationService notificationService;

    public MatchSchedulerService(NotificationService notificationService){
        ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
        taskScheduler.initialize();
        this.scheduler = taskScheduler;
        this.notificationService = notificationService;
    }

    public void scheduleMatchNotification(String message, LocalDate matchDate) {
        // Ejemplo: enviar 1 hora antes
       /* LocalDateTime notifyTime = matchDateTime.minusHours(1);*/
        LocalDateTime executionDateTime = matchDate.atTime(10,0);

        Date executionDate = Date.from(executionDateTime.atZone(ZoneId.systemDefault()).toInstant());

        scheduler.schedule(() -> {
            System.out.println("Enviando notificación automática del partido...");
            notificationService.sendNotification(message);
        }, executionDate);

        System.out.println("Notificación programada para: " + executionDate);
    }

}
