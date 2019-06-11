const PrincipalTemplate = `
    <div>
    <navbar></navbar>
        <div class="row m-0">
            <div class="col-lg-4 mt-4">
                <div>
                    <h1 style="color: #fdc536">Sintonia Pet - O melhor site para o seu melhor amigo</h1>
                    <div class="row mt-5 ">
                        <div class="col-sm-6">
                           <h4 style="color: #585858">Faça <a class="card-link" href="">login</a> e gerencie seus pets, fique por dentro das novidades e muito mais!</h4>
                        </div>
                        <div class="col-sm-6 text-center">
                            <img src="public/img/cachorro-esquerda.png" alt="">
                        </div>
                    </div>
                    <div class="row d-none d-sm-flex">
                        <div class="col-sm-6 text-center">
                            <img src="public/img/gato-cinza-sentado.png" alt="">
                        </div>
                        <div class="col-sm-6">
                                <p style="font-size: 18px; color: #f3bc32">É novo por aqui? Se <a class="card-link" href="">cadastre</a> e conheça um pouco dos nossos serviços!</p>
                        </div>
                    </div>
                </div>
                <!--<div class="mt-4">
                    <ul style="list-style: none" class="m-0">
                        <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/facebook.png" alt=""></li>
                        <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/gmail.png" alt=""></li>
                        <li class="d-inline-block mt-1 mx-1"><img style="width: 32px" src="public/img/instagram.png" alt=""></li>
                        <li class="d-inline-block mx-1 text-right" style="color: #7e4732; font-size: 14px"><span>&copy; Sintonia Pet 2019</span> </li>
                    </ul>
                </div>-->
            </div>
            <div class="col-lg-8 p-0 d-none d-sm-flex">
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
        <contato></contato>
    </div>
`

export { PrincipalTemplate }