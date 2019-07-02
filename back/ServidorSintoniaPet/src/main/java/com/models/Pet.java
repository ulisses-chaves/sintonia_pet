package com.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pet")
public class Pet 
{
	
	@Id
	private String numero_rg;
	private String rg_dono;        
	private String nome;
	private int idade;
	private Date data_nascimento;
	private char sexo;
	private char castrado;
	private String cor_pelugem;
	private String porte;
	private String raca;
	private String caminho_foto;
	private Date data_exp;
	private String filiação;
	private float peso;
	private String naturalidade;
	
	@Override
	public boolean equals(Object pet)
	{
		return this.numero_rg.equals( ((Pet)pet).getNumero_rg());
	}
	
	public String getNumero_rg() 
	{
		return numero_rg;
	}
	
	public void setNumero_rg(String numero_rg)
	{
		this.numero_rg = numero_rg;
	}
	
	public String getRg_dono() 
	{
		return rg_dono;
	}
	
	public void setRg_dono(String rg_dono)
	{
		this.rg_dono = rg_dono;
	}
	
	public String getNome()
	{
		return nome;
	}
	
	public void setNome(String nome) 
	{
		this.nome = nome;
	}
	
	public int getIdade()
	{
		return idade;
	}
	
	public void setIdade(int idade)
	{
		this.idade = idade;
	}
	
	public Date getData_nascimento() 
	{
		return data_nascimento;
	}
	
	public void setData_nascimento(Date data_nascimento)
	{
		this.data_nascimento = data_nascimento;
		
	}
	
	public char getSexo() 
	{
		return sexo;
	}
	
	public void setSexo(char sexo) 
	{
		this.sexo = sexo;
	}
	
	public char getCastrado()
	{
		return castrado;
	}
	
	public void setCastrado(char castrado)
	{
		this.castrado = castrado;
	}
	
	public String getCor_pelugem()
	{
		return cor_pelugem;
	}
	
	public void setCor_pelugem(String cor_pelugem)
	{
		this.cor_pelugem = cor_pelugem;
	}
	
	public String getPorte() 
	{
		return porte;
	}
	
	public void setPorte(String porte)
	{
		this.porte = porte;
	}
	
	public String getRaca() 
	{
		return raca;
	}
	
	public void setRaca(String raca)
	{
		this.raca = raca;
	}
	
	public String getCaminho_foto() 
	{
		return caminho_foto;
	}
	
	public void setCaminho_foto(String caminho_foto) 
	{
	  	this.caminho_foto = caminho_foto;
	}

	public Date getData_exp() {
		return data_exp;
	}

	public void setData_exp(Date data_exp) {
		this.data_exp = data_exp;
	}

	public String getFiliação() {
		return filiação;
	}

	public void setFiliação(String filiação) {
		this.filiação = filiação;
	}

	public float getPeso() {
		return peso;
	}

	public void setPeso(float peso) {
		this.peso = peso;
	}

	public String getNaturalidade() {
		return naturalidade;
	}

	public void setNaturalidade(String naturalidade) {
		this.naturalidade = naturalidade;
	}
	 
}
