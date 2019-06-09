const CadastroTemplate = `
    <div style="height: 100vh; background: url(public/img/dogg60.jpg) no-repeat center top fixed; background-size: cover">
        <div class="container">
            <div class="row">
                <div class="col text-center mt-4">
                    <img style="height: 100px;" src="public/img/logo-titulo.png" alt="">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6 text-center text-md-left mt-4">
                    <h1 style="font-size: 50px; color: #ffc107">Os melhores produtos</h1>
                    <p style="font-size: 50px; color: #ffc107">para os seus pets!</p>
                    <h2 class="pt-3" style="font-size: 25px; color: #c9c9c9">Se cadastre e fique por dentro das novidades.</h2>
                </div>
                <div class="col-lg-6">
                    <form action="" class="mt-4 text-center">
                        <div class="form-group">
                            <input style="height: 50px" type="text" class="form-control" id="nome" placeholder="Nome Completo" required>
                        </div>
                        <div class="form-group">
                            <input style="height: 50px" type="text" class="form-control" id="pin" placeholder="PIN" required>
                        </div>
                        <div class="form-group">
                            <input style="height: 50px" type="password" class="form-control" id="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <input style="height: 50px" type="password" class="form-control" id="senha" placeholder="Senha" required>
                        </div>
                        <p style="color: white; font-size: 11px">
                            Clicando em “Criar conta”, você aceita nossos <a class="card-link" href="">Termos de Serviço </a> e <a class="card-link ml-0" href=""> Declaração de Privacidade</a>.
                        </p>
                        <button style="width: 250px; height: 50px;" type="submit" class="mt-1 btn btn-warning">Criar conta</button> <!--entrar com google/face?-->
                        <a  href="#/" style="width: 250px; height: 50px; padding-top: 2%;"  class="mt-1 btn btn-warning " >Voltar</a>
                    </form>
                    <div class="text-center">
                        <button style="width: 255px; height: 45px; background-color: #3b5998; color: white" type="submit" class="mt-3 btn btn-warning">
                            <img style="width: 37px" src="public/img/facebook.png" alt=""> Entrar com o Facebook
                        </button>
                        <button style="width: 255px; height: 45px; background-color: #DD4B39; color: white" type="submit" class="mt-3 btn btn-warning">
                            <img style="width: 37px" src="public/img/google-plus.png" alt=""> Entrar com a conta Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

export { CadastroTemplate }