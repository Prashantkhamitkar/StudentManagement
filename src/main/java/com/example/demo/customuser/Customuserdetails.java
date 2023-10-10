package com.example.demo.customuser;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.model.AppUser;

public class Customuserdetails implements UserDetails{

	private AppUser appuser;
	public Customuserdetails(AppUser users) {
		// TODO Auto-generated constructor stub
	this.appuser=users;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of(new SimpleGrantedAuthority(appuser.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return appuser.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return appuser.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
