package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.Signinrequest;
import com.example.demo.dto.Signinresponse;
import com.example.demo.utils.JwtUtils;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class Userauthcontroller {

	@Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils jwtutils;
	@PostMapping("/")
	public ResponseEntity<?> loginuser(@RequestBody Signinrequest request){
		System.out.println(request.getEmail()+" "+request.getPassword());
		Authentication principle =mgr.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
String jwttoken=	jwtutils.generatToken(principle);
	return ResponseEntity.ok(new Signinresponse(jwttoken,"user is authenticated"));
	}
}
