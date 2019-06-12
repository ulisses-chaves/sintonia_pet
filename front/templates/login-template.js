const LoginTemplate = `
    <div style="height: 100vh; background: url(public/img/dogg60.jpg) no-repeat center top fixed; background-attachment: fixed; background-size: cover;">
        <div class="container">
            <div class="row">
                <div class="col text-center mt-4">
                    <img style="height: 100px;" src="public/img/logo-titulo.png" alt="">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6 text-center text-md-left mt-4">
                    <div class="d-none d-sm-block">
                        <h1 style="font-size: 50px;" class="color-warning">Os melhores produtos</h1>
                        <p style="font-size: 50px;" class="color-warning">para os seus pets!</p>
                    </div>
                    <h2 class="pt-3" style="font-size: 25px; color: #c9c9c9">Faça seu login e continue usando nossos serviços ou <a href="#/">volte</a> para a página principal</h2>
                </div>
                <div class="col-lg-6">
                    <form action="" class="mt-4">
                        <div class="form-group">
                            <input style="height: 70px" type="text" class="form-control" id="login" placeholder="Login" required>
                        </div>
                        <div class="form-group mt-4">
                            <input style="height: 70px" type="password" class="form-control" id="senha" placeholder="Senha" required>
                            <a href="" class="card-link">Esqueci minha senha</a>
                        </div>
                        <div class="form-group">
                            <input class="form-check-input ml-0" type="checkbox" value="" id="invalidCheck" required>
                            <label class="form-check-label ml-4" style="color: #c9c9c9" for="invalidCheck">Lembra-me</label>
                        </div>
                        <!--<a  href="#/" style="width: 250px; height: 50px; padding-top: 2%;"  class="mt-1 btn btn-warning " >Voltar</a>-->
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
                    <div class="mt-4 text-right">
                        <ul style="list-style: none" class="m-0">
                            <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/facebook.png" alt=""></li>
                            <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/gmail.png" alt=""></li>
                            <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/instagram.png" alt=""></li>
                            <li class="d-inline-block mx-1 text-right" style="color: #c9c9c9; font-size: 14px"><span>&copy; Sintonia Pet 2019</span> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

export { LoginTemplate }