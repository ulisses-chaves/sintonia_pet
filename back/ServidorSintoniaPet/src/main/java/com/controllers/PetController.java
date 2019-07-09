package com.controllers;

import java.sql.Date;
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
import org.springframework.web.bind.annotation.RestController;
import com.service.ServicesFoto;

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
			
		String cpfPet = new String();
			
		while(true)
		{
			cpfPet = new String();
			
			for(int i = 0; i < 9; ++i)
			{
				cpfPet += Long.toString(Math.round(Math.random()) * (9-1) +1);
			}
			
			pet.getPet().setNumero_rg(cpfPet);
						
			if(!usuario.getPets().contains(pet.getPet()))
				break;
			
			
		}

		pet.getPet().setRg_dono(usuario.getRg());

		if(pet.getFoto() != null)
		{
			try
			{
				ServicesFoto.saveFoto(pet.getFoto(), "fotos/pets/" + pet.getPet().getNumero_rg());
				pet.getPet().setCaminho_foto("fotos/pets/");
			}
			catch(Exception e)
			{
				return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
							
			}
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
			return new ResponseEntity<>("Usuário com esse login não existe", HttpStatus.BAD_REQUEST);
			
		if(!usuario.getPets().contains(pet.getPet()))
			return new ResponseEntity<>("Pet não existe", HttpStatus.BAD_REQUEST); ;
		
		Pet petAtualizacao = pet.getPet();
		
		Pet petUsuario = usuario.getPets().get(usuario.getPets().indexOf(pet.getPet()));
		
		
		if(petAtualizacao.getNome() != null)
		{
			petUsuario.setNome(petAtualizacao.getNome());
		}
		
		if(petAtualizacao.getIdade() != -1)
		{
			petUsuario.setIdade(petAtualizacao.getIdade());	
		}
		
		if(petAtualizacao.getData_nascimento() != null)
		{
			petUsuario.setData_nascimento(petAtualizacao.getData_nascimento());
		}
		
		if(petAtualizacao.getSexo() != 'z')
		{
			petUsuario.setSexo(petAtualizacao.getSexo());
		}

		if(petAtualizacao.getCastrado() != 'z')
		{
			petUsuario.setCastrado(petAtualizacao.getCastrado());
		}
		
		if(petAtualizacao.getCor_pelugem() != null)
		{
			petUsuario.setCor_pelugem(petAtualizacao.getCor_pelugem());
		}
		
		
		if(petAtualizacao.getPorte() != null)
		{
			petUsuario.setPorte(petAtualizacao.getPorte());
		}
		
		if(petAtualizacao.getRaca() != null)
		{
			petUsuario.setRaca(petAtualizacao.getRaca());
		}	
			
		if(petAtualizacao.getFiliação() != null)
		{
			petUsuario.setFiliação(petAtualizacao.getFiliação());
		}
		
		if(petAtualizacao.getPeso() != -1f)
		{
				petUsuario.setPeso(petAtualizacao.getPeso());
		}
		
			
		if(petAtualizacao.getNaturalidade() != null)
		{
			petUsuario.setCaminho_foto(petAtualizacao.getNaturalidade());		
		}	
			

		if(pet.getFoto() != null)
		{
			try
			{
				pet.setFoto(ServicesFoto.readFoto(petUsuario.getCaminho_foto(), petUsuario.getNumero_rg()));

				ServicesFoto.saveFoto(pet.getFoto(), "fotos/pets/" + petUsuario.getNumero_rg());
				petUsuario.setCaminho_foto("fotos/pets/");
			}
			catch(Exception e)
			{
				return new ResponseEntity<>("Erro salvando a foto. Contate	o suporte", HttpStatus.BAD_REQUEST);
							
			}
		}

		usuario.getPets().remove(petUsuario);
		usuario.getPets().add(petUsuario);
		usuarios.save(usuario);
		
		pets.delete(petUsuario);
		pets.save(petUsuario);
		
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
		
		ServicesFoto.deleteFoto(pet.getCaminho_foto() + pet.getNumero_rg() + ServicesFoto.getFormato());

		pets.delete(pet);
		
		return new ResponseEntity<>(HttpStatus.OK) ;
	}
	
	
}
