const LoginTemplate = `
    <div>
        <div class="container">
            <div class="row">
                <div class="col text-center mt-4">
                    <a href="#/"><img style="height: 100px;" src="public/img/logo-titulo.png" alt=""></a>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6 text-center text-md-left mt-4">
                    <div class="d-none d-sm-block">
                        <h1 style="font-size: 50px;" class="color-warning">Os melhores produtos</h1>
                        <p style="font-size: 50px;" class="color-warning">para os seus pets!</p>
                    </div>
                    <h2 class="pt-3" style="font-size: 25px; color: #c9c9c9">Faça seu login e continue usando nossos serviços ou <a class="color-warning link" href="#/">volte</a> para a página principal</h2>
                    <h2 class="pt-3" style="font-size: 25px; color: #c9c9c9"> Caso não tenha conta, <a class="color-warning link" href="#/cadastro">cadastre-se</a> agora mesmo!</h2>
                </div>
                <div class="col-lg-6">
                    <form action="" class="mt-4">
                        <div class="form-group">
                            <input style="height: 70px" type="text" class="form-control" id="login" placeholder="Login" required>
                        </div>
                        <div class="form-group mt-4">
                            <input style="height: 70px" type="password" class="form-control" id="senha" placeholder="Senha" required>
                            <a href="" class="color-warning link" data-toggle="modal" data-target="#modalRecuperar">Esqueci minha senha</a>
                        </div>
                        <div class="form-group">
                            <input class="form-check-input ml-0" type="checkbox" value="" id="invalidCheck" required>
                            <label class="form-check-label ml-4" style="color: #c9c9c9" for="invalidCheck">Lembra-me</label>
                        </div>
                        <div class="text-center">
                            <button style="width: 250px; height: 50px;" type="submit" class="mt-1 btn btn-warning">Login</button>
                        </div>
                    </form>
                    <div class="text-center">
                        <button style="width: 255px; height: 45px; background-color: #3b5998; color: white" type="submit" class="mt-3 btn btn-light">
                            <img style="width: 37px" src="public/img/facebook.png" alt=""> Entrar com o Facebook
                        </button>
                        <button style="width: 255px; height: 45px; background-color: #DD4B39; color: white" type="submit" class="mt-3 btn btn-light">
                            <img style="width: 37px" src="public/img/google-plus.png" alt=""> Entrar com a conta Google
                        </button>
                    </div>
                    <div class="my-4 text-right">
                        <ul style="list-style: none" class="m-0">
                            <a href=""><li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/facebook.png" alt=""></li></a>
                            <a href=""><li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/gmail.png" alt=""></li></a>
                            <a href=""><li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/instagram.png" alt=""></li></a>
                            <li class="d-inline-block mx-1 text-right" style="color: #c9c9c9; font-size: 14px"><span>&copy; Sintonia Pet 2019</span> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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
                    <form action="">
                        <div class="modal-body">
                            <p>Não lembra sua senha? Podemos ajudá-lo!</p>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Login:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Email:</label>
                                <input type="text" class="form-control" id="recipient-name">
                                <span class="ml-2" style="font-size: 12px">Uma nova senha será enviada para o seu email.</span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning">Recuperar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
`

export { LoginTemplate }