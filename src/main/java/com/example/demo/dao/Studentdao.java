package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.dto.Addressdto;
import com.example.demo.dto.Studentdto;
import com.example.demo.model.Student;

public interface Studentdao extends JpaRepository<Student, Long>{
Student findByEmailAndPassword(String email,String password);
Student findByEmail(String email);
}
