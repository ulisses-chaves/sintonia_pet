package com.controllers;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;


import com.models.Usuario;
import com.repository.UsuarioRepository;

@RestController
@RequestMapping(path="/usuario")
@CrossOrigin(origins = "*")

public class UsuarioController
{
	
	
	
	@Autowired
	private UsuarioRepository repositorioUsuario;
	
	@PostMapping(value="/file")
	public @ResponseBody boolean save(@RequestParam("file") MultipartFile file)
	{
		
		return true;
	}
	
	
	@PostMapping(value="/add")
	public @ResponseBody ResponseEntity<String> add(@RequestParam("file") MultipartFile file, @RequestParam("usuario") Usuario usuario)
	{
	
		 Usuario usuarioBusca = repositorioUsuario.findByRgAndLoginAndCpf(usuario.getRg(), usuario.getLogin(), usuario.getCpf());
		  
		 if(usuarioBusca != null) 
			 return new ResponseEntity<>("Usuário já existe", HttpStatus.BAD_REQUEST); ;
						 
		
		repositorioUsuario.save(usuario);
		
		return new ResponseEntity<>(HttpStatus.OK) ;
		
	}
	
	@PutMapping(value="/update")
	public @ResponseBody ResponseEntity<String> update(@RequestBody Usuario usuario)
	{
	
		
		 Usuario usuarioBusca = repositorioUsuario.findByRgAndLoginAndCpf(usuario.getRg(), usuario.getLogin(), usuario.getCpf());
		  
		 if(usuarioBusca == null)
			 return new ResponseEntity<>("Não existe um usuário com os dados cadastrados", HttpStatus.BAD_REQUEST); ;
				
		 
		
		repositorioUsuario.delete(usuario);
		repositorioUsuario.save(usuario);
		
		
		
		return new ResponseEntity<>(HttpStatus.OK) ;
		
	}
	

}
