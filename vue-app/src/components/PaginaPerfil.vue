<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-sm-6 text-center text-sm-right" >
                <img src="../../public/assets/perfil.png" alt="" >
            </div>
            <div class="col-sm-6 text-center text-sm-left pl-0 mt-3">
                <h1>Perfil</h1>
            </div>
        </div>
        <hr style="width: 40%; background-color: #8b513a" class="mt-5 pt-1 mr-0">
        <h5 class="text-center">Suas informações pessoais</h5>
        <hr style="width: 40%; background-color: #8b513a" class="pt-1 ml-0">
        <div class="text-right">
            <router-link to="/perfil" style="font-size: 12px" class="card-link">Editar informações</router-link>
        </div>
        <div class="text-center mb-3">
            <img class="m-auto py-3" src="" style="width: 64px" alt=""  id='imagem'>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="inputLogin">Login</label>
                    <input type="text" class="form-control" id="inputLogin" v-model="usuarioWrapper.usuario.login" readonly required>
                </div>
            </div>
            <div class="col-sm-6">   
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="text" class="form-control" id="inputEmail" v-model="usuarioWrapper.usuario.email" readonly required>
                </div>
            </div>  
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="inputNome">Nome</label>
                    <input type="text" class="form-control" id="inputNome" v-model="usuarioWrapper.usuario.nome" readonly required>
                </div>
            </div>
            <div class="col-sm-6">   
                <div class="form-group">
                    <label for="inputSobrenome">Sobrenome</label>
                    <input type="text" class="form-control" id="inputSobrenome" v-model="usuarioWrapper.usuario.sobrenome" readonly required>
                </div>
            </div>  
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="inputCpf">CPF</label>
                    <input type="text" class="form-control" id="inputCpf" v-model="usuarioWrapper.usuario.cpf" readonly required>
                </div>
            </div>
            <div class="col-sm-6">   
                <div class="form-group">
                    <label for="inputRg">RG</label>
                    <input type="text" class="form-control" id="inputRg" v-model="usuarioWrapper.usuario.rg" readonly required>
                </div>
            </div>  
        </div>
        <hr style="width: 40%; background-color: #8b513a" class="pt-1 ml-0">
        <h5 class="text-center">Endereço e contato</h5>
        <hr style="width: 40%; background-color: #8b513a" class="pt-1 mr-0">
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="telefone">Celular</label>
                    <input type="text" class="form-control" id="telefone" v-model="usuarioWrapper.usuario.numero_telefone" readonly required>
                </div>
            </div>
            <div class="col-sm-6">   
                <div class="form-group">
                    <label for="cep">CEP</label>
                    <input type="text" class="form-control" id="cep" v-model="usuarioWrapper.usuario.cep" readonly required>
                </div>
            </div>  
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="inputCpf">Estado</label>
                    <input type="text" class="form-control" id="inputCpf" v-model="usuarioWrapper.usuario.uf" readonly required>
                </div>
            </div>
            <div class="col-sm-6">   
                <div class="form-group">
                    <label for="cidade">Cidade</label>
                    <input type="text" class="form-control" id="cidade" v-model="usuarioWrapper.usuario.cidade" readonly required>
                </div>
            </div>  
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="bairro">Bairro</label>
                    <input type="text" class="form-control" id="inputCpf" v-model="usuarioWrapper.usuario.bairro" readonly required>
                </div>
            </div>
            <div class="col-sm-6">   
                <div class="form-group">
                    <label for="rua">Logradouro</label>
                    <input type="text" class="form-control" id="rua" v-model="usuarioWrapper.usuario.rua" readonly required>
                </div>
            </div>  
        </div>
        <div class="row">
            <div class="col-sm-6 text-center text-sm-right my-2">
                <router-link to="/menu-pets" class="btn btn-warning">Menu Pets</router-link>
            </div>
            <div class="col-sm-6 text-center text-sm-left my-2">
                <router-link to="/perfil" class="btn btn-warning">Editar informações</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { http, getLogin } from '../services/config';
export default {
    name: 'paginaPerfil',
    data () {
        return {
            usuarioWrapper: { 
                imagem: '',
                usuario: {
                    rg: null,
                    cpf: null,
                    nome: null,
                    sobrenome: null,
                    numero_fixo: null,
                    numero_telefone: null,
                    data_nascimento: null,
                    sexo: 'z',
                    estado_civil: 'z',
                    cep: null,
                    pais: null,
                    cidade: null,
                    bairro: null,
                    rua: null,
                    email: null,
                    login: null,
                    senha: null,
                    is_admin:false,
                    is_premmium: false,
                    caminho_foto: null,
                    uf: null
                }
            }
        }
    },
    mounted () {
        let vm = this;
        http.get ('usuario/get/' + getLogin ())
            .then (function (response){
                document.getElementById("imagem").src = response.data.imagem;
                document.getElementById("imagem").style.width  = "150px";
                
                vm.usuarioWrapper.usuario.rg = response.data.usuario.rg
                vm.usuarioWrapper.usuario.cpf = response.data.usuario.cpf
                vm.usuarioWrapper.usuario.login = response.data.usuario.login
                vm.usuarioWrapper.usuario.email = response.data.usuario.email
                vm.usuarioWrapper.usuario.nome = response.data.usuario.nome
                vm.usuarioWrapper.usuario.sobrenome = response.data.usuario.sobrenome
                vm.usuarioWrapper.usuario.numero_fixo = response.data.usuario.numero_fixo
                vm.usuarioWrapper.usuario.numero_telefone = response.data.usuario.numero_telefone
                vm.usuarioWrapper.usuario.sexo = response.data.usuario.sexo
                vm.usuarioWrapper.usuario.estado_civil = response.data.usuario.estado_civil
                vm.usuarioWrapper.usuario.cep = response.data.usuario.cep
                vm.usuarioWrapper.usuario.pais = response.data.usuario.pais
                vm.usuarioWrapper.usuario.cidade = response.data.usuario.cidade
                vm.usuarioWrapper.usuario.bairro = response.data.usuario.bairro
                vm.usuarioWrapper.usuario.rua = response.data.usuario.rua
                vm.usuarioWrapper.usuario.data = response.data.usuario.data
                vm.usuarioWrapper.usuario.caminho_foto = response.data.usuario.caminho_foto
                vm.usuarioWrapper.usuario.uf = response.data.usuario.uf
            })
            .catch (error => {
                console.log (error)
            })
    },
}
</script>

