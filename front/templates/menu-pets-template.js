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
                    <li>
                        <div class="card">
                            <img class="card-img-top" src="public/img/ralf.jpg" alt="">
                            <div class="card-body">
                                <h4 class="card-title">Ralf</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Beagle</h6>
                                <p class="card-text">Alguma frase?</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Idade:</strong> 2 anos</li>
                                <li class="list-group-item"><strong>Sexo:</strong> Macho</li>
                            </ul>
                            <div class="card-footer text-muted">
                                <ul class="p-0">
                                    <li class="d-inline-block">
                                        <a data-toggle="modal" data-target="#rg1" class="card-link" href="">
                                            <ul class="p-0">
                                                <li class="d-inline"><img class="m-0 p-0" src="public/img/rg.png" alt=""></li>
                                                <li class="d-inline">RG</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li class="d-inline-block">
                                        <a class="card-link" href="">
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
                    <li class="mt-4">
                        <div class="card">
                            <img class="card-img-top" src="public/img/lisa.jpg" alt="">
                            <div class="card-body">
                                <h4 class="card-title">Lisa</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Persa</h6>
                                <p class="card-text">Alguma frase?</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Idade: 4 anos</li>
                                <li class="list-group-item">Sexo: Fêmea</li>
                            </ul>
                            <div class="card-footer text-muted">
                                <ul class="p-0">
                                    <li class="d-inline-block">
                                        <a data-toggle="modal" data-target="#rg2" class="card-link" href="">
                                            <ul class="p-0">
                                                <li class="d-inline"><img class="m-0 p-0" src="public/img/rg.png" alt=""></li>
                                                <li class="d-inline">RG</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li class="d-inline-block">
                                        <a class="card-link" href="">
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
                </ul>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="rg1" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Lorem ipsum dolor</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <!-- <span>x</span> -->
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col text-center">
                            <img src="public/img/rg1.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="rg2" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <!-- <span>x</span> -->
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col text-center">
                            <img src="public/img/rg2.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
`

export { MenuPetsTemplate }