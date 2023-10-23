package com.example.demo.dto;

import com.example.demo.model.Student;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Addressdto {
	private String inputAddress;
	private String inputAddress2;
	private String inputCity;
	private String state;
	private String inputZip;
	private String email;
}
