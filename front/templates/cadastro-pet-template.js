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
            <form v-on:submit.prevent="cadastro">
                <div class="row mt-5">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputNome">Nome</label>
                            <input type="text" class="form-control" id="inputNome" v-model="pet.nome" required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputPelugem">Cor da Pelugem</label>
                            <input type="text" class="form-control" id="inputPelugem" v-model="pet.pelugem" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputRaca">Espécie/Raça</label>
                            <input type="text" class="form-control" id="inputRaca" v-model="pet.raca" required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputIdade">Idade</label>
                            <input type="text" class="form-control" id="inputIdade" v-model="pet.idade" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inputSexo">Sexo</label>
                                <select class="custom-select mr-sm-2" id="inputSexo" v-model="pet.sexo">
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
                                <label class="mr-sm-2" for="inputPorte">Porte</label>
                                <select class="custom-select mr-sm-2" id="inputPorte" v-model="pet.porte">
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
                            <label for="inputData">Data de Nascimento</label>
                            <input type="date" class="form-control" id="inputData" v-model="pet.data" required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group mt-4 text-right text-sm-center">
                            <label class="mr-4" for="inputFoto">Escolha uma foto</label>
                            <input type="file" accept="image/png, image/jpeg" v-on:change="fotoSelecionada">
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