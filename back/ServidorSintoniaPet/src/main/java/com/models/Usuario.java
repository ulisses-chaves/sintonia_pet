 	package com.models;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="usuario")
public class Usuario  
{
	
	private String login;
	
	private String senha;
	
	
	private String nome;
	
	private String sobrenome;
	
	private String cpf;
	
	@Id
	private String rg;
		
	
	private Date  data_nascimento;
	
    
	private char sexo;
	
    
	private char estado_civil;
	
    
	private String rua;
	
    
	private String bairro;
	
    
	private String cidade;
	
    
	private String cep;
	

	private String pais;
	
    
	private String numero_telefone;
	
    
	private String numero_fixo;
	    
	private String email;
	
	private String caminho_foto;

	
	private Boolean is_admin;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Pet> pets;
	
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

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public Date getData() {
		return data_nascimento;
	}

	public void setData(Date data) {
		this.data_nascimento = data;
	}

	public char getSexo() {
		return sexo;
	}

	public void setSexo(char sexo) {
		this.sexo = sexo;
	}

	public char getEstadoCivil() {
		return estado_civil;
	}

	public void setEstadoCivil(char estadoCivil) {
		this.estado_civil = estadoCivil;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getNumeroTelefone() {
		return numero_telefone;
	}

	public void setNumeroTelefone(String numeroTelefone) {
		this.numero_telefone = numeroTelefone;
	}

	public String getNumeroFixo() {
		return numero_fixo;
	}

	public void setNumeroFixo(String numeroFixo) {
		this.numero_fixo = numeroFixo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCaminhoFoto() {
		return caminho_foto;
	}

	public void setCaminhoFoto(String caminhoFoto) {
		this.caminho_foto = caminhoFoto;
	}
	
	public char getEstado_civil() {
		return estado_civil;
	}

	public void setEstado_civil(char estado_civil) {
		this.estado_civil = estado_civil;
	}

	public String getNumero_telefone() {
		return numero_telefone;
	}

	public void setNumero_telefone(String numero_telefone) {
		this.numero_telefone = numero_telefone;
	}

	public String getNumero_fixo() {
		return numero_fixo;
	}

	public void setNumero_fixo(String numero_fixo) {
		this.numero_fixo = numero_fixo;
	}

	public String getCaminho_foto() {
		return caminho_foto;
	}

	public void setCaminho_foto(String caminho_foto) {
		this.caminho_foto = caminho_foto;
	}

	public Boolean isAdmin() {
		return is_admin;
	}

	public void setAdmin(Boolean isAdmin) {
		this.is_admin = isAdmin;
	}

	public Date getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(Date data_nascimento) {
		this.data_nascimento = data_nascimento;
	}

	public Boolean getIs_admin() {
		return is_admin;
	}

	public void setIs_admin(Boolean is_admin) {
		this.is_admin = is_admin;
	}

	public List<Pet> getPets() {
		return pets;
	}

	public void setPets(List<Pet> pets) {
		this.pets = pets;
	}


    
    
    
}
