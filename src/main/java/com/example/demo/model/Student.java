package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
}
