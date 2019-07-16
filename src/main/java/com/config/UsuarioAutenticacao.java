package com.config;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UsuarioAutenticacao implements UserDetails{

	private static final long serialVersionUID = 1L;

	private String login;
	private String senha;
	private boolean is_admin;
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> auth = new ArrayList<>();
		
		auth.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		if(isAdmin())
		{
			auth.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
				
		}
		 
		return auth;
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	public String getUsername() {
			return login;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public boolean isAdmin() {
		return is_admin;
	}

	public void setAdmin(boolean isAdmin) {
		this.is_admin = isAdmin;
	}

}
