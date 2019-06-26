package com.controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.models.Usuario;
import com.repository.UsuarioRepository;

@RestController
@RequestMapping(path="/usuario")
@CrossOrigin(origins = "*")

public class UsuarioController
{
	@Autowired
	private UsuarioRepository repositorioUsuario;
	
	
	
	@PostMapping(value="/add")
	public @ResponseBody boolean add(MultipartFile file, Usuario usuario)
	{
	
		
		 Usuario usuarioBusca = repositorioUsuario.findByRgAndLoginAndCpf(usuario.getRg(), usuario.getLogin(), usuario.getCpf());
		  
		 if(usuarioBusca != null) return false;
		 
		
		repositorioUsuario.save(usuario);
		
		
		
		return true;
	}
	

}
