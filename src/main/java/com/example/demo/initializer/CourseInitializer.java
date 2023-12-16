package com.example.demo.initializer;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.Coursedao;
import com.example.demo.model.Course;
import com.example.demo.model.Syllabus;

@Component
public class CourseInitializer {
@Autowired
private Coursedao cdao;

@PostConstruct
public void init() {
	List<Course> list=new ArrayList<>();
	
	list.add(new Course(1,"DAC","The Postgraduate Diploma in Advanced Computing (PG DAC) is an advanced-level program designed to equip students and professionals with the knowledge and skills required to excel in the ever-evolving field of information technology and advanced computing. This intensive course covers a wide range of topics, including software development, networking, database management, and cybersecurity.","Elevate your IT career with our PG DAC program.", 120, 120, 106000,"Six Months", "Pune","Prerequisites for PG DAC include an undergraduate degree in a related field, such as computer science or IT, and a fundamental understanding of computer and programming concepts.", null,null));
	list.add(new Course(2,"DBDA","A Postgraduate Diploma in Business Data Analytics (PG DBDA) is a specialized program that focuses on equipping students with the knowledge and skills needed to excel in the field of data analytics and its application in business.","Elevate your IT career with our PG DBDA program.", 60, 60, 136000,"Six Months", "Pune","A bachelor's degree in a related field, such as business, economics, or a quantitative discipline, is typically required.", null,null));
	list.add(new Course(3,"DMC","A Postgraduate Diploma in Data Management and Compliance (PG DMC) is a specialized program that focuses on data management and regulatory compliance in various industries. ","Elevate your IT career with our PG DAC program.", 120, 120, 106000,"Six Months", "Pune","Prerequisites for PG DMC include an undergraduate degree in a related field, such as computer science or IT, and a fundamental understanding of computer and programming concepts.", null,null));
	list.add(new Course(4,"DESD","The Postgraduate Diploma in Embedded Systems Design (PGDESD) is an advanced program that focuses on equipping students with in-depth knowledge and practical skills related to embedded systems design.","Elevate your IT career with our PG DAC program.", 60, 60, 106000,"Six Months", "Pune","Prerequisites for PG DESD include an undergraduate degree in a related field, such as computer science or IT, and a fundamental understanding of computer and programming concepts.", null,null));
	list.add(new Course(5,"DITISS","The Postgraduate Diploma in Information Technology and Internet Security (PG DITISS) is an advanced program that focuses on equipping students with in-depth knowledge and practical skills related to information technology and internet security.","Elevate your IT career with our PG DAC program.", 120, 120, 106000,"Six Months", "Pune","Prerequisites for PG DITISS include an undergraduate degree in a related field, such as computer science or IT, and a fundamental understanding of computer and programming concepts.", null,null));
      
	
	cdao.saveAll(list);
}
	
}
