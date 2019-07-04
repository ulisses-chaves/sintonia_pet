package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import javax.xml.ws.RequestWrapper;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.models.Token;
import com.models.Usuario;
import com.models.UsuarioWrapper;
import com.repository.TokenRepository;
import com.repository.UsuarioRepository;
import com.service.ServicesFoto;

@RestController
@RequestMapping(path = "/usuario")
@CrossOrigin(origins = "*")

public class UsuarioController {

	@Autowired
	private UsuarioRepository repositorioUsuario;
	@Autowired
	private TokenRepository repositorioToken;

	@GetMapping(value = "/token/usar/{login}/{tokenValor}")
	public ResponseEntity<String> usarPremmium(@PathVariable("login") String login,
			@PathVariable("tokenValor") String tokenValor) {

		Usuario usuario = repositorioUsuario.findByLogin(login);

		if (usuario == null) {
			return new ResponseEntity<>("Usuário com esse login não existe", HttpStatus.BAD_REQUEST);

		}

		Token token = repositorioToken.findByLogin(login);

		if (token == null) {
			return new ResponseEntity<>("Usuário não possui um token", HttpStatus.BAD_REQUEST);

		}

		if (!token.getToken().equals(tokenValor)) {
			return new ResponseEntity<>("Não é o token gerado para o usuário", HttpStatus.BAD_REQUEST);
		}

		if (token.isUsado()) {
			return new ResponseEntity<>("Esse token já foi utilizado", HttpStatus.BAD_REQUEST);
		}

		token.setUsado(true);
		repositorioToken.delete(token);
		repositorioToken.save(token);

		usuario.setIsPremmium(true);

		repositorioUsuario.delete(usuario);
		repositorioUsuario.save(usuario);

		return new ResponseEntity<>("", HttpStatus.OK);

	}

	@GetMapping(value = "/token/{login}")
	public ResponseEntity<String> gerarPremmium(@PathVariable("login") String login) {
		String tokenPremium = new String();

		if (repositorioUsuario.findByLogin(login) == null) {
			return new ResponseEntity<>("Usuário com esse login não existe", HttpStatus.BAD_REQUEST);

		}

		if (repositorioToken.findByLogin(login) != null) {
			return new ResponseEntity<>("Usuário já possui um token", HttpStatus.BAD_REQUEST);

		}

		while (true) {
			for (int i = 0; i < 11; ++i) {
				tokenPremium += Long.toString(Math.round(Math.random()) * (9 - 1) + 1);
			}

			if (repositorioToken.findByToken(tokenPremium) == null)
				break;

			tokenPremium = new String();

		}

		repositorioToken.save(new Token(login, tokenPremium));

		return new ResponseEntity<>(tokenPremium, HttpStatus.OK);

	}

	@PostMapping(value = "/add")
	public @ResponseBody ResponseEntity<String>  add(@RequestBody UsuarioWrapper usuarioWrapper) {

		Usuario usuario = usuarioWrapper.getUsuario();
		
		  Usuario usuarioBusca =
		  repositorioUsuario.findByRgAndLoginAndCpf(((Usuario)usuario).getRg(),
		  ((Usuario)usuario).getLogin(), ((Usuario)usuario).getCpf());
		  
		  
		  
		  if(usuarioBusca != null) return new ResponseEntity<>("Usuário já existe",
		  HttpStatus.BAD_REQUEST);
		  
		  
		  try 
		  {
			  
			  ServicesFoto.saveFoto(usuarioWrapper.getImagem(), "fotos/usuarios/"+usuario.getLogin() + ".txt"); usuario.setCaminhoFoto("fotos/usuarios/"); }
		  
		  catch(Exception e) 
		  { 
			  return new ResponseEntity<>("Erro salvando a foto. Contate	o suporte", HttpStatus.BAD_REQUEST);
		  
		  }
		  
		  usuario.setIsPremmium(false); usuario.setIs_admin(false);
		  usuario.setIs_admin(false);
		  
		  repositorioUsuario.save(usuario);
		  
		  
		  return new ResponseEntity<>( HttpStatus.OK) ;
		 
	}

	@GetMapping(value = "/get/{login}")
	public @ResponseBody ResponseEntity<UsuarioWrapper> get(@PathVariable("login") String login) {
		Usuario usuarioBusca = repositorioUsuario.findByLogin(login);

		if (usuarioBusca == null)
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		;

		usuarioBusca.setSenha("");

		String foto = new String();
		try {
			foto = ServicesFoto.readFoto(usuarioBusca.getCaminhoFoto(), usuarioBusca.getLogin());

		} catch (Exception e) {

		}

		return new ResponseEntity<>(new UsuarioWrapper(foto, usuarioBusca), HttpStatus.OK);

	}

	@PutMapping(value = "/update")
	public @ResponseBody ResponseEntity<String> update(@RequestBody UsuarioWrapper usuarioWrapper) {

		Usuario usuario = usuarioWrapper.getUsuario();

		Usuario usuarioBusca = repositorioUsuario.findByRgAndLoginAndCpf(usuario.getRg(), usuario.getLogin(),
				usuario.getCpf());

		if (usuarioBusca == null)
			return new ResponseEntity<>("Não existe um usuário com os dados cadastrados", HttpStatus.BAD_REQUEST);
		

		try {
			ServicesFoto.saveFoto(usuarioWrapper.getImagem(), "fotos/usuarios/" + usuario.getLogin() + ".txt");
			usuario.setCaminhoFoto("fotos/usuarios/");
		} catch (Exception e) {
			return new ResponseEntity<>("Erro salvando a foto. Contate	o suporte", HttpStatus.BAD_REQUEST);

		}

		repositorioUsuario.delete(usuario);
		repositorioUsuario.save(usuario);

		return new ResponseEntity<>(HttpStatus.OK);

	}

}
