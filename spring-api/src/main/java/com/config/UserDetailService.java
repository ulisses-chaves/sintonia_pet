package com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import com.models.Usuario;
import com.repository.UsuarioRepository;

@Repository
public class UserDetailService implements UserDetailsService{

	@Autowired
	private UsuarioRepository repositorio;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Usuario usuario = repositorio.findByLogin(username);
		
		if(usuario == null)
			throw new UsernameNotFoundException("Login não existe");
		
		UsuarioAutenticacao usuarioAutenticado = new UsuarioAutenticacao();
		usuarioAutenticado.setAdmin(usuario.isAdmin());
		usuarioAutenticado.setLogin(usuario.getLogin());
		usuarioAutenticado.setSenha(usuario.getSenha());
		
		return usuarioAutenticado;
	}

}
