package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Course;

public interface Coursedao extends JpaRepository<Course, Long>{
Course findByName(String name);
}
