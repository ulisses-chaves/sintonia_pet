<template>
    <div>
        <div style= "box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5)">
            <nav id="altura-nav" style="background-image: linear-gradient(to bottom, #fdad00 , #fdc536);" class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <a href="/">
                        <img style="height: 65px;" src="../../public/assets/logo-titulo branco.png" alt="">
                    </a>
                    <button style="background: #7e4732" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSite">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active mx-2">
                                <router-link style="color: #7e4732;" class="btn btn-outline-light nav-link" to="/">Sair</router-link>
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
                                <input type="text" class="form-control" id="inputRg" placeholder="Apenas números" name="numbers" pattern="[0-9]+$" v-model="rg" required>
                            </div>
                            <div class="col-sm-3 my-2 text-center text-sm-left">
                                <button class="btn btn-warning">Torná-lo Premium</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { http } from '../services/config';
export default {
    name: 'painelAdmin',
    data () {
        return {
            rg: ''
        }
    },
    methods: {
        premium () {
            let vm = this;
            http.put ('url', this.rg)
                .then (function (response) {
                    alert ('Usuario com o RG ' + vm.rg + ' se tornou Premium!');
                })
                .catch (error => {
                    console.log (error)
                })
        }
    }
}
</script>

