package com.models;

public class PetWrapper 
{
	
	private String imagem;
	private Pet pet;
	
	public PetWrapper()
	{
		imagem = "";
		pet = new Pet();
	}
	
	public String getFoto() {
		return imagem;
	}
	public void setFoto(String imagem) {
		this.imagem = imagem;
	}
	public Pet getPet() {
		return pet;
	}
	public void setPet(Pet pet) {
		this.pet = pet;
	}
	
	

}
