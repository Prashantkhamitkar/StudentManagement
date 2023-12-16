package com.example.demo.imageservices;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.Coursedao;
import com.example.demo.dao.PaymentDao;
import com.example.demo.dao.Studentdao;
import com.example.demo.dto.Paymentdto;
import com.example.demo.model.Course;
import com.example.demo.model.Payment;
import com.example.demo.model.Student;

@Service
@Transactional
public class PaymentServiceimpl implements PaymentserviceInterface{
//here we required the dependencies of Paymentrepository
	@Autowired
	private PaymentDao paymentrepo;
	@Autowired
	private StudentService studentrepo;
	@Autowired
	private CourseDao courserepo;
	
	
	@Override
	public String makePayment(Paymentdto payment) {
	//	System.out.println(payment.getStudent().getEmail());
		//System.out.println(payment.getCourse().getName());
		// TODO Auto-generated method stub
		Payment payments=new Payment();
		
		if(payment!=null) {
		Course course=courserepo.getdetails(payment.getCname());
		course.setAvailableSeats(course.getAvailableSeats()-1);
		//System.out.println(course.getDescription());
		Student std=studentrepo.getstudentbyid(payment.getStudentid());
		std.setIspurchased(1);
		//System.out.println(std.getEmail());
		payments.setCourse(course);
		payments.setStudent(std);
		payments.setFees(course.getPrice());
		payments.setPaymentDate(payment.getDate());
		}
		
		if(paymentrepo.save(payments)!=null)
		return "Success";
		return "Fail";
	}

}
