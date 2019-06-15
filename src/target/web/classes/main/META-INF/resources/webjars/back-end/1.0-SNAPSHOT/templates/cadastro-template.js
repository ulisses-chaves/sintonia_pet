const CadastroTemplate = `
    <div style="background-image: linear-gradient(to bottom, #ffffff, #dddcdc);">
        <navbar></navbar>
        <div class="container">
        <div class="my-5 text-center">
            <h1>Estamos ansiosos para receber você no <a href="#/" class="link color-warning">Sintonia Pet</a></h1>
            <h2 class="color-brown">Preencha os campos abaixo para se cadastrar!</h2>
        </div>
        <form action="">
            <div class="row mt-5">
                <div class="col-sm-6">
                    <h4 class="mb-4">Suas informações pessoais</h4>
                    <div class="form-group row">
                        <label for="nome" class="col-sm-2 col-form-label">Nome</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="nome" placeholder="Primeiro Nome">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="sobrenome" class="col-sm-2 col-form-label">Sobrenome</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="sobrenome" placeholder="Sobrenome">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="telefone" class="col-sm-2 col-form-label">Telefone</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="telefone" placeholder="DDD + Telefone">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="celular" class="col-sm-2 col-form-label">Celular</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="celular" placeholder="DDD + Celular">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSexo" class="col-sm-2 col-form-label">Sexo</label>
                        <div class="col-sm-10">
                            <select id="inputSexo" class="form-control">
                                <option selected>Escolher...</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                            <label for="imputEstadoCivil" class="col-sm-2 col-form-label">Estado Civil</label>
                            <div class="col-sm-10">
                                <select id="inputEstadoCivil" class="form-control">
                                    <option selected>Escolher...</option>
                                    <option value="solteiro">Solteiro(a)</option>
                                    <option value="casado">Casado(a)</option>
                                </select>
                            </div>
                        </div>
                </div>
                <div class="col-sm-6">
                    <div class="row mt-5">
                        <div class="col-sm-7 mt-sm-5 text-center text-sm-right">
                            <h3>Aqui você poderá cadastrar seus pets, gerenciá-los e muito mais!</h3>
                            <hr style="width: 40%; background-color: #8b513a" class="pt-1 mr-0">
                        </div>
                        <div class="col-sm-5 mt-5 text-center text-sm-right">
                            <img style="width: 220px" src="public/img/cachorro-marrom-esquerda.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-6">
                    <div class="row mt-5">
                        <div class="col-sm-5 d-none d-sm-block">
                            <img style="width: 180px" src="public/img/pássaro-vermelho-direita.png" alt="">
                        </div>
                        <div class="col-sm-7 mt-5">
                            <h5>Informando sua localização em breve você poderá fazer compras no <a href="#/" class="link color-warning">Sintonia Pet</a>!</h5>
                            <hr style="width: 40%;" class="pt-1 bg-warning ml-0">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h4 class="mb-4">Sua localização</h4>
                    <div class="form-group row">
                        <label for="inputCEP" class="col-sm-2 col-form-label">CEP</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCEP" placeholder="CEP (Apenas números)">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPais" class="col-sm-2 col-form-label">País</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPais" placeholder="País">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCidade" class="col-sm-2 col-form-label">Cidade</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCidade" placeholder="Cidade">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputBairro" class="col-sm-2 col-form-label">Bairro</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputBairro" placeholder="Bairro">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputRua" class="col-sm-2 col-form-label">Rua</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputRua" placeholder="Rua">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-3 my-5 text-center text-sm-left ">
                    <img style="width: 150px" class="mt-sm-5" src="public/img/gato-laranja-direita.png" alt="">
                </div>
                <div class="col-sm-6">
                    <h4 class="mb-4">Só faltam os dados para login</h4>
                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail" placeholder="Seu email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputLogin" class="col-sm-2 col-form-label">Login</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputLogin" placeholder="Defina seu login">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSenha" class="col-sm-2 col-form-label">Senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputSenha" placeholder="Senha com letras e números">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputConSenha" class="col-sm-2 col-form-label">Repita a senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputConSenha" placeholder="Confirme sua senha">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-warning"> Finalizar o Cadastro</button>
                    </div>
                </div>
                <div class="col-sm-3 mt-5 d-none d-sm-block">
                    <img style="width: 180px" class="mt-sm-4 ml-sm-5" src="public/img/cachorro-laranja-esquerda.png" alt="">
                </div>
            </div>
        </form>
    </div>
    <rodape></rodape>
    </div>
`

export { CadastroTemplate }