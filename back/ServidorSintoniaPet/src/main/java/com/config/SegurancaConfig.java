package com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SegurancaConfig extends WebSecurityConfigurerAdapter {
	   
	@Autowired
	private UserDetailService service;
	
	  @Override
	  protected void configure(HttpSecurity http) throws Exception 
	  {
		
		  http.authorizeRequests().mvcMatchers( "/usuario/all").hasRole("USER").and().httpBasic().and().csrf().disable().cors().disable();
		  http.authorizeRequests().mvcMatchers( "/usuario/login").permitAll().and().csrf().disable().cors().disable();
		  
		  http.authorizeRequests().mvcMatchers( "/usuario/add").permitAll().and().csrf().disable().cors().disable();
		 
		  http.logout().logoutUrl("/logout").disable().cors().disable();
	  
	  }
	  
	  @Override
	  protected void configure(AuthenticationManagerBuilder builder) throws Exception
	  {
	    builder
	        .userDetailsService(service);
	  }

}
