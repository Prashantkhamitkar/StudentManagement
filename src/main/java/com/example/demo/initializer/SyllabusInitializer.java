package com.example.demo.initializer;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.Syllabusdao;
import com.example.demo.model.Syllabus;

@Component 

public class SyllabusInitializer {

	@Autowired
	private Syllabusdao dao;
	
	
	
	
	
	
	
	@PostConstruct
	public void init() {
		List<Syllabus> syllabus = new ArrayList();
		syllabus.add(new Syllabus(1,"DAC", "Core Java", "18 Days"));
		syllabus.add(new Syllabus(2, "DAC","Data Structures and Algorithms", "10 Days"));
		syllabus.add(new Syllabus(3,"DAC", "Database Management Systems", "18 Days"));
		syllabus.add(new Syllabus(4, "DAC","Operating Systems", "10 Days"));
		syllabus.add(new Syllabus(5, "DAC","Web Technologies", "20 Days"));
		syllabus.add(new Syllabus(6, "DAC","Web-Based java", "18 Days"));
		syllabus.add(new Syllabus(7, "DAC",".Net", "21 Days"));
		List<Syllabus> syllabus1 = new ArrayList();
		syllabus1.add(new Syllabus(8, "DBDA","Data Analysis and Visualization", "18 Days"));
		syllabus1.add(new Syllabus(9, "DBDA","Statistical Analysis", "10 Days"));
		syllabus1.add(new Syllabus(10,"DBDA", "Operations Analytics", "18 Days"));
		syllabus1.add(new Syllabus(11,"DBDA", "Operating Systems", "10 Days"));
		syllabus1.add(new Syllabus(12, "DBDA","Data Management and Database Systems", "20 Days"));
		syllabus1.add(new Syllabus(13,"DBDA", "Data-driven Decision Making", "18 Days"));
		syllabus1.add(new Syllabus(14, "DBDA","Operations Analytics", "21 Days"));
		List<Syllabus> syllabus2 = new ArrayList();
		syllabus2.add(new Syllabus(15,"DMC", "C++ Programming", "18 Days"));
		syllabus2.add(new Syllabus(16,"DMC", "Concept of Programming", "10 Days"));
		syllabus2.add(new Syllabus(17, "DMC","Core Java", "18 Days"));
		syllabus2.add(new Syllabus(18, "DMC","Operating Systems", "10 Days"));
		syllabus2.add(new Syllabus(19, "DMC","Data Management and Database Systems", "20 Days"));
		syllabus2.add(new Syllabus(20, "DMC","Web Technology", "18 Days"));
		syllabus2.add(new Syllabus(21, "DMC","Web Based Java", "21 Days"));
		List<Syllabus> syllabus3 = new ArrayList();
		syllabus3.add(new Syllabus(22, "DESD","Embedded Systems Design", "18 Days"));
		syllabus3.add(new Syllabus(23, "DESD","VLSI (Very Large Scale Integration) Design", "10 Days"));
		syllabus3.add(new Syllabus(24, "DESD","Signal Processing and Communication Systems", "18 Days"));
		syllabus3.add(new Syllabus(25, "DESD","Cybersecurity for Electronics Systems", "10 Days"));
		syllabus3.add(new Syllabus(26, "DESD","IoT (Internet of Things) and Sensor Networks", "20 Days"));
		syllabus3.add(new Syllabus(27, "DESD","Microwave Systems", "18 Days"));
		syllabus3.add(new Syllabus(28, "DESD","Microservices", "21 Days"));
		List<Syllabus> syllabus4 = new ArrayList();
		syllabus4.add(new Syllabus(29,"DITISS", "Database Management", "18 Days"));
		syllabus4.add(new Syllabus(30, "DITISS","Programming and Software Development", "10 Days"));
		syllabus4.add(new Syllabus(31, "DITISS","Network Security", "18 Days"));
		syllabus4.add(new Syllabus(32, "DITISS","Operating Systems", "10 Days"));
		syllabus4.add(new Syllabus(33, "DITISS","Cybersecurity Management", "20 Days"));
		syllabus4.add(new Syllabus(34, "DITISS","Web Technologies", "18 Days"));
		syllabus4.add(new Syllabus(35,"DITISS", "Cloud Computing", "21 Days"));
		
		List<Syllabus> newlist=new ArrayList<>();
		newlist.addAll(syllabus);
		newlist.addAll(syllabus1);
		newlist.addAll(syllabus2);
		newlist.addAll(syllabus3);
		newlist.addAll(syllabus4);
		dao.saveAll(newlist);

	}
}
