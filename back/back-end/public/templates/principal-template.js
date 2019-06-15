const PrincipalTemplate = `
    <div> <!--style="background-image: linear-gradient(to bottom, #ffffff, #dddcdc);"-->
        <navbar></navbar>
            <div class="row m-0">
                <div class="col-lg-4 mt-4">
                    <h1 class="color-warning text-center" style="font-size: 47px">Sintonia<span class="color-brown">Pet</span></h1>
                    <div class="row mt-5">
                        <div class="col-4 m-auto">
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="public/img/cachorro-perfil.png" alt="Slide1">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="public/img/gato-perfil.png" alt="Slide2">
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="color-brown mt-3">O melhor site de gerenciamento de pets que você poderá encontrar!</h3>
                    <h4 class="mt-5 text-right">
                        Faça <a class="card-link" href="#/login">login</a> e usufrua dos nossos serviços gratuitos. Caso não tenha conta, <a class="card-link m-0" href="#/cadastro">cadastre-se</a> agora mesmo!
                    </h4>
                </div>
                <div class="col-lg-8 p-0 d-none d-sm-flex h-100 mb-5">
                    <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img id="imagem1" style="object-fit: cover; filter: brightness(60%); border-radius: 5px" class="d-block w-100" src="public/img/cachorro-carousel.jpg" alt="Primeiro Slide">
                                <div class="carousel-caption d-none d-md-block">
                                    <hr style="width: 50%;" class="pt-1 mr-0 mb-0 bg-warning">
                                    <h2 class="text-right" style="font-size: 70px; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #000">Tudo de melhor para os seus pets</h2>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img id="imagem2" style=" object-fit: cover; filter: brightness(60%); border-radius: 5px" class="d-block w-100" src="public/img/gato2-carousel.jpg" alt="Segundo Slide">
                                <div class="carousel-caption d-none d-md-block">
                                    <hr style="width: 50%;" class="pt-1 mr-0 mb-0 bg-warning">
                                    <h2 class="text-right" style="font-size: 70px; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #000">Só aqui você faz o RG para o seu pet</h2>
                                </div>
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
        </div>
`

export { PrincipalTemplate }