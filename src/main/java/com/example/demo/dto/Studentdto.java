package com.example.demo.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor

@Data
public class Studentdto {

	private long id;
	
	public Studentdto(String firstname, String lastname, String email, String password, String imagename,
			String mobilenumber) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.imagename = imagename;
		this.mobilenumber = mobilenumber;
		
	}
	public Studentdto(long id,String firstname, String lastname, String email, String password, String imagename,
			String mobilenumber) {
		this.id=id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.imagename = imagename;
		this.mobilenumber = mobilenumber;}
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private String imagename;
	private String mobilenumber;
	
}
