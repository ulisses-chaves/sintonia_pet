package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.models.Email;
import com.repository.EmailRepository;

@RestController
@RequestMapping("/email")
public class EmailController {

	@Autowired
	private JavaMailSender sender;
	
	@Autowired
	private EmailRepository repository;
	private String emailTo = "ramicesmoises@hotmail.com";
	
	
	@PostMapping(value = "/contato")
	public @ResponseBody ResponseEntity<String> contato(@RequestBody Email email)
	{
		
		
		try
		{
			SimpleMailMessage message = new SimpleMailMessage();
	        message.setText(email.getMensagem());
	        message.setTo(emailTo);
	        message.setFrom(email.getEmail());
	
	        sender.send(message);
	        
	       repository.save(email);
	        
			return new ResponseEntity<>("Sucesso", HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}
