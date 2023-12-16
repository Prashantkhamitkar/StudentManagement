package com.example.demo.controller;

import org.springframework.http.HttpStatus;
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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.Addressdto;
import com.example.demo.dto.Paymentdto;
import com.example.demo.dto.Signinrequest;
import com.example.demo.dto.Studentdto;
import com.example.demo.emailservice.Emailserviceclass;
import com.example.demo.exception.CustomException;
import com.example.demo.imageservices.PaymentserviceInterface;
import com.example.demo.imageservices.StudentService;
import com.example.demo.model.Payment;
import com.example.demo.model.Student;

@RestController
@RequestMapping("/student")
//localhost:8080/student/
@CrossOrigin("http://localhost:3000/")
public class StudentController {
@Value("${file.upload.location}")
private String path;
@Autowired
private StudentService std;
@Autowired
private Emailserviceclass servobj;
@Autowired
private PaymentserviceInterface paymentservice;

	@PostMapping("/")
	public ResponseEntity<?> login(@RequestBody Signinrequest st){
		
		System.out.println(st.getEmail()+" "+st.getPassword());
		if(std.loginuser(st.getEmail(), st.getPassword())!=null)
		return ResponseEntity.ok(std.loginuser(st.getEmail(), st.getPassword()));
		
return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
	@PostMapping("/makepayment")
	public ResponseEntity<String> makepayment(@RequestBody Paymentdto payment){
		System.out.println(payment.toString());
		String str=paymentservice.makePayment(payment);
		if(str.equals("Success"))
		return ResponseEntity.ok("success");
		return ResponseEntity.ok("fail");
		
	}
@PostMapping("/signup")
	public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file,@ModelAttribute Studentdto sd){
			try {
			return ResponseEntity.ok(std.uploadImage(sd, path, file));
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
@GetMapping("/{id}")
public ResponseEntity<Studentdto> findbyid(@PathVariable Long id){
	return ResponseEntity.ok(std.getByid(id));
	
}
@PostMapping("/address")
public ResponseEntity<String> updateaddress(@RequestBody Addressdto dto) {
	System.out.println(dto.toString());
	return ResponseEntity.ok(std.getuserbymail(dto));
	
}
@DeleteMapping("/{id}")
public ResponseEntity<String> deletestudent(@PathVariable Long id){
	return ResponseEntity.ok(std.Deletestudent(id));
}
@GetMapping("/send/{mail}")
public ResponseEntity<String> sendmail(@PathVariable String mail) {
String otp=servobj.sendmail(mail);
	return ResponseEntity.ok(otp);
}
@PostMapping("/send/{mail}")
public ResponseEntity<String> updatepassword(@PathVariable String mail,@RequestBody Signinrequest password){
	return ResponseEntity.ok(std.updatepassword(mail, password.getPassword()));
}
}
