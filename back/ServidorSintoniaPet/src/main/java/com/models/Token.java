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
	private String rg;
	private String token;
	private boolean usado;
	
	public Token(String rg, String token)
	{
		this.rg = rg;
		this.token = token;
		this.usado = false;
	}
	
	public Token()
	{
		this.rg = "";
		this.token = "";
		this.usado = false;
	}
	
	public long getId() 
	{
		return id;
	}
	
	public void setId(long id) 
	{
		this.id = id;
	}
	
	public String getRg() 
	{
		return rg;
	}
	
	public void setRg(String rg) 
	{
		this.rg = rg;
	}
	
	public String getToken()
	{
	
		return token;
	}

	public void setToken(String token) 
	{
	
		this.token = token;
	}

	public boolean isUsado() {
		return usado;
	}

	public void setUsado(boolean usado) {
		this.usado = usado;
	}
	
	@Override
	public boolean equals(Object o)
	{
		return this.token.equals(((Token)o).getToken()) & this.rg.equals(((Token)o).getRg());
	}
	
}

