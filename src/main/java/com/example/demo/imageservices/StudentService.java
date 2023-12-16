package com.example.demo.imageservices;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.Addressdto;
import com.example.demo.dto.Signinrequest;
import com.example.demo.dto.Studentdto;
import com.example.demo.model.Student;

public interface StudentService {
String uploadImage(Studentdto s,String path,MultipartFile image)throws IOException;
InputStream getResource(String path,String filename) throws FileNotFoundException;
String insertdata(Studentdto s);
List<Studentdto> getalldetails();
Student loginuser(String email,String password);
Studentdto getByid(Long id);
String getuserbymail(Addressdto dto);
String Deletestudent(Long id);
String updatepassword(String s,String password);
Student getuserbyEmail(String email);
Student getstudentbyid(Long id);
}
