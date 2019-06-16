const PrincipalTemplate = `
    <div>
        <navbar></navbar>
            <div class="row m-0">
                <div class="col-lg-4 mt-4">
                    <h1 class="color-warning text-center mb-4" style="font-size: 47px; letter-spacing: -1px">Sintonia<span class="color-brown">Pet</span></h1>
                    <div class="card m-auto" style="width: 80%; background: #fdc536">
                        <h5 style="font-weight: 700" class="color-brown card-title text-center mt-4">Faça seu login e conheça nossos produtos</h5>
                        <div style="background-image: linear-gradient(to bottom , #fdc536, #fdad00);" class="card-body m-auto">
                             <form v-on:submit.prevent="login">
                                <div class="form-group">
                                    <label class="color-brown" for="inputLogin">Login</label>
                                    <input type="text" class="form-control" id="inputLogin" v-model="usuario.username" required>
                                </div>
                                <div class="form-group">
                                    <label class="color-brown" for="inputSenha">Senha</label>
                                    <input type="password" style="font-size: 9px" class="form-control" id="inputSenha" v-model="usuario.senha" required>
                                    <a style="font-size: 13px" class="card-link"  data-toggle="modal" data-target="#modalRecuperar" href="">Esqueceu a senha?</a>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="inputLembrar">
                                    <label class="form-check-label mb-0 color-brown" for="inputLembrar">Lembrar-me</label>
                                </div>
                                <div class="text-center">
                                    <button style="width: 120px" class="color-brown btn btn-light">Entrar</button>
                                </div>
                            </form>
                        </div>
                        <div style="background: white" class="card-footer text-muted p-1 pl-2">
                            <p class="m-0 color-brown">É novo por aqui? <a href="#/cadastro">Crie sua conta</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 p-0 d-none d-sm-flex h-100 mb-5 mt-4">
                    <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img style="object-fit: cover; border-radius: 5px" class="d-block w-100" src="public/img/carousel/img-carousel-1.jpeg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="container">
            <comoUsar></comoUsar>
            <hr class="container">
            <contato></contato>
            <rodape></rodape>
            <!-- MODAL -->
                <div class="modal fade" id="modalRecuperar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #f8f8f8">
                                <h5 class="modal-title" id="exampleModalLabel">Recuperar Senha</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form v-on:submit.prevent="recovery">
                                <div class="modal-body">
                                    <p>Não lembra sua senha? Podemos ajudá-lo!</p>
                                    <div class="form-group">
                                        <label for="inputModalLogin" class="col-form-label">Login:</label>
                                        <input type="text" class="form-control" id="inputModalLogin" v-model="lost.username" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputModalEmail" class="col-form-label">Email:</label>
                                        <input type="text" class="form-control" id="inputModalEmail" v-model="lost.email" required>
                                        <span class="ml-2" style="font-size: 12px">Uma nova senha será enviada para o seu email.</span>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-warning">Recuperar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`

export { PrincipalTemplate }