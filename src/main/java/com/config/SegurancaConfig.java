package com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SegurancaConfig extends WebSecurityConfigurerAdapter implements ApplicationContextAware{
	   
	@Autowired
	private UserDetailService service;
	

	  @Override
	  protected void configure(HttpSecurity http) throws Exception 
	  {
		
		 http.cors();
		 http.httpBasic();  	
		 
		 
		 http.logout().logoutUrl("/logout").disable();
		 http.authorizeRequests().antMatchers( "/usuario/get").hasRole("USER");
		 http.authorizeRequests().antMatchers( "/usuario/add").permitAll();
		 http.authorizeRequests().antMatchers( "/usuario/update").hasRole("USER");
		 http.authorizeRequests().antMatchers( "/pet/update/").hasRole("USER");
		 http.authorizeRequests().antMatchers( "/pet/add/").hasRole("USER");
		 http.authorizeRequests().antMatchers( "/pet/delete/").hasRole("USER");
		 http.authorizeRequests().antMatchers( "/pet/all/").hasRole("USER");
		 http.authorizeRequests().antMatchers( "/usuario/token/usar/").hasRole("USER");
		 http.authorizeRequests().antMatchers( "/usuario/mudarSenha/").hasRole("USER");
		 

		 http.authorizeRequests().antMatchers( "/email/contato").permitAll();
		 http.authorizeRequests().antMatchers( "/usuario/mudar").permitAll();
		 
		 http.authorizeRequests().antMatchers( "/usuario/token").hasRole("ADMIN");
		 
		
		 http.csrf().disable();
		 
		 http.authorizeRequests().antMatchers( "/login").hasRole("USER").and().authorizeRequests();
		 
	  
	  }
	  
	  @Override
	  protected void configure(AuthenticationManagerBuilder builder) throws Exception
	  {
	    builder
	        .userDetailsService(service);
	  }

}
