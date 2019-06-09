const NavbarTemplate = `
    <nav id="altura-nav" style="background-image: linear-gradient(to bottom, #fdad00 , #fdc536);" class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a href="#/">
                <img style="height: 70px;" src="public/img/logo-titulo branco.png" alt="">
            </a>
            <button style="background: #7e4732" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSite">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a style="color: #7e4732" class="nav-link" href=""><img style="width: 35px" src="public/img/tutorial.png" alt=""></a>
                    </li>
                    <li class="nav-item active">
                        <a style="color: #7e4732;" class="nav-link w-100" href="#">Como usar</a>
                    </li>
                    <li class="nav-item active">
                        <a style="color: #7e4732" class="nav-link" href=""><img style="width: 35px" src="public/img/sobrenos.png" alt=""></a>
                    </li>
                    <li class="nav-item active">
                        <a style="color: #7e4732;"class="nav-link" href="#">Sobre nós</a>
                    </li>
                    <li class="nav-item active">
                        <a style="color: #7e4732" class="nav-link" href=""><img style="width: 35px" src="public/img/contato.png" alt=""></a>
                    </li>
                    <li class="nav-item active">
                        <a style="color: #7e4732;" class="nav-link" href="#">Contato</a>
                    </li>  
                </ul>
            </div>
        </div>
    </nav>
` 

export { NavbarTemplate }