import Vue from './public/js/vue.js'
import { Navbar } from './components/navbar.js'
import { Login } from './components/login.js'
import { Cadastro } from './components/cadastro.js';
import { Menu } from './components/menu.js';
import { MenuPets } from './components/menu-pets.js';

Vue.use(VueRouter)

const router = new VueRouter ({
    routes: [
        { path: '/', component: Login },
        { path: '/cadastro', component: Cadastro },
        { path: '/menu', component: Menu }
    ]
})

new Vue ({
    el: '#app',
    router,
    components: {
        'navbar': Navbar,
        'menuPets': MenuPets
    },
})