package com.padel.padel_global_score.security;

import com.padel.padel_global_score.persistence.entity.AppUser;
import com.padel.padel_global_score.service.AppUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Component("userDetailsService")
public class DomainUserDetailsService implements UserDetailsService {
    private final Logger log = LoggerFactory.getLogger(DomainUserDetailsService.class);
    private final AppUserService appUserService;

    public DomainUserDetailsService(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(final String username) {
        log.debug("Authenticating {}", username);

        AppUser appUser = appUserService.getUserByUsername(username.toLowerCase());
        if (appUser == null) {
            throw new UsernameNotFoundException("El usuario no existe");
        }
        return createSpringSecurityUser(appUser);
    }

    private UserDetails createSpringSecurityUser(AppUser user) {
        return new CustomUserDetails(user.getId(), user.getUsername(), user.getPassword(), Collections.emptyList());
    }
}
