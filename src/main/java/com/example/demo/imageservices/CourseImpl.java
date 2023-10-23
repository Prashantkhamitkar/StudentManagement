package com.example.demo.imageservices;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.Coursedao;
import com.example.demo.model.Course;

@Service
@Transactional
public class CourseImpl implements CourseDao{

	@Autowired
	private Coursedao csdao;
	
	@Override
	public List<Course> getAllcourses() {
		// TODO Auto-generated method stub
	
		return csdao.findAll();
	}

	@Override
	public Course getdetails(String name) {
		// TODO Auto-generated method stub
		if(name!=null)
		return csdao.findByName(name);
		else 
			return null;
	}

}
