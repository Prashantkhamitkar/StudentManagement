package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="address")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
private String inputAddress;
private String inputAddress2;
private String inputCity;
private String state;
private String inputZip;
//now here i am doing onetoone mapping in between the address and student table
//this is our owning side which contain foreign key
@JsonBackReference
@OneToOne(mappedBy = "address",cascade = CascadeType.ALL)
private Student student;

}
