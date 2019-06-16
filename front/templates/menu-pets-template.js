const MenuPetsTemplate = `
    <div>
        <div class="container mt-4">
        <div class="row">
            <div class="col-sm-6 text-center text-sm-right">
                <img src="public/img/cat.png" alt="">
            </div>
            <div class="col-sm-6 text-center text-sm-left pl-0 mt-3">
                <h1>Pets</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-9 m-auto">
                <ul style="list-style: none">
                    <li class="mb-3">
                        <a v-on:click.stop.prevent="emitClick('telaCadastroPets')" style="color: black" href="">
                            <img style="width: 25px" src="public/img/plus.png" alt="">
                            <span style="vertical-align: middle">Adicionar Pet</span>
                        </a>
                    </li>
                    <li>
                        <div class="card">
                            <img class="card-img-top" src="public/img/ralf.jpg" alt="">
                            <div class="card-body">
                                <h4 class="card-title">Ralf</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Beagle</h6>
                                <p class="card-text">Alguma frase?</p>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                        <button class="btn btn-link card-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Características do Pet
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><strong>Idade:</strong> 2 anos</li>
                                                <li class="list-group-item"><strong>Sexo:</strong> Macho</li>
                                                <li class="list-group-item"><strong>Porte:</strong> Pequeno</li>
                                                <li class="list-group-item"><strong>Data de Nascimento:</strong> 12/01/2019</li>
                                                <li class="list-group-item"><strong>Cor da Pelugem:</strong> Branca e Marrom</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                        <button class="btn btn-link card-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Informações do Cadastro
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><strong>Número do RG:</strong> 123456789</li>
                                                <li class="list-group-item"><strong>Cadastro:</strong> 123</li>
                                                <li class="list-group-item"><strong>QR code ??:</strong> imagem</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-muted">
                                <ul class="p-0">
                                    <li class="d-inline-block">
                                        <a data-toggle="modal" data-target="#rg" class="card-link" href="">
                                            <ul class="p-0">
                                                <li class="d-inline"><img class="m-0 p-0" style="width: 64px" src="public/img/rg.png" alt=""></li>
                                                <li class="d-inline">RG</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li class="d-inline-block">
                                        <a  data-toggle="modal" data-target="#edit" class="card-link" href="">
                                            <ul class="p-0">
                                                <li class="d-inline"><img style="width: 43px" class="m-0 p-0" src="public/img/pen.png" alt=""></li>
                                                <li class="d-inline">Editar</li>
                                            </ul>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="mt-5 text-center">
                        <a v-on:click.stop.prevent="emitClick('telaCadastroPets')" href="" class="card-link">
                            <img style="width: 128px" src="public/img/plus.png" alt="">
                            <p style="font-size: 30px; color: black" class="my-2">Adicionar Pet</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="rg" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">RG Pet</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div id="minhaImagem" class="col text-center">
                            <img style="width: 70%" src="public/img/rg1.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="modal-footer m-auto">
                    <ul>
                        <li class="d-inline-block mx-2">
                            <a v-on:click.stop.prevent="imprimirRG" href="">
                                <img style="width: 25px" src="public/img/printer.png" alt="Impressora">
                                Imprimir RG
                            </a>
                        </li>
                        <li class="d-inline-block mx-2">
                            <a href="">
                                <img style="width: 25px" src="public/img/sendEmail.png" alt="email">
                                Enviar para o email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="edit" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Editar Dados do Pet</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="nome">Nome</label>
                                    <input type="text" class="form-control" id="nome" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="cadastro">Cadastro</label>
                                    <input type="text" class="form-control" id="cadastro" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="raca">Espécie/Raça</label>
                                    <input type="text" class="form-control" id="raca" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="idade">Idade</label>
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
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="data">Data de Nascimento</label>
                                    <input type="text" class="form-control" id="data" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="pelugem">Cor da Pelugem</label>
                                    <input type="text" class="form-control" id="pelugem" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="nrRG">Número do RG</label>
                                    <input type="text" class="form-control" id="nrRG" required>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-4 text-sm-right text-center">
                                <div class="form-group mt-3">
                                    <a href="" class="card-link">Mudar Foto do Pet <img style="width: 18px" src="public/img/download.png" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button style="color: #7e4732" type="button" class="btn btn-warning">Salvar mudanças</button>
                </div>
            </div>
        </div>
    </div>
    </div>
`

export { MenuPetsTemplate }