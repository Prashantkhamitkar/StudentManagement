package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.demo.filter.Jwtfilter;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

	@Autowired
	private Jwtfilter jwtfilter;

	//configure spring security for authorization(role based)
	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception{
		http.exceptionHandling()
		.authenticationEntryPoint((req,res,exc)->res.sendError(HttpStatus.UNAUTHORIZED.value(),"Not Yet Authenticated"))
		.and().csrf().disable().authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		.antMatchers("/users*/*","/home/signup","/users/**","/student/image/*","/student/signup","/student/").permitAll()
		.antMatchers("/admin/remove").hasRole("ADMIN")
		.antMatchers("/admin/signup").hasRole("STUDENT")
		.antMatchers("/seller/add").hasRole("TEACHER")
		
		.anyRequest().authenticated()
		.and().sessionManagement().
		sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().addFilterBefore(jwtfilter,UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}
		@Bean
		public AuthenticationManager authenticationmanager(AuthenticationConfiguration config) throws Exception{
			return config.getAuthenticationManager();
		}
	
}
