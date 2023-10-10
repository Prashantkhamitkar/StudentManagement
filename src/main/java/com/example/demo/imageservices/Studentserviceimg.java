package com.example.demo.imageservices;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dao.Studentdao;
import com.example.demo.dto.Studentdto;
import com.example.demo.model.Role;
import com.example.demo.model.Student;

@Service
@Transactional
public class Studentserviceimg implements StudentService{

	@Autowired
	private Studentdao dao;
	
	@Override
	public String uploadImage(Long id,String path, MultipartFile image) throws IOException {
		String filename=image.getOriginalFilename();
		//now we are going to separate this file name and attach to one random numbers 
		String randomname=UUID.randomUUID().toString();
		String newname=randomname.concat(filename.substring(filename.lastIndexOf(".")));
		String fullpath=path+File.separator+newname;
		//getinputstream-Returns the input stream connected to the normal output of the subprocess.
		Files.copy(image.getInputStream(),Paths.get(fullpath));
		
Optional<Student> st=dao.findById(id);
System.out.println(st.toString());
	if(st.isPresent()) {
	Student student=st.get();
	student.setImagename(newname);
	student.setMobilenumber(student.getMobilenumber());
	student.setFirstname(student.getFirstname());
	student.setLastname(student.getLastname());
	student.setPassword(student.getPassword());
	student.setEmail(student.getEmail());
		if(dao.save(student)!=null)
			return "success";
	}
		return "fail";
	}

	@Override
	public InputStream getResource(String path, String filename) throws FileNotFoundException {
		// TODO Auto-generated method stub
		//now we are making full path
		String fullpath=path+File.separator+filename;
		//reading streams of raw bytes such as image data. 
		InputStream is=new FileInputStream(fullpath);
		return is;
	}

	@Override
	public String insertdata(Studentdto s) {
		// TODO Auto-generated method stub
		Student st=new Student();
		st.setImagename(s.getImagename());
		st.setMobilenumber(s.getMobilenumber());
		st.setEmail(s.getEmail());
		st.setFirstname(s.getFirstname());
		st.setLastname(s.getLastname());
		st.setRole(Role.STUDENT);
		st.setPassword(s.getPassword());
		if(dao.save(st)!=null) {
		return "success";
		}
		return "fail";
	}

	@Override
	public List<Studentdto> getalldetails() {
		// TODO Auto-generated method stub
		List<Student> list=dao.findAll();
		if(list!=null) {
		List<Studentdto> ls=list.stream().map(s->new Studentdto(s.getId(),s.getFirstname(),s.getLastname(), s.getEmail(), s.getPassword(), s.getImagename(), s.getMobilenumber())).collect(Collectors.toList());
		return ls;
		}
		
		return null;
	}

	
}
