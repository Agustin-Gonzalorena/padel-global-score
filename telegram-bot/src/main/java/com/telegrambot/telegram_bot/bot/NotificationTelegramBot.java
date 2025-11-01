package com.telegrambot.telegram_bot.bot;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.objects.Update;

@Component
    public class NotificationTelegramBot extends TelegramLongPollingBot {
    private final String userBot;

    public NotificationTelegramBot(
            @Value("${USER_BOT}") String userBot,
            @Value("${TOKEN_BOT}") String tokenBot) {
        super(tokenBot);
        this.userBot = userBot;
    }

    @Override
    public void onUpdateReceived(Update update) {
        // Here you can handle incoming updates if needed
    }

    @Override
    public String getBotUsername() {
        return this.userBot;
    }



}
