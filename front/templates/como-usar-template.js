const ComoUsarTemplate = `
    <div class="container">
        <h2 class="my-5 text-center h1">Como usar</h2>
        <div class="row" style="color: white">
            <div class="col-lg-3 my-3">
                <div class="card m-auto" style="height: 383px; width: 16rem; background-image: linear-gradient(to bottom, #fe6567 , #fc3636)">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">Login</h5>
                        <hr>
                        <img class="my-4" style="width: 50%;" src="./public/img/cachorro-marrom-direita.png" alt="">
                        <hr>
                        <p class="card-text">Fazendo login você poderá cadastrar seu pet colocando todas as suas informações.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 d-none d-lg-block text-center">
                <img style="margin-top: 150px" src="public/img/right-arrow.png" alt="">
            </div>
            <div class="col-lg-3 my-3">
                <div class="card m-auto" style="width: 16rem; background-image: linear-gradient(to bottom, #24fc7e , #19c561) ">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">RG</h5>
                        <hr>
                        <img class="my-4" style="width: 50%;" src="./public/img/rg.png" alt="">
                        <hr>
                        <p class="card-text">Colocando uma foto do seu pet nós iremos gerar um RG e um QR Code para o seu pet.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 d-none d-lg-block text-center">
                <img style="margin-top: 150px" src="public/img/right-arrow.png" alt="">
            </div>
            <div class="col-lg-3 my-3">
                <div class="card m-auto" style="width: 16rem; background-image: linear-gradient(to bottom, #fa8a4a , #fd650d)">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">Localização</h5>
                        <hr>
                        <img class="my-4" style="width: 50%;" src="./public/img/coleira.png" alt="">
                        <hr>
                        <p class="card-text">Você poderá imprimir o RG do seu pet e prendê-lo na coleira para localizá-lo caso o perca, por exemplo.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-4 my-lg-4">
                <div class="card m-auto" style="width: 16rem; background-image: linear-gradient(to bottom, #ffffff , #d6d6d6)">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">QR Code</h5>
                        <hr>
                        <img class="my-4" style="width: 50%;" src="./public/img/qr-code.png" alt="">
                        <hr>
                        <p class="card-text">No RG terá seu número de cadastro e o QR Code do Pet</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 my-3">
                <div class="row my-3">
                    <div class="col-sm-6 mt-1">
                        <hr>
                        <h4 class="mb-4 text-center">Encontrou um pet com RG?</h4>
                        <p style="font-size: 18px" class="text-center text-sm-left">Digite <a href="">aqui</a> o número do RG do pet ou leia o QR Code</p>
                        <span style="font-size: 10px">Para ler o QR Code instale o aplicativo para leitura no celular</span>
                        <div class="text-center text-sm-left">
                            <a href="https://play.google.com/store/apps/details?id=me.scan.android.client&hl=pt">
                                <img style="width: 170px" src="./public/img/android.jpg" alt="">
                            </a>
                            <a href="https://itunes.apple.com/br/app/qr-code-reader-by-scan/id698925807?mt=8">
                                <img style="width: 170px" src="./public/img/apple.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-6 text-center mt-1">
                        <hr>
                        <h4>Onde colocar o RG Pet?</h4>
                        <img class="my-3" src="./public/img/pingente.jpg" style="width: 120px" alt="">
                        <p>Na internet você encontra alguns pingentes de indentificação pet que você pode prender na coleira</p>
                    </div>      
                </div>
            </div>
        </div>
    </div>
`

export { ComoUsarTemplate }