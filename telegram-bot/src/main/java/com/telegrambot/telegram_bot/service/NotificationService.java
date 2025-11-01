package com.telegrambot.telegram_bot.service;

import com.telegrambot.telegram_bot.bot.NotificationTelegramBot;
import com.telegrambot.telegram_bot.presentation.dto.MatchDTO;
import com.telegrambot.telegram_bot.presentation.dto.ResultDTO;
import com.telegrambot.telegram_bot.service.ai.GeminiWebClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
public class NotificationService {
    @Value("${CHAT_ID}")
    private String CHAT_ID;
    private final NotificationTelegramBot bot;
    private final GeminiWebClient gemini;
    public NotificationService(NotificationTelegramBot bot, GeminiWebClient gemini) {
        this.gemini = gemini;
        this.bot = bot;
    }

    public void sendNotification(String msg) {
        SendMessage message = new SendMessage();
        message.setChatId(CHAT_ID);
        message.setText(msg);
        message.setParseMode("HTML");
        try {
            bot.execute(message);
        }catch (Exception e){
            System.err.println("Error sending message: " + e.getMessage());
        }
    }


    public void nextMatch(MatchDTO dto) {
        String teamA = formatTeamName(dto.teamA());
        String teamB = formatTeamName(dto.teamB());
        String location = capitalizeFirst(dto.location());
        String time = dto.time().substring(0,5);
        String date = formatDate(dto.date());
        String response =
                "<b>✅ \uD835\uDE3E\uD835\uDE4A\uD835\uDE49\uD835\uDE41\uD835\uDE44\uD835\uDE4D\uD835\uDE48\uD835\uDE3C\uD835\uDE3F\uD835\uDE4A!!!</b>\n" +
                        "Se viene otro encuentro entre estos dos equipazos!\n\n" +
                        escapeHtml(teamA) + " \uD83C\uDD9A " + escapeHtml(teamB) + "\n\n" +
                        "\uD83D\uDCC5 Fecha: " + escapeHtml(date) + "\n" +
                        "\uD83D\uDD52 Hora: " + escapeHtml(time) + "hs\n" +
                        "\uD83D\uDCCD Lugar: " + escapeHtml(location)+"\n\n";

        this.sendNotification(response);
    }

    public void matchResult(ResultDTO dto){
        String winner = formatTeamName(dto.winner());
        String teamA = formatTeamName(dto.teamA());
        String teamB = formatTeamName(dto.teamB());
        String location = capitalizeFirst(dto.location());
        String time = dto.time().substring(0,5);
        String date = formatDate(dto.date());
        int set1TeamA = dto.results().get(0).gamesTeamA();
        int set1TeamB = dto.results().get(0).gamesTeamB();
        int set2TeamA = dto.results().get(1).gamesTeamA();
        int set2TeamB = dto.results().get(1).gamesTeamB();
        int set3TeamA = dto.results().get(2).gamesTeamA();
        int set3TeamB = dto.results().get(2).gamesTeamB();
        String header = gemini.getNews(dto);
        if(header == null || header.isBlank()){
            header =
                    "\uD83E\uDD73 <b>Felicitaciones</b>\n" +
                    "\uD83C\uDFC6 <b>" + escapeHtml(winner) + "</b>\n" +
                    "\uD83C\uDF89 <b>por su GRAN victoria!!</b>\n";
        }
        String response =
                        header+"\n\n" +
                        escapeHtml(date) + " - " + escapeHtml(location) + " - " + escapeHtml(time) + "hs\n\n" +

                        // Bloque de sets
                        "<pre>" +
                        escapeHtml(teamA) + "\n" +
                        String.format("| %s | %s | %s |\n", set1TeamA, set2TeamA, set3TeamA) +
                        String.format("| %s | %s | %s |\n", set1TeamB, set2TeamB, set3TeamB) +
                        escapeHtml(teamB) +
                        "</pre>\n\n" +

                        "<a href=\"https://padelgs.vercel.app\">Así quedaron las Stats\uD83D\uDC47\uD83D\uDC47\uD83D\uDC47</a>";
        this.sendNotification(response);
    }


    private String formatDate(LocalDate date){
        Locale locale = Locale.of("es", "ES");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEEE, d MMM", locale);
        String format = date.format(formatter);

        // Capitalizar primera letra
        return capitalizeFirst(format);
    }
    private String escapeHtml(String s) {
        if (s == null) return "";
        return s.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;");
    }
    private String capitalizeFirst(String s) {
        if (s == null || s.isEmpty()) return "";
        return s.substring(0, 1).toUpperCase() + s.substring(1);
    }
    private static String formatTeamName(String name) {
        if (name == null || name.isBlank()) {
            return "";
        }

        return Arrays.stream(name.split("/"))
                .map(part -> part.substring(0, 1).toUpperCase() + part.substring(1).toLowerCase())
                .collect(Collectors.joining("/"));
    }

}
