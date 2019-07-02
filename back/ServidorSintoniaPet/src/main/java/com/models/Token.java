package com.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "token")
public class Token {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String login;
	public String token;
	
	public Token(String login, String token)
	{
		this.login = login;
		this.token = token;
	}
	
	public Token()
	{
		this.login = "";
		this.token = "";
	}
	
	public long getId() 
	{
		return id;
	}
	
	public void setId(long id) 
	{
		this.id = id;
	}
	
	public String getLogin() 
	{
		return login;
	}
	
	public void setLogin(String login) 
	{
		this.login = login;
	}
	
	public String getToken()
	{
	
		return token;
	}

	public void setToken(String token) 
	{
	
		this.token = token;
	}
	
	
	
}

