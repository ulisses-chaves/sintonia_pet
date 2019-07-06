package com.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>
{
	Usuario findByLogin(String login);
	Usuario findByRgAndLoginAndCpf(String rg, String login, String cpf);
	Usuario findByRg(String rg);
}
