const LoginTemplate = `
    <div>
        <navbar></navbar>
        <div class="row m-0">
            <div class="col-lg-4 mt-3">
                <div class="card m-auto" style="width: 80%; background: #fdc536">
                    <h5 style="color: #7e4732; font-weight: 700" class="card-title text-center mt-4">Faça seu login e conheça nossos produtos</h5>
                    <div style="background-image: linear-gradient(to bottom , #fdc536, #fdad00);" class="card-body m-auto">
                        <form action="">
                            <div class="form-group">
                                <label style="color: #7e4732" for="pin">PIN</label>
                                <input type="text" class="form-control" id="pin" required>
                            </div>
                            <div class="form-group">
                                <label style="color: #7e4732" for="senha">Senha</label>
                                <input type="password" class="form-control" id="senha" required>
                                <a style="font-size: 13px" class="card-link" href="">Esqueceu a senha?</a>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label style="color: #7e4732" class="form-check-label mb-0" for="exampleCheck1">Lembrar o PIN</label>
                            </div>
                            <div class="text-center">
                                <button style="color: #7e4732; width: 120px" type="submit" class="btn btn-light" hre><a href="">Entrar</a></button>
                            </div>
                        </form>
                    </div>
                    <div style="background: white" class="card-footer text-muted p-1 pl-2">
                        <p style="color: #7e4732" class="m-0">É novo por aqui? <a href="#/cadastro">Crie sua conta</a> informando seu PIN</p>
                    </div>
                </div>
                <div class="mt-4">
                    <ul style="list-style: none" class="m-0">
                        <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/facebook.png" alt=""></li>
                        <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/gmail.png" alt=""></li>
                        <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/instagram.png" alt=""></li>
                        <li class="d-inline-block mx-1 text-right" style="color: #7e4732; font-size: 14px"><span>&copy; Sintonia Pet 2019</span> </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-8 p-0">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="imagem1" style="object-fit: cover;" class="d-block w-100" src="public/img/cachorro-img.png" alt="Primeiro Slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style="font-size: 80px">Título da Imagem</h2>
                                <p class="h4">Conteúdo ou Descrição da Imagem</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img id="imagem2" style=" object-fit: cover;" class="d-block w-100" src="public/img/gato-main.png" alt="Segundo Slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style="font-size: 80px">Título da Imagem</h2>
                                <p class="h4">Conteúdo ou Descrição da Imagem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

export { LoginTemplate }