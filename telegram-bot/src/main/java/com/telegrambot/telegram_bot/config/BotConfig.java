package com.telegrambot.telegram_bot.config;

import com.telegrambot.telegram_bot.bot.NotificationTelegramBot;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

@Configuration
public class BotConfig {
    @Bean
    public TelegramBotsApi telegramBotsApi(NotificationTelegramBot bot) {
        try {
            // Forzamos el registro en long polling sin eliminar webhook
            TelegramBotsApi botsApi = new TelegramBotsApi(DefaultBotSession.class);
            botsApi.registerBot(bot);
            System.out.println("Bot registrado correctamente!");
            return botsApi;
        } catch (Exception e) {
            // Solo logueamos el error, no hacemos que Spring falle
            System.err.println("No se pudo registrar el bot: " + e.getMessage());
            return null;
        }
    }

}