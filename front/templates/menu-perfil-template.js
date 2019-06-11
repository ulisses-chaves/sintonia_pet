const MenuPerfilTemplate = `
    <div class="container my-5">
        <div class="row mb-5">
            <div class="col-sm-6 text-center text-sm-right">
                <img src="public/img/perfil.png" alt="">
            </div>
            <div  style="vertical-align: middle" class="col-sm-6 text-center text-sm-left pl-0 mt-3">
                <h1>Perfil</h1>
            </div>
        </div>
        <div class="card m-auto"  style="width: 85%; background: #fdc536">
            <div class="row">
                <div class="col-sm-2 text-center text-sm-left">
                    <img class="m-3" src="public/img/perfil.png" alt="">
                </div>
                <div class="m-auto col-sm-10">
                    <h2 class="text-center text-sm-left">Edite ou atualize seus dados</h2>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="card-body" style="background-image: linear-gradient(to bottom , #fdc536, #fdad00);">
                <form action="">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label style="color: #7e4732" for="login">Login</label>
                                <input type="text" class="form-control" id="login" required>
                            </div>
                        </div>
                        <div class="col-sm-6">   
                            <div class="form-group">
                                <label style="color: #7e4732" for="senha">Senha</label>
                                <input type="password" class="form-control" id="senha" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label style="color: #7e4732" for="email">Email</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label style="color: #7e4732" for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" required>
                            </div>
                        </div>
                        <div class="col-sm-6">   
                            <div class="form-group">
                                <label style="color: #7e4732" for="sobrenome">Sobrenome</label>
                                <input type="password" class="form-control" id="sobrenome" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inlineFormCustomSelect">Sexo</label>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Escolha...</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Feminino</option>
                                    <option value="3">Outro</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">   
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inlineFormCustomSelect">Estado Civil</label>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Escolha...</option>
                                    <option value="1">Solteiro(a)</option>
                                    <option value="2">Casado(a)</option>
                                    <option value="3">Outro</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label style="color: #7e4732" for="data">Data de Nascimento</label>
                                <input type="text" class="form-control" id="data" required>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label style="color: #7e4732" for="telefone">Telefone</label>
                                <input type="text" class="form-control" id="telefone" required>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label style="color: #7e4732" for="celular">Celular</label>
                                <input type="text" class="form-control" id="celular" required>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label style="color: #7e4732" for="cep">CEP</label>
                                <input type="text" class="form-control" id="cep" required>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label style="color: #7e4732" for="pais">País</label>
                                <input type="text" class="form-control" id="pais" required>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label style="color: #7e4732" for="bairro">Cidade</label>
                                <input type="text" class="form-control" id="bairro" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label style="color: #7e4732" for="rua">Rua</label>
                                <input type="text" class="form-control" id="rua" required>
                            </div>
                        </div>
                        <div class="col sm-6">
                            <div class="form-group">
                                <label style="color: #7e4732" for="cidade">Cidade</label>
                                <input type="text" class="form-control" id="cidade" required>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div>
                        <button class="mt-2 btn btn-light">Atualizar</button>
                        <button class="mt-2 mx-1 btn btn-light">Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`

export { MenuPerfilTemplate }