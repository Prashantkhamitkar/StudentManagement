package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.AppUser;
@Repository
public interface Userdao extends JpaRepository<AppUser, Long> {

	Optional<AppUser> findByEmail(String email);
}
