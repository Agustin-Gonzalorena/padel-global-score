package com.padel.padel_global_score.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
public class CorsGlobalConfig {

    @Value("${CORS_ALLOWED_ORIGINS}")
    private String allowedOriginsEnv;


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        /*List<String> allowedOrigins = List.of(allowedOriginsEnv.split(","));*/
        List<String> allowedOrigins = Arrays.stream(allowedOriginsEnv.split(","))
                .map(String::trim) // importante
                .toList();
        config.setAllowedOrigins(allowedOrigins);

        //config.setAllowedOrigins(List.of("http://localhost:3000", "https://reporte-gastos.vercel.app/"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }
}