package com.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class ServicesFoto
{
	private static String  formato = ".txt";
	
	public static String saveFoto(String foto, String caminho) throws IOException
	{
		deleteFoto(caminho +formato);

		FileWriter writer = new FileWriter(caminho + formato) ;
		BufferedWriter bWriter = new BufferedWriter(writer);		
		

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
		FileReader reader = new FileReader(caminho + nome + formato);
		
		BufferedReader bReader = new BufferedReader(reader);
		foto = bReader.readLine();
		
		bReader.close();
		return foto;
	}
	
}
