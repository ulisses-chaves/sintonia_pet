package com.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>
{
	Usuario findByLogin(String login);
	Usuario findByRgAndLoginAndCpfAndEmail(String rg, String login, String cpf, String email);
	Usuario findByRg(String rg);
	Usuario findByCpf(String cpf);
	Usuario findByEmail(String email);
}
