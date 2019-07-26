<template>
    <div>
        <div style= "box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5)">
            <nav id="altura-nav" style="background-image: linear-gradient(to bottom, #fdad00 , #fdc536);" class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <router-link to="/painel-admin">
                        <img style="height: 65px;" src="../../public/assets/logo-titulo branco.png" alt="">
                    </router-link>
                    <button style="background: #7e4732" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSite">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active mx-2">
                                <button v-on:click.prevent="sair" style="color: #7e4732;" class="btn btn-outline-light nav-link" to="/">Sair</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <h2 class="mb-4 text-center h1">Painel Admin</h2>
                    <h5 class="mb-5 text-center">Informe o RG do usúario para torná-lo premium</h5>
                    <form v-on:submit.prevent="premium">
                        <div class="form-group row">
                            <label for="inputRg" class="col-sm-1 col-form-label my-2 text-center text-sm-left">RG</label>
                            <div class="col-sm-8 my-2">
                                <input type="text" class="form-control" id="inputRg" placeholder="Digite o RG (apenas números)" name="numbers" pattern="[0-9]+$" v-model="rg" required>
                            </div>
                            <div class="col-sm-3 my-2 text-center text-sm-left">
                                <button class="btn btn-warning">Torná-lo Premium</button>
                            </div>
                        </div>
                    </form>
                    <h5 class="my-5 text-center">Caso não lembre do Token, informe o RG do usuário para visualizar o Token gerado</h5>
                    <form v-on:submit.prevent="pesquisar">
                        <div class="form-group row">
                            <label for="inputPesquisar" class="col-sm-1 col-form-label my-2 text-center text-sm-left">Pesquisar</label>
                            <div class="col-sm-8 my-2">
                                <input type="text" class="form-control" id="inputPesquisar" placeholder="Digite o RG (apenas números)" name="numbers" pattern="[0-9]+$" v-model="pesquisa" required>
                            </div>
                            <div class="col-sm-3 my-2 text-center text-sm-left">
                                <button class="btn btn-warning">Pesquisar Token</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- MODAL -->
        <div class="modal fade" id="premium" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ação concluída</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/checked.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center text-sm-left">
                                <h6 style="font-size: 19px">O usuario com RG {{rg}} se tornou <strong class="color-warning">PREMIUM</strong>!</h6>
                                <p>Informe o Token: <strong class="color-warning">{{ token }}</strong> ao usuário!</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Ok!</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sucessoPesquisa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ação concluída</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/checked.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center text-sm-left">
                                <h6 style="font-size: 19px">O usuario com RG {{pesquisa}} tem o Token: <strong class="color-warning">{{ token }}</strong>!</h6>
                                <p>Informe o Token ao usuário!</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Ok!</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="falha" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Falha na atualização</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/delete.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center text-sm-left">
                                <h6 style="font-size: 19px">Não foi possível tornar esse usuário em <strong class="color-warning">PREMIUM</strong></h6>
                                <p>O RG {{rg}} está incorreto ou já foi gerado um token para o mesmo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="falhaPesquisa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Falha na pesquisa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/delete.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center text-sm-left">
                                <h6 style="font-size: 19px">Não foi possível encontrar o token desse RG</h6>
                                <p>O RG {{pesquisa}} não é de um usuário premium</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { http, getLogin, getSenha } from '../services/config';
export default {
    name: 'painelAdmin',
    data () {
        return {
            rg: '',
            token: '',
            pesquisa: '',
        }
    },
    beforeCreate() {
        let vm = this
        http.get ('usuario/get/' + getLogin())
            .then (function (response) {
                if (!response.data.usuario.is_admin) {
                    vm.$router.push ('/menu')
                }
            })
    },
    methods: {
        premium () {
            let vm = this;
            http.post ('usuario/token/' + this.rg, {}, {
                auth: {
                    username: getLogin (),
                    password: getSenha ()
                }

            })
                .then (function (response) {
                    vm.token = response.data
                    $('#premium').modal('show')
                })
                .catch (error => {
                    $('#falha').modal('show')
                })
        },
        sair () {
            if (!localStorage.getItem ('login') && !localStorage.getItem ('password')) {
                sessionStorage.removeItem ('login')
                sessionStorage.removeItem ('password')
            }else {
                localStorage.removeItem ('login')
                localStorage.removeItem ('password')   
            }
            this.$router.push ('/')
        },
        pesquisar () {
            let vm = this;
            http.post ('usuario/token/pegar/' + this.pesquisa, {}, {
                auth: {
                    username: getLogin (),
                    password: getSenha (),
                }
            })
                .then (function (response) {
                    vm.token = response.data
                    $('#sucessoPesquisa').modal('show')
                })
                .catch (error => {
                    console.log (error.response)
                    $('#falhaPesquisa').modal('show')
                })
        }
    }
}
</script>

