package com.padel.padel_global_score.service.http;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "notificationClient", url = "${BOT_API_URL}/api/notifications")
public interface NotificationClient {

    @GetMapping("/test")
    void sendTestNotification();

    @PostMapping("/create")
    void createNotification(@RequestBody Object dto);

    @PostMapping("/finish")
    void finishNotification(@RequestBody Object dto);
}
