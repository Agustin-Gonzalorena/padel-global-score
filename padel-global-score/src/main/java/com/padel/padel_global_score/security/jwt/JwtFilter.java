package com.padel.padel_global_score.security.jwt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.padel.padel_global_score.presentation.dto.response.ErrorResponse;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.LocalDateTime;

public class JwtFilter extends OncePerRequestFilter {
    public static final String AUTHORIZATION_HEADER = "Authorization";
    private final Logger log = LoggerFactory.getLogger(JwtFilter.class);
    private final TokenProvider tokenProvider;

    public JwtFilter(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override // pasa por aca las peticiones antes de llegar al controlador(es un filtro)
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {


        String jwt = resolveToken(request); // obtener el token

        try {
            // chequeo que exista el token y que sea valido
            if (StringUtils.hasText(jwt) && this.tokenProvider.validateToken(jwt)) {
                // obtenemos la autentificacion y la seteamos en el contexto de spring
                Authentication authentication = this.tokenProvider.getAuthentication(jwt);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (ExpiredJwtException e) {
            log.info("REST request UNAUTHORIZED - La sesión ha expirado.");

            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);

            ErrorResponse errorResponse = new ErrorResponse(401, "Token expired");

            new ObjectMapper().writeValue(response.getWriter(), errorResponse);
            return;
        }
        filterChain.doFilter(request, response);
    }

    // le saca el header al token y me quedo con el token
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    @Getter
    private static class JwtErrorDTO {
        private final String message = "Token expired";
        private final String date = LocalDateTime.now().toString();

        public JwtErrorDTO() {
        }

        public String toJson() {
            try {
                return new ObjectMapper().writeValueAsString(this);
            } catch (RuntimeException | JsonProcessingException ex) {
                return String.format("{ message: %s }", this.message);
            }
        }
    }
}
