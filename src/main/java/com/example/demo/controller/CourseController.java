package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.imageservices.CourseDao;
import com.example.demo.imageservices.Syllabusinterface;
import com.example.demo.model.Course;
import com.example.demo.model.Syllabus;

@RestController
@RequestMapping("/course")
@CrossOrigin("*")
public class CourseController {

	@Autowired
	private CourseDao coursedao;
	
	@Autowired
	private Syllabusinterface sylldao;
	
	@GetMapping("/")
	public ResponseEntity<List<Course>> getallcoursedetails(){
		//System.out.println(coursedao.getAllcourses());
		return ResponseEntity.ok(coursedao.getAllcourses());
	}
	@GetMapping("/{name}")
	public ResponseEntity<Course> getDetails(@PathVariable("name") String name){
		if(coursedao.getdetails(name)!=null)
		return ResponseEntity.ok(coursedao.getdetails(name));
		
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/topic/{name}")
	public ResponseEntity<List<Syllabus>> getsyllabus(@PathVariable("name") String name){
		if(sylldao.getdetail(name)!=null)
			return ResponseEntity.ok(sylldao.getdetail(name));
		return ResponseEntity.notFound().build();
	}
}
