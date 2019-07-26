<template>
    <div style= "box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5)">
        <nav id="altura-nav" style="background-image: linear-gradient(to bottom, #fdad00 , #fdc536);" class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <router-link v-bind:to="{ name: 'menuPets', params: { name: 'menu-pets' } }">
                    <img style="height: 65px;" src="../../public/assets/logo-titulo branco.png" alt="">
                </router-link>
                <div id="navbarSite">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mt-sm-2 mr-sm-2">Bem vindo(a), <strong>{{login}}</strong></li>
                        <li class="nav-item active text-right">
                            <div class="dropdown">
                                <img style="width: 35px; cursor: pointer" src="../../public/assets/user.png" alt="" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="dropdown-menu dropdown-menu-right" style="position: absolute" aria-labelledby="dropdownMenuButton">
                                    <router-link class="dropdown-item" v-bind:to="{ name: 'menuPets', params: { name: 'menu-pets' } }"><img style="width: 30px" src="../../public/assets/cat.png" alt=""> Gerenciar Pets</router-link>
                                    <router-link class="dropdown-item" v-bind:to="{ name: 'paginaPerfil', params: { name: 'pagina-perfil' } }"><img style="width: 30px" src="../../public/assets/editar.png" alt=""> Perfil</router-link>
                                    <router-link class="dropdown-item" v-bind:to="{ name: 'painelPremium', params: { name: 'painel-premium' } }"><img style="width: 30px" src="../../public/assets/qr-code.png" alt=""> Premium</router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link class="dropdown-item" v-bind:to="{ name: 'comoUsar', params: { name: 'como-usar' } }"><img style="width: 30px" src="../../public/assets/comousar.png" alt=""> Como Usar</router-link>
                                    <router-link class="dropdown-item" v-bind:to="{ name: 'contato', params: { name: 'contato' } }"><img style="width: 30px" src="../../public/assets/contato.png" alt=""> Contato</router-link>
                                    <div class="dropdown-divider"></div>
                                    <button style="cursor: pointer" class="dropdown-item" v-on:click.stop.prevent="sair"><img style="width: 30px;" src="../../public/assets/logout.png" alt=""> Sair</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { http, getLogin } from '../services/config';
export default {
    data () {
        return {
            login: '',
            isPremmium: false,
        }
    },
    created () {
        let vm = this;
        http.get ('usuario/get/' + getLogin ())
            .then (response => {
                vm.login = response.data.usuario.nome
                vm.isPremmium = response.data.usuario.isPremmium
            })
            .catch (error => {
                console.log ('Problema com a comunicação na API')
            })
    },
    methods: {
        sair () {
            if (!localStorage.getItem ('login') && !localStorage.getItem ('password')) {
                sessionStorage.removeItem ('login')
                sessionStorage.removeItem ('password')
            }else {
                localStorage.removeItem ('login')
                localStorage.removeItem ('password')   
            }
            this.$router.push ('/')
        }
    }
}
</script>
