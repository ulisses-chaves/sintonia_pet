import Vue from './public/js/vue.js'
import { Navbar } from './components/navbar.js'
import { Principal } from './components/principal.js'
import { Cadastro } from './components/cadastro.js';
import { Menu } from './components/menu.js';
import { MenuPets } from './components/menu-pets.js';
import { NavbarLogin } from './components/navbar-login.js';
import { MenuPerfil } from './components/menu-perfil.js';
import { Contato } from './components/contato.js'
import { Login } from './components/login.js';
import { Footer } from './components/footer.js'
import { ComoUsar } from './components/como-usar.js';
import { CadastroPet } from './components/cadastro-pet.js';

Vue.use(VueRouter)

const router = new VueRouter ({
    routes: [
        { path: '/', component: Principal },
        { path: '/cadastro', component: Cadastro },
        { path: '/menuPrincipal', component: Menu }, //precisa tá logado | add as 3 paginas que também precisam tá logado pra acessar
        { path: '/login', component: Login },
        { path: '/cadastroPet', component: CadastroPet}
    ]
})

new Vue ({
    el: '#app',
    router,
    components: {
        'navbar': Navbar,
        'navbarLogin': NavbarLogin,
        'menuPets': MenuPets,
        'menuPerfil': MenuPerfil,
        'contato': Contato,
        'rodape': Footer,
        'comoUsar': ComoUsar,
    },
})