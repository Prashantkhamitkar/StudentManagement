package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ManyToAny;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Student {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
private String firstname;
private String lastname;
private String imagename;
private String mobilenumber;
private String email;
private String password;
@Enumerated(EnumType.STRING)
private Role role;
@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
@JoinColumn(name="address_id")
private Address address;
@ManyToOne
(cascade=CascadeType.ALL)
@JoinColumn(name="course_id")
private Course course;
//this is our non owning side 
//non owning means its doesn't contain any foreign key
public Student(String firstname, String lastname, String imagename, String mobilenumber, String email, String password,
		Role role) {
	super();
	this.firstname = firstname;
	this.lastname = lastname;
	this.imagename = imagename;
	this.mobilenumber = mobilenumber;
	this.email = email;
	this.password = password;
	
	this.role = role;
}

}
