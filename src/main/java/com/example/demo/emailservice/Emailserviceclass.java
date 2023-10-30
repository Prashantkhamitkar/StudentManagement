package com.example.demo.emailservice;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.dto.Mailsenderclass;

@Service
public class Emailserviceclass {
@Autowired
private JavaMailSender jvm;

@Value("${spring.mail.username}")
private String mailaddress;
public String generateotp() {
	SecureRandom securerandom=new SecureRandom();
	int otp=securerandom.nextInt(900000)+100000;
	System.out.println(mailaddress);
	return otp+"";
	
}

public String sendmail(String mail) {
	String gotp=generateotp();
	Mailsenderclass mailsender=new Mailsenderclass("OTP verfication mail","Please enter the otp to change verify your account  "+gotp);
	SimpleMailMessage simplemail=new SimpleMailMessage();
	simplemail.setFrom(mailaddress);
	simplemail.setSubject(mailsender.getSubject());
	simplemail.setText(mailsender.getMessage());
	simplemail.setTo(mail);
    jvm.send(simplemail);
    
    return gotp;
}
	
	
}
