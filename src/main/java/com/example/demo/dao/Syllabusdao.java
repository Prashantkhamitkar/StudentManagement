package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Syllabus;

public interface Syllabusdao extends JpaRepository<Syllabus, Long>{
List<Syllabus> findByName(String name);
}
