package com.example.demo.imageservices;

import java.util.List;

import com.example.demo.model.Course;

public interface CourseDao {
List<Course> getAllcourses();
Course getdetails(String name);
}
