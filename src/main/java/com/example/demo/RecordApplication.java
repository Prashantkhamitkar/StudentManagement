package com.example.demo;

import java.io.File;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
//here we are implementing one interface 
//which one have run method which is call exactly 
//after loading the springbootapp
public class RecordApplication implements CommandLineRunner{
@Value("${file.upload.location}")
private String folderName;
	
	public static void main(String[] args) {
		SpringApplication.run(RecordApplication.class, args);
	}

	@Bean
	public PasswordEncoder passwordencoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("in run method "+folderName);
		//this method is called exactly once
		//here we are going to create folder for images 
		//this location is comming from application.properties
		//we can access this by using @Value annotation
		File dir=new File(folderName);
		if(!dir.exists()) {
			System.out.println("Folder is created  "+dir.mkdirs());
		}
		else
			System.out.println("already have it ");
	}
	
	
}
