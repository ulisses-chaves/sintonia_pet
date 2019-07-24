<template>
    <div>
        <navbar></navbar>
        <div class="row m-0">
            <div class="col-lg-4 mt-4">
                <h1 class="color-warning text-center mb-4" style="font-size: 47px; letter-spacing: -1px">Sintonia<span class="color-brown">Pet</span></h1>
                <div class="card m-auto" style="width: 80%; background: #fdc536">
                    <h5 style="font-weight: 700" class="color-brown card-title text-center mt-4">Faça seu login e conheça nossos produtos</h5>
                    <div style="background-image: linear-gradient(to bottom , #fdc536, #fdad00);" class="w-100 card-body m-auto">
                            <form v-on:submit.prevent="login">
                            <div class="form-group">
                                <label class="color-brown" for="inputLogin">Login</label>
                                <input type="text" class="form-control" id="inputLogin" v-model="usuario.username" required>
                            </div>
                            <div class="form-group">
                                <label class="color-brown" for="inputSenha">Senha</label>
                                <input type="password" class="form-control" id="inputSenha" v-model="usuario.senha" required>
                                <a style="font-size: 13px" class="card-link"  data-toggle="modal" data-target="#modalRecuperar" href="">Esqueceu o login ou a senha?</a>
                            </div>
                           <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="lembrar" v-model="lembrar">
                                <label class="custom-control-label color-brown" for="lembrar">Lembrar-me</label>
                            </div>
                            <div class="text-center">
                                <button style="width: 120px" class="color-brown btn btn-light">Entrar</button>
                            </div>
                        </form>
                        <div id="loginSenhaIncorretos" style="display:none" class="mt-3 mb-0 alert alert-danger" role="alert">
                            <ul class="p-0 m-0">
                                <li class="d-inline-block"><img style="width: 30px" src="../../public/assets/delete.png" alt=""></li>
                                <li class="d-inline-block ml-2">Login ou Senha incorretos!</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background: white" class="card-footer text-muted p-1 pl-2">
                        <p class="m-0 color-brown">É novo por aqui? <router-link class="card-link" to="cadastro">Crie sua conta</router-link></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 p-0 d-none d-sm-flex h-100 mb-5 mt-4">
                <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img style="object-fit: cover; border-radius: 5px" class="d-block w-100" src="../../public/assets/carousel/img-carousel-1.jpeg">
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
    <!-- MODAL -->
        <div class="modal fade" id="modalRecuperar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="background-color: #f8f8f8">
                        <h5 class="modal-title" id="exampleModalLabel">Recuperar Senha</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form v-on:submit.prevent="recovery">
                        <div class="modal-body">
                            <p>Não lembra sua senha? Podemos ajudá-lo!</p>
                            <div class="form-group">
                                <label for="inputModalLogin" class="col-form-label">RG:</label>
                                <input type="text" class="form-control" id="inputModalLogin" v-model="changeWrapper.rg" required>
                            </div>
                            <div class="form-group">
                                <label for="inputModalEmail" class="col-form-label">Email:</label>
                                <input type="text" class="form-control" id="inputModalEmail" v-model="changeWrapper.email" required>
                                <span class="ml-2" style="font-size: 12px">Uma nova senha será enviada para o seu email.</span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-warning">Recuperar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="enviado" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Enviado!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/checked.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center">
                                <h6 class="mb-4" style="font-size: 19px">Uma nova senha foi redefinida!</h6>
                                <p>Seu login e uma nova senha foram enviados para <strong class="color-warning">{{ changeWrapper.email }}</strong>. Verifique na caixa de entrada ou no lixo eletrônico. <br> <strong>Lembre-se, você pode alterar a senha sempre que quiser assim que estiver logado no sistema!</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Ok!</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="erro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Falha!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/delete.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center">
                                <h6 class="mb-4" style="font-size: 19px">Não foi possível recuperar!</h6>
                                <p>E-mail e/ou RG estão incorretos</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Ok!</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="carregando" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Aguarde</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/cachorro-sentado-direita.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center mt-5">
                                <h6 class="mb-4" style="font-size: 19px">Estamos conferindo e carregando seus dados!</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { http } from '../services/config.js'
import Axios from 'axios'
import NavbarVue from '../views/Navbar.vue';
import RodapeVue from '../views/Rodape.vue';
import ContatoVue from './Contato.vue';
import ComoUsarVue from './ComoUsar.vue';

export default {
    name: 'Principal',
    data () {
        return {
            usuario: {
                username: '',
                senha: ''
            },
            changeWrapper: {
                rg: '',
                email: ''
            },
            lembrar: false
        }
    },
    components: {
        'navbar': NavbarVue,
        'rodape': RodapeVue,
        'contato': ContatoVue,
        'comoUsar': ComoUsarVue
    },
    methods: {
        login () {
            $('#carregando').modal('show')
            let vm = this;
            http.post ('login', {}, {
                auth: {
                    username: vm.usuario.username,
                    password: vm.usuario.senha
                }
            })
                .then (function (response) {
                    if (vm.lembrar == true) {
                        localStorage.setItem ('login', vm.usuario.username),
                        localStorage.setItem ('password', vm.usuario.senha)
                    }else {
                        sessionStorage.setItem ('login', vm.usuario.username),
                        sessionStorage.setItem ('password', vm.usuario.senha)
                    }
                    $('#carregando').modal('hide')
                    vm.$router.push('menu')
                })
                .catch (error => {
                    $('#carregando').modal('hide')
                    document.getElementById('loginSenhaIncorretos').style.display = 'block';
                })
        },
        recovery () {
            http.post ('usuario/mudar', this.changeWrapper)
                .then (response => {
                    $('#enviado').modal('show')
                    $('#enviado').on('hide.bs.modal', event => {
                        window.location.reload()
                    })
                })
                .catch (error => {
                    $('#erro').modal('show')
                })
        }
    }
}
</script>
