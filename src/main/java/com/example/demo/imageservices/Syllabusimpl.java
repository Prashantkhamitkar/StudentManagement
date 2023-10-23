package com.example.demo.imageservices;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.Syllabusdao;
import com.example.demo.model.Syllabus;

@Service
@Transactional
public class Syllabusimpl implements Syllabusinterface {
@Autowired
private Syllabusdao dao;
	@Override
	public List<Syllabus> getdetail(String name) {
		// TODO Auto-generated method stub
		if(name!=null)
		return dao.findByName(name);
		return null;
	}

}
