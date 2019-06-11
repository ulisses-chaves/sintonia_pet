const NavbarLoginTemplate = `
    <div>
        <nav id="altura-nav" style="background-image: linear-gradient(to bottom, #fdad00 , #fdc536);" class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a href="#/menuPrincipal">
                    <img style="height: 65px;" src="public/img/logo-titulo branco.png" alt="">
                </a>
                <div id="navbarSite">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mt-sm-2 mr-sm-2">Seja bem vindo(a), <strong>Usuário</strong></li>
                        <li class="nav-item active">
                            <div class="dropdown">
                                <img style="width: 35px" src="public/img/user.png" alt="" class="dropdown-toggle"id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#/"><img style="width: 30px" src="public/img/cat.png" alt=""> Gerenciar Pets</a>
                                    <a class="dropdown-item bg-warning" href="#/"><img style="width: 30px" src="public/img/editar.png" alt=""> Editar Perfil</a>
                                    <a class="dropdown-item" href="#"><img style="width: 30px" src="public/img/logout.png" alt=""> Sair</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#"><img style="width: 30px" src="public/img/comousar.png" alt=""> Como Usar</a>
                                    <a class="dropdown-item" href="#"><img style="width: 30px" src="public/img/sobrenos.png" alt=""> Quem Somos</a>
                                    <a class="dropdown-item" href="#"><img style="width: 30px" src="public/img/contato.png" alt=""> Contato</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
`

export { NavbarLoginTemplate }