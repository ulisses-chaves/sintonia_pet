package com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

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
		 http.authorizeRequests().antMatchers( "/usuario/add").permitAll();
		 
		 
		
		 http.csrf().disable();
		 
		 http.authorizeRequests().antMatchers( "/login").hasRole("USER");
		 
	  
	  }
	  
	  @Override
	  protected void configure(AuthenticationManagerBuilder builder) throws Exception
	  {
	    builder
	        .userDetailsService(service);
	  }

}
