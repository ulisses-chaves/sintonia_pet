package com.models;


public class UsuarioWrapper {
	private String imagem;
	private Usuario usuario;

	
	public UsuarioWrapper(String imagem, Usuario usuario)
	{
		this.imagem = imagem;
		this.usuario = usuario;
	}
	
	public UsuarioWrapper()
	{
		imagem = "";
		usuario = new Usuario();
	}
	
	public String getImagem() {
		return imagem;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	
}
