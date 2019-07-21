package com.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.repository.PetRepository;
import com.repository.UsuarioRepository;
import com.service.ServicesFoto;

import org.springframework.beans.factory.annotation.Autowired;
import com.models.Pet;
import java.util.List;
import org.springframework.ui.Model;
import com.models.Usuario;

@Controller
public class PetCodeController 
{
    
	@Autowired
	private PetRepository pets;
	@Autowired
	private UsuarioRepository usuarios;

    @RequestMapping(method = RequestMethod.GET, value = "/pagina/pet/{numero_rg}")
    public String petPage( @PathVariable("numero_rg")String numero_rg, Model model) 
    {   
        Pet pet = new Pet();
        pet.setNumero_rg(numero_rg);

        List<Pet> allPet = pets.findAll();

        if(!allPet.contains(pet))
            return "error";

        Pet petArray = allPet.get(allPet.indexOf(pet));

        Usuario usuario = usuarios.findByRg(petArray.getRg_dono());

        if(usuario == null)
            return "error";

        
        if(!usuario.getPets().contains(petArray))
            return "error";

        model.addAttribute("nome", petArray.getNome());
        model.addAttribute("raca", petArray.getRaca());
        model.addAttribute("data_nascimento", petArray.getData_nascimento());
        model.addAttribute("peso", petArray.getPeso());
        model.addAttribute("idade", petArray.getIdade());
        model.addAttribute("sexo", petArray.getSexo());
        model.addAttribute("cor_pelugem", petArray.getCor_pelugem());
        model.addAttribute("dono:", usuario.getNome());
        model.addAttribute("numero_rg", petArray.getRg_dono());
        model.addAttribute("numero_telefone", usuario.getNumeroTelefone());
        model.addAttribute("cep", usuario.getCep());
        model.addAttribute("estado", usuario.getUf());
        model.addAttribute("cidade", usuario.getCidade());
        model.addAttribute("bairro", usuario.getBairro());
        model.addAttribute("endereco", usuario.getRua());









		return "pet";
    }
}