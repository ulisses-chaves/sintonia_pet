package com.models;

public class PetWrapper 
{
	
	private String imagem;
	private Pet pet;

	public PetWrapper()
	{
		imagem = new String();
		pet = new Pet();
	}

	public PetWrapper(String imagem, Pet pet)
	{
		this.imagem = imagem;
		this.pet = pet;
	}
		
	public String getImagem() {
		return imagem;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	public Pet getPet() {
		return pet;
	}
	public void setPet(Pet pet) {
		this.pet = pet;
	}
	
	

}
