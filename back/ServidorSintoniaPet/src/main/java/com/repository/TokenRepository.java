package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Token;

public interface TokenRepository extends JpaRepository<Token, Long> {
	
	Token findByRg(String rg);
	Token findByToken(String token);

}
