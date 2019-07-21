package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Email;

public interface EmailRepository  extends JpaRepository<Email, Long>{

}
