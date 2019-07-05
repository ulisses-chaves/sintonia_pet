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
                            <input type="text" class="form-control" id="inputNome" placeholder="Primeiro Nome" v-model="usuarioWrapper.usuario.nome" maxlength="15" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSobrenome" class="col-sm-2 col-form-label">Sobrenome</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputSobrenome" placeholder="Sobrenome" v-model="usuarioWrapper.usuario.sobrenome" maxlength="15" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCpf" class="col-sm-2 col-form-label">CPF</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCpf" placeholder="CPF (Apenas números)" v-model="usuarioWrapper.usuario.cpf" maxlength="11" minlength="11" name="numbers" pattern="[0-9]+$" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputRg" class="col-sm-2 col-form-label">RG</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputRg" placeholder="RG (Apenas números)" v-model="usuarioWrapper.usuario.rg" maxlength="9" minlength="9" name="numbers" pattern="[0-9]+$" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputTelefone" class="col-sm-2 col-form-label">Telefone</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputTelefone" placeholder="DDD + Telefone" v-model="usuarioWrapper.usuario.numero_fixo" maxlength="10" minlength="10" name="numbers" pattern="[0-9]+$">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCelular" class="col-sm-2 col-form-label">Celular</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCelular" placeholder="DDD + Celular" v-model="usuarioWrapper.usuario.numero_telefone" maxlength="10" minlength="10" name="numbers" pattern="[0-9]+$" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputData" class="col-sm-2 col-form-label">Data de Nascimento</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control" id="inputData" v-model="usuarioWrapper.usuario.data_nascimento" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSexo" class="col-sm-2 col-form-label">Sexo</label>
                        <div class="col-sm-10">
                            <select aria-placeholder="Escolher" id="inputSexo" class="form-control" v-model="usuarioWrapper.usuario.sexo">
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="O">Outro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEstadoCivil" class="col-sm-2 col-form-label">Estado Civil</label>
                        <div class="col-sm-10">
                            <select id="inputEstadoCivil" class="form-control" v-model="usuarioWrapper.usuario.estado_civil">
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
                            <input type="text" class="form-control" id="inputCEP" placeholder="CEP (Apenas números)" v-model="usuarioWrapper.usuario.cep" v-on:blur="preencherCep" maxlength="8" minlength="8" name="numbers" pattern="[0-9]+$" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPais" class="col-sm-2 col-form-label">País</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPais" placeholder="País" v-model="usuarioWrapper.usuario.pais" required maxlength="20">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEstado" class="col-sm-2 col-form-label">Estado</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEstado" placeholder="UF (Sigla do Estado)" v-model="usuarioWrapper.usuario.uf" required maxlength="2">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCidade" class="col-sm-2 col-form-label">Cidade</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCidade" placeholder="Cidade" v-model="usuarioWrapper.usuario.cidade" required maxlength="50">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputBairro" class="col-sm-2 col-form-label">Bairro</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputBairro" placeholder="Bairro" v-model="usuarioWrapper.usuario.bairro" required maxlength="30">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputRua" class="col-sm-2 col-form-label">Rua</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputRua" placeholder="Rua" v-model="usuarioWrapper.usuario.rua" required maxlength="50">
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
                            <input type="email" class="form-control" id="inputEmail" placeholder="Seu email" v-model="usuarioWrapper.usuario.email" maxlength="30" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputLogin" class="col-sm-2 col-form-label">Login</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputLogin" placeholder="Defina seu login" v-model="usuarioWrapper.usuario.login" maxlength="15" minlength="5" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSenha" class="col-sm-2 col-form-label">Senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputSenha" placeholder="Senha com letras e números" v-model="usuarioWrapper.usuario.senha" maxlength="15" minlength="5" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputConSenha" class="col-sm-2 col-form-label">Repita a senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputConSenha" placeholder="Confirme sua senha" v-model="confirmarSenha" maxlength="15" minlength="5" required>
                        </div>
                    </div>
                    <div id="alertImgMsg" style="width: 70%; display: none" class="m-auto text-center alert alert-danger" role="alert">
                        <div class="row">
                            <div class="col-md-3 text-md-right text-center">
                                <img style="width: 50px" src="../../public/assets/alert.png" alt="">
                            </div>
                            <div id ="msg" class="col-md-7 text-center">

                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-3">
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
            usuarioWrapper: {
                imagem: '',
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
                    is_admin:false,
                    is_premmium: false,
                    caminho_foto: '',
                    uf: 'PE'
                },
            },
            confirmarSenha: '',
        }
    },
    components: {
        'navbar': NavbarVue,
        'rodape': RodapeVue
    },
    methods: {
        cadastro () {
            let vm = this;
            http.post ('usuario/add', this.usuarioWrapper)
                .then (function (response) {
                    alert ('user cadastrado');
                    vm.$router.push ('principal')
                })
                .catch (error => {
                    document.getElementById('msg').innerHTML = "Não foi possível cadastrar <br> Email, login ou senha já estão sendo usados";
                    document.getElementById('alertImgMsg').style.display = 'block'
                })
        },
        preencherCep () {
            let url = 'http://api.postmon.com.br/v1/cep/' + this.usuarioWrapper.usuario.cep;
            let vm = this;  //armazenando a instância do Vue
            Axios.get(url)
                .then(function (response) {
                    vm.usuarioWrapper.usuario.pais = 'Brasil';
                    vm.usuarioWrapper.usuario.uf = response.data.estado;
                    vm.usuarioWrapper.usuario.cidade = response.data.cidade;
                    vm.usuarioWrapper.usuario.bairro = response.data.bairro;
                    vm.usuarioWrapper.usuario.rua = response.data.logradouro;
                })
                .catch (error => {
                    
                })
            
        },
    }
}
</script>
