package com.example.demo.imageservices;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.Studentdto;
import com.example.demo.model.Student;

public interface StudentService {
String uploadImage(Long s,String path,MultipartFile image)throws IOException;
InputStream getResource(String path,String filename) throws FileNotFoundException;
String insertdata(Studentdto s);
List<Studentdto> getalldetails();

}
