<template>
    <div style="background-image: linear-gradient(to bottom, #ffffff, #dddcdc);">
        <navbar></navbar>
        <div class="container">
        <div class="my-5 text-center">
            <h1>Estamos ansiosos para receber você no <a href="/" class="link color-warning">Sintonia Pet</a></h1>
            <h2 class="color-brown">Preencha os campos abaixo para se cadastrar!</h2>
        </div>
        <form v-on:submit.prevent="cadastro">
            <div class="row mt-5">
                <div class="col-sm-6">
                    <h4 class="mb-4">Suas informações pessoais</h4>
                    <div class="form-group row">
                        <label for="inputNome" class="col-sm-2 col-form-label">Nome</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputNome" placeholder="Primeiro Nome" v-model="usuario.nome">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSobrenome" class="col-sm-2 col-form-label">Sobrenome</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputSobrenome" placeholder="Sobrenome" v-model="usuario.sobrenome">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCpf" class="col-sm-2 col-form-label">CPF</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCpf" placeholder="CPF (Apenas números)" v-model="usuario.cpf">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputRg" class="col-sm-2 col-form-label">RG</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputRg" placeholder="RG (Apenas números)" v-model="usuario.rg">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputTelefone" class="col-sm-2 col-form-label">Telefone</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputTelefone" placeholder="DDD + Telefone" v-model="usuario.numero_fixo">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCelular" class="col-sm-2 col-form-label">Celular</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCelular" placeholder="DDD + Celular" v-model="usuario.numero_telefone">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputData" class="col-sm-2 col-form-label">Data de Nascimento</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control" id="inputData" v-model="usuario.data_nascimento">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSexo" class="col-sm-2 col-form-label">Sexo</label>
                        <div class="col-sm-10">
                            <select aria-placeholder="Escolher" id="inputSexo" class="form-control" v-model="usuario.sexo">
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="O">Outro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEstadoCivil" class="col-sm-2 col-form-label">Estado Civil</label>
                        <div class="col-sm-10">
                            <select id="inputEstadoCivil" class="form-control" v-model="usuario.estado_civil">
                                <option value="S">Solteiro(a)</option>
                                <option value="C">Casado(a)</option>
                                <option value="O">Outro</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="row mt-5">
                        <div class="col-sm-7 mt-sm-5 text-center text-sm-right">
                            <h3>Aqui você poderá cadastrar seus pets, gerenciá-los e muito mais!</h3>
                            <hr style="width: 40%; background-color: #8b513a" class="pt-1 mr-0">
                        </div>
                        <div class="col-sm-5 mt-5 text-center text-sm-right">
                            <img style="width: 220px" src="../../public/assets/cachorro-marrom-esquerda.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-6">
                    <div class="row mt-5">
                        <div class="col-sm-5 d-none d-sm-block">
                            <img style="width: 180px" src="../../public/assets/pássaro-vermelho-direita.png" alt="">
                        </div>
                        <div class="col-sm-7 mt-5">
                            <h5>Informando sua localização em breve você poderá fazer compras no <a href="#/" class="link color-warning">Sintonia Pet</a>!</h5>
                            <hr style="width: 40%;" class="pt-1 bg-warning ml-0">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h4 class="mb-4">Sua localização</h4>
                    <div class="form-group row">
                        <label for="inputCEP" class="col-sm-2 col-form-label">CEP</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCEP" placeholder="CEP (Apenas números)" v-model="usuario.cep" v-on:blur="preencherCep">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPais" class="col-sm-2 col-form-label">País</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPais" placeholder="País" v-model="usuario.pais">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCidade" class="col-sm-2 col-form-label">Cidade</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCidade" placeholder="Cidade" v-model="usuario.cidade">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputBairro" class="col-sm-2 col-form-label">Bairro</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputBairro" placeholder="Bairro" v-model="usuario.bairro">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputRua" class="col-sm-2 col-form-label">Rua</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputRua" placeholder="Rua" v-model="usuario.rua">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-3 my-5 text-center text-sm-left ">
                    <img style="width: 150px" class="mt-sm-5" src="../../public/assets/gato-laranja-direita.png" alt="">
                </div>
                <div class="col-sm-6">
                    <h4 class="mb-4">Só faltam os dados para login</h4>
                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail" placeholder="Seu email" v-model="usuario.email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputLogin" class="col-sm-2 col-form-label">Login</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputLogin" placeholder="Defina seu login" v-model="usuario.login">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSenha" class="col-sm-2 col-form-label">Senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputSenha" placeholder="Senha com letras e números" v-model="usuario.senha">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputConSenha" class="col-sm-2 col-form-label">Repita a senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputConSenha" placeholder="Confirme sua senha" v-model="confirmarSenha">
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-warning">Finalizar o Cadastro</button>
                    </div>
                </div>
                <div class="col-sm-3 mt-5 d-none d-sm-block">
                    <img style="width: 180px" class="mt-sm-4 ml-sm-5" src="../../public/assets/cachorro-laranja-esquerda.png" alt="">
                </div>
            </div>
        </form>
    </div>
    <rodape></rodape>
    </div>
</template>

<script>
import Axios from 'axios';
import { http } from '../services/config'
import RodapeVue from '../views/Rodape.vue';
import NavbarVue from '../views/Navbar.vue';

export default {
    name: 'cadastro',
    data () {
        return {
            usuario: {
                rg: '',
                cpf: '',
                nome: '',
                sobrenome: '',
                numero_fixo: '',
                numero_telefone: '',
                data_nascimento: '',
                sexo: 'M',
                estado_civil: 'S',
                cep: '',
                pais: '',
                cidade: '',
                bairro: '',
                rua: '',
                email: '',
                login: '',
                senha: '',
                caminho_foto: null,
            },
            confirmarSenha: '',
        }
    },
    components: {
        'navbar': NavbarVue,
        'rodape': RodapeVue
    },
    methods: {
        cadastro () { //arrumar esses if's e else's
            if (this.usuario.telefone.length != 10) {
                alert ('Telefone inválido! Deve haver 10 números.\n Ex: 8135230303');
            }else{
                if (this.usuario.celular.length != 10) {
                    alert ('Celular inválido! Deve haver 10 números.\n Ex: 8197145258')
                } else {
                    if (this.usuario.cep.length != 8) {
                        alert ('CEP inválido! Deve contem apenas números e 8 deles')
                    } else {
                        if (this.usuario.senha != this.confirmarSenha) {
                            alert ("Repita uma senha igual no campo 'Confirme sua Senha'")
                        }else {
                            http.post ('/cadastroUsuario', this.usuario)
                                .then (function (response) {
                                console.log (response) //teste
                                })
                                .catch (error => {
                                    alert (error)
                                })
                        }
                    }
                }
            }
        },
        preencherCep () {
            let url = 'http://api.postmon.com.br/v1/cep/' + this.usuario.cep;
            let vm = this;  //armazenando a instância do Vue
            Axios.get(url)
                .then(function (response) {
                    vm.usuario.pais = 'Brasil';
                    vm.usuario.cidade = response.data.cidade;
                    vm.usuario.bairro = response.data.bairro;
                    vm.usuario.rua = response.data.logradouro;
                })
                .catch (error => {
                    console.log (error)
                })
            
        },
    }
}
</script>
