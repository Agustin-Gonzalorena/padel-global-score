package com.telegrambot.telegram_bot.bot;

import org.telegram.telegrambots.meta.api.methods.send.SendMessage;

public interface Command {
    SendMessage handle(String chatId);
}
