package com.example.demo.utils;

import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import com.example.demo.customuser.Customuserdetails;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtils {
	@Value("${SECRET_KEY}")
	private String jwtSecret;
@Value("${EXP_TIMEOUT}")
private int Exptime;

private Key key;

@PostConstruct
public void init() {
	key=Keys.hmacShaKeyFor(jwtSecret.getBytes());
}
public String generatToken(Authentication authentication) {
	
	Customuserdetails userprinciple=(Customuserdetails) authentication.getPrincipal();
	return Jwts.builder()
			.setSubject((userprinciple.getUsername()))
			.setIssuedAt(new Date())
			.setExpiration(new Date((new Date()).getTime()+Exptime))
				.claim("authorities",getAuthoritiesInString(userprinciple.getAuthorities()))
				.signWith(key,SignatureAlgorithm.HS512).compact();
				
			
					
			
}
public String getUserNameByToken(Claims claims) {
	return claims.getSubject();
}
public Claims validateToken(String jwtToken) {
	Claims claims=Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwtToken).getBody();
	return claims;
}

private String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
	// TODO Auto-generated method stub
	String Authority=authorities.stream().map(authority->authority.getAuthority()).collect(Collectors.joining(","));
	System.out.println(Authority);
	return Authority;
}

public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims){
	String authstring=(String) claims.get("authorities");
	List<GrantedAuthority> authorities=AuthorityUtils.commaSeparatedStringToAuthorityList(authstring);
	authorities.forEach(System.out::println);
	return authorities;
}
}
