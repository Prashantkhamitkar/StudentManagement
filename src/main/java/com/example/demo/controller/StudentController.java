package com.example.demo.controller;

import org.springframework.http.MediaType;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.Studentdto;
import com.example.demo.imageservices.StudentService;
import com.example.demo.model.Student;

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {
@Value("${file.upload.location}")
private String path;
@Autowired
private StudentService std;
	
	//add a image on server side
@PostMapping("/signup")
public ResponseEntity<?> insertStudentrecord(@RequestBody Studentdto sd){
	
	return ResponseEntity.ok(std.insertdata(sd));
}
@PostMapping("/image/{id}")
	public ResponseEntity<?> uploadImage(@PathVariable Long id,@RequestParam MultipartFile imagedata){
			try {
			return ResponseEntity.ok(std.uploadImage(id, path, imagedata));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	
	}
@GetMapping(value ="/image/{name}",produces = MediaType.IMAGE_JPEG_VALUE)
public void downloadimage(@PathVariable String name,HttpServletResponse response) throws IOException {
	InputStream resource=std.getResource(path, name);
	response.setContentType(MediaType.IMAGE_JPEG_VALUE);
	//Copy the contents of the given InputStream to the given OutputStream.
	StreamUtils.copy(resource, response.getOutputStream());
}
@GetMapping("/")
public ResponseEntity<List<Studentdto>> getalldetails(){
	
	return ResponseEntity.ok(std.getalldetails());
}

}
