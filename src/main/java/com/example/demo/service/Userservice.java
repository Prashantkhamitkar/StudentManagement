package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.customuser.Customuserdetails;
import com.example.demo.dao.Userdao;
import com.example.demo.model.AppUser;

@Service
public class Userservice implements UserDetailsService{

	@Autowired
	private Userdao dao;
	
	@Autowired
	private PasswordEncoder passwordencoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		AppUser users=dao.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("Invalid email"));
		
		return new Customuserdetails(users);
	}

}
