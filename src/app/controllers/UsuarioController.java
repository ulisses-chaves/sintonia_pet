package controllers;

import java.sql.Connection;


import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import play.api.mvc.*;
import play.api.data.*;

public class UsuarioController extends Controller
{
	public Result login()
	{
		return null;
			
	}
	
	public Result getAll()
	{
		
		try
		{
		DriverManager.getConnection("jdbc:mysql://localhost:3306/sintonia_pet", "root", "87868760");
		
		
		return ok(Json.toJson("E"));
		}
		catch(Exception e )
		{
			
		}
		return ok(Json.toJson("Eaee"));
		
	}
	
}
