package com.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.models.Pet;
import com.models.PetWrapper;
import com.models.Usuario;
import com.repository.PetRepository;
import com.repository.UsuarioRepository;

@RestController
@RequestMapping(value = "/pet")
public class PetController {

	
	@Autowired
	private UsuarioRepository usuarios;
	
	@Autowired
	private PetRepository pets;
	

	
	@GetMapping(value = "/all/{login}")
	public ResponseEntity<List<Pet>> getAll(@PathVariable("login") String login)
	{
		Usuario usuario = usuarios.findByLogin(login);
		
		if(usuario == null)
			return new ResponseEntity<>(new ArrayList<Pet>(), HttpStatus.BAD_REQUEST); ;
		
		return new ResponseEntity<>(usuario.getPets(), HttpStatus.OK) ;
			
	}
	
	@PostMapping(value = "/add/{login}")
	public ResponseEntity<String> add(@RequestBody PetWrapper pet, @PathVariable("login") String login)
	{
		
		Usuario usuario = usuarios.findByLogin(login);
		
		if(usuario == null)
			return new ResponseEntity<>("Usuário com esse login não existe", HttpStatus.BAD_REQUEST); ;
			
		
		while(true)
		{
			String cpfPet = new String();
			
			for(int i = 0; i < 9; ++i)
			{
				cpfPet += Long.toString(Math.round(Math.random()) * (9-1) +1);
			}
			
			pet.getPet().setNumero_rg(cpfPet);
						
			if(!usuario.getPets().contains(pet))
				break;
			
			
		}
			
		usuario.getPets().add(pet.getPet());
		usuarios.save(usuario);
		return new ResponseEntity<>(HttpStatus.OK) ;
		
	}
	
	@PutMapping(value = "/update/{login}")
	public ResponseEntity<String> update(@RequestBody PetWrapper pet, @PathVariable("login") String login)
	{
		Usuario usuario = usuarios.findByLogin(login);
		
		if(usuario == null)
			return new ResponseEntity<>("Usuário com esse login não existe", HttpStatus.BAD_REQUEST); ;
			
		usuario.getPets();
		if(!usuario.getPets().contains(pet.getPet()))
			return new ResponseEntity<>("Pet não existe", HttpStatus.BAD_REQUEST); ;
		
		usuario.getPets().remove(pet.getPet());
		usuario.getPets().add(pet.getPet());
		usuarios.save(usuario);
		
		pets.delete(pet.getPet());
		pets.save(pet.getPet());
		
		return new ResponseEntity<>(HttpStatus.OK) ;	
	}
	
	@DeleteMapping(value = "/delete/{login}")
	public ResponseEntity<String> delete(@RequestBody Pet pet, @PathVariable("login") String login)
	{
		Usuario usuario = usuarios.findByLogin(login);
		
		if(usuario == null)
			return new ResponseEntity<>("Usuário com esse login não existe", HttpStatus.BAD_REQUEST); ;
			
		if(!usuario.getPets().contains(pet))
			return new ResponseEntity<>("Pet não existe", HttpStatus.BAD_REQUEST); ;
			
		usuario.getPets().remove(pet);
		usuarios.save(usuario);
		
		pets.delete(pet);
		pets.save(pet);
		
		
		return new ResponseEntity<>(HttpStatus.OK) ;
	}
	
	
}
