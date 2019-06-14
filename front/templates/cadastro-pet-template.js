const CadastroPetTemplate = `
    <div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-sm-4 m-auto">
                        <hr style="width: 40%;" class="pt-1 bg-warning mr-0">
                        <h1 class="text-center color-brown">Cadastre seu Pet</h1>
                        <hr style="width: 40%;" class="pt-1 bg-warning ml-0">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col mt-5">
                    <h3 class="text-center">Preencha os dados para o cadastro</h3>
                    <hr>
                </div>
            </div>
            <form action="">
                    <div class="row mt-5">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" required>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="pelugem">Cor da Pelugem</label>
                                <input type="text" class="form-control" id="pelugem" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="raca">Espécie/Raça</label>
                                <input type="text" class="form-control" id="raca" required>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="idade">Idade</label>
                                <input type="text" class="form-control" id="idade" required>
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
                                        <option value="1">Macho</option>
                                        <option value="2">Fêmea</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                    <label class="mr-sm-2" for="inlineFormCustomSelect">Porte</label>
                                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option selected>Escolha...</option>
                                        <option value="1">Pequeno</option>
                                        <option value="2">Médio</option>
                                        <option value="3">Grande</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="data">Data de Nascimento</label>
                                <input type="text" class="form-control" id="data" required>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group mt-4 text-right text-sm-center">
                                <a href="" class="card-link">Escolher uma foto <img style="width: 18px" src="public/img/download.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <div class="row my-4">
                        <div class="col-sm-5 text-sm-right text-center">
                            <img src="public/img/gato-cinza-sentado.png" alt="">
                        </div>
                        <div class="col-sm-2 mt-sm-5 text-center">
                            <button class="mt-4 btn btn-warning">Cadastrar Pet</button>
                        </div>
                        <div class="col-5 mt-3 text-left d-none d-sm-block">
                            <img style="width: 115px" src="public/img/cachorro-esquerda.png" alt="">
                        </div>
                    </div>
                </form>
        </div>
    </div>
`

export { CadastroPetTemplate }