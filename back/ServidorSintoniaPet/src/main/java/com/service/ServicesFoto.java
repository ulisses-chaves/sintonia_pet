package com.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class ServicesFoto
{
	private static String caminho = "fotos/";
	
	
	public static String saveFoto(String foto, String caminho) throws IOException
	{
		
		FileWriter writer = new FileWriter(caminho);
		BufferedWriter bWriter = new BufferedWriter(writer);		
		deleteFoto(caminho);
		
		
		bWriter.write(foto);
		
		
		bWriter.close();
		writer.close();
		
		return caminho;
	}
	
	public static void deleteFoto(String caminho)
	{
		File file = new File(caminho);
		file.delete();
		
	}
	
	public static String readFoto(String caminho, String nome) throws IOException
	{
		String foto = new String();
		FileReader reader = new FileReader(caminho);
		
		BufferedReader bReader = new BufferedReader(reader);
		foto = bReader.readLine();
		
		
		return foto;
	}
	
}
