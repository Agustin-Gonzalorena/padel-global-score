package com.telegrambot.telegram_bot.service.ai;

import com.telegrambot.telegram_bot.presentation.dto.ResultDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class GeminiWebClient {
    @Value("${GEMINI_API_KEY}")
    private String API_KEY;

    private final WebClient.Builder webClientBuilder;

    public GeminiWebClient(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }

    public String getHeaderNotification(ResultDTO dto){
        try{
        String resultados = Map.of(
                "Equipo A", dto.results().get(0).gamesTeamA() + "-" + dto.results().get(1).gamesTeamA() + "-" + dto.results().get(2).gamesTeamA(),
                "Equipo B", dto.results().get(0).gamesTeamB() + "-" + dto.results().get(1).gamesTeamB() + "-" + dto.results().get(2).gamesTeamB()
        ).toString();
            String prompt =
                    "Quiero que escribas una frase divertida, corta y con un toque sarcástico para mostrar en una notificación del resultado de un partido de pádel. " +
                            "Jugaron el equipo A (" + dto.teamA() + ") contra el equipo B (" + dto.teamB() + "). " +
                            "El ganador fue: " + dto.winner() + ". " +
                            "Usá el nombre completo del equipo ganador (no digas 'equipo A' o 'equipo B'). " +
                            "La frase tiene que sonar como algo que diría un amigo en tono de broma, tipo redes sociales. " +
                            "Debe tener al menos 5 palabras, incluir un emoji relacionado con el pádel o el deporte, y no usar hashtags. " +
                            "No pongas los puntos o sets (eso va aparte). " +
                            "Tiene que reflejar el resultado general del partido, no solo un set. " +
                            "Importante: la frase debe felicitar o destacar al equipo ganador con humor, y que el chiste o burla amistosa quede dirigido al equipo perdedor, nunca al ganador. " +
                            "Solo quiero la frase, nada más. " +
                            "Acá tenés los resultados por si sirven de contexto:\n" +
                            resultados;

            Mono<String> response = consultGeminiAPI(prompt);
            return Objects.requireNonNull(response.block().trim());
        }catch (Exception e){
            return null;
        }
    }

    public Mono<String> consultGeminiAPI(String prompt){
        try{
            var requestBody = Map.of(
                    "contents", List.of(
                            Map.of("parts", List.of(
                                    Map.of("text", prompt)
                            ))
                    )
            );
            return webClientBuilder.baseUrl("https://generativelanguage.googleapis.com")
                    .build()
                    .post()
                    .uri(uriBuilder -> uriBuilder
                            .path("/v1beta/models/gemini-2.0-flash:generateContent")
                            .queryParam("key", API_KEY)
                            .build())
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(JsonNode.class)
                    .map(response -> {
                        JsonNode candidates = response.get("candidates");
                        if (candidates == null || candidates.isEmpty()) {
                            throw new RuntimeException("Respuesta del modelo sin candidatos");
                        }

                        JsonNode content = candidates.get(0).get("content");
                        JsonNode parts = content.get("parts");
                        if (parts == null || parts.isEmpty()) {
                            throw new RuntimeException("Respuesta del modelo sin partes de texto");
                        }

                        return parts.get(0).get("text").asText();
                    });
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}

