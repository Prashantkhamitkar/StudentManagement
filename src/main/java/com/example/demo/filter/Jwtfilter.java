package com.example.demo.filter;

import java.io.IOException;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.utils.JwtUtils;

import io.jsonwebtoken.Claims;

@Component
public class Jwtfilter extends OncePerRequestFilter{

@Autowired
private JwtUtils jwtutils;


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String authHeadr=request.getHeader("Authorization");
		System.out.println(authHeadr);
		if(authHeadr!=null&&authHeadr.startsWith("Bearer")) {
			System.out.println("Got bearer token ");
			String token=authHeadr.substring(7);
			//Bearer =7
			//now from this token we get Claims object which is present inside the 
			//jwtutils class which returns claims
			Claims claim=jwtutils.validateToken(token);
			//from claim objec we get username / email
			String email=jwtutils.getUserNameByToken(claim);
			//also get list of authorities 
			List<GrantedAuthority> authorities =jwtutils.getAuthoritiesFromClaims(claim);
			//now wrap the username and authorities in the usernamepasswordauthtoken
			UsernamePasswordAuthenticationToken authentication=new UsernamePasswordAuthenticationToken(email,null,authorities);
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
		}
		else 
			System.out.println("Request did not contain any token ");
		filterChain.doFilter(request, response);
		
	}

}
