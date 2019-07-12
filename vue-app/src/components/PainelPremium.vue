<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <h2 class="mb-4 text-center h1">Painel Token</h2>
                    <h5 class="mb-5 text-center">Informe o token para se tornar premium</h5>
                    <form v-on:submit.prevent="premium">
                        <div class="form-group row">
                            <label for="inputRg" class="col-sm-1 col-form-label my-2 text-center text-sm-left">Token</label>
                            <div class="col-sm-8 my-2">
                                <input type="text" class="form-control" id="inputRg" placeholder="Insira o seu Token recebido" name="numbers" pattern="[0-9]+$" v-model="token" required>
                            </div>
                            <div class="col-sm-3 my-2 text-center text-sm-left">
                                <button class="btn btn-warning">Virar Premium</button>
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
    name: 'painelPremium',
    data () {
        return {
            token: ''
        }
    },
    methods: {
        premium () {
            let vm = this;
            http.post ('usuario/token/usar/' + localStorage.getItem ('login') +"/"+ this.token, {}, {
                auth: {
                    username: localStorage.getItem ('login'),
                    password: localStorage.getItem ('password')
                }

            })
                .then (function (response) {
                    //AQUI ENTRA A CRIAÇÃO DO QRCODE E O PREENCHIMENTO DOS CAMPOS DE PAGINA PET
                    alert ('Usuario se tornou Premium!');
                })
                .catch (error => {
                    console.log (error)
                })
        }
    }
}
</script>

