package com.example.demo.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name="Payment")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long paymentid;
private double fees;
private LocalDateTime paymentDate;
@JsonBackReference
@OneToOne
@JoinColumn(name="student_id")
private Student student;
@JsonBackReference
@OneToOne

@JoinColumn(name="course_id")
private Course course;
	
}
