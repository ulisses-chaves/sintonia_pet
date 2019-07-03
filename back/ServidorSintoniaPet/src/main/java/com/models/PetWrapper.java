package com.models;

public class PetWrapper 
{
	
	private String foto;
	private Pet pet;
	
	public PetWrapper()
	{
		foto = "";
		pet = new Pet();
	}
	
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	public Pet getPet() {
		return pet;
	}
	public void setPet(Pet pet) {
		this.pet = pet;
	}
	
	

}
