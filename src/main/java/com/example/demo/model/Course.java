package com.example.demo.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import net.bytebuddy.dynamic.loading.ClassReloadingStrategy.Strategy;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Course {
@Id
private long cid;
private String name;
@Column(length = 1000)
private String description;
private String instructor;
private int availableSeats;
private int totalSeats;
private double price;
private String duration;
private String location;
@Column(length = 1000)
private String prerequisites;
@JsonManagedReference
@OneToMany(mappedBy = "course",fetch = FetchType.EAGER)
private List<Student> student=new ArrayList<>();
@JsonManagedReference
@OneToOne(mappedBy = "course")
private Payment payment;
/*
 * @OneToMany(mappedBy="course",fetch=FetchType.EAGER,cascade = CascadeType.ALL)
 * private Set<Syllabus> syllabus;
 */
public Course(String name, String description, String instructor, int availableSeats, int totalSeats, double price,
		String duration, String location, String prerequisites, List<Student> student) {
	
	this.name = name;
	this.description = description;
	this.instructor = instructor;
	this.availableSeats = availableSeats;
	this.totalSeats = totalSeats;
	this.price = price;
	this.duration = duration;
	this.location = location;
	this.prerequisites = prerequisites;
	this.student = student;
}

}
