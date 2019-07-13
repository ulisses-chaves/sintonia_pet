<template>
    <div class="container my-5">
        <div class="row mb-5">
            <div class="col-sm-6 text-center text-sm-right" >
                <img src="../../public/assets/perfil.png" alt="" >
            </div>
            <div style="vertical-align: middle" class="col-sm-06 text-center text-sm-left pl-0 mt-3">
                <h1>Perfil</h1>
            </div>
        </div>
        <div class="color-brown card m-auto"  style="width: 85%; background: #fdc536">
            <h2 class="text-center my-3">Edite ou atualize seus dados</h2>
            <div class="dropdown-divider"></div>
            <img class="m-auto py-3" src="../../public/assets/perfil.png" style="width: 64px" alt=""  id='imagem'>
            <div class="card-body" style="background-image: linear-gradient(to bottom , #fdc536, #fdad00);">
                <form v-on:submit.prevent="atualizar" class="mb-3">
                    <!--<div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputLogin">Login</label>
                                <input type="text" class="form-control" id="inputLogin" maxlength="15" v-model="usuarioWrapper.usuario.login">
                            </div>
                        </div>
                        <div class="col-sm-6">   
                            <div class="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail" maxlength="50" v-model="usuarioWrapper.usuario.email">
                            </div>
                        </div>
                    </div>-->
                    <div class="dropdown-divider"></div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputNome">Nome</label>
                                <input type="text" class="form-control" id="inputNome" v-model="usuarioWrapper.usuario.nome" maxlength="15" required>
                            </div>
                        </div>
                        <div class="col-sm-6">   
                            <div class="form-group">
                                <label for="inputSobrenome">Sobrenome</label>
                                <input type="text" class="form-control" id="inputSobrenome" v-model="usuarioWrapper.usuario.sobrenome" maxlength="15" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inputSexo">Sexo</label>
                                <select class="custom-select mr-sm-2" id="inputSexo" v-model="usuarioWrapper.usuario.sexo">
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                    <option value="O">Outro</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">   
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1" style="width: 191.05px;">
                                <label class="mr-sm-2" for="inputEstadoCivil">Estado Civil</label>
                                <select class="custom-select mr-sm-2" id="inputEstadoCivil" v-model="usuarioWrapper.usuario.estado_civil">
                                    <option value="S">Solteiro(a)</option>
                                    <option value="C">Casado(a)</option>
                                    <option value="O">Outro</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <ul class="p-0 mt-2" style="list-style: none">
                                <li>
                                    <label>Alterar foto</label>
                                </li>
                                <li>
                                    <input type="file" class="m-0" accept="image/jpeg, image/png" v-on:change="fotoSelecionada" >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputData">Data de Nascimento</label>
                                <input type="date" class="form-control" id="inputData" v-model="usuarioWrapper.usuario.data">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputTelefone">Telefone</label>
                                <input type="text" class="form-control" id="inputTelefone" v-model="usuarioWrapper.usuario.numero_fixo" maxlength="10" minlength="10">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputCelular">Celular</label>
                                <input type="text" class="form-control" id="inputCelular" v-model="usuarioWrapper.usuario.numero_telefone" maxlength="10" minlength="10">
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputCep">CEP</label>
                                <input type="text" class="form-control" id="inputCep" v-model="usuarioWrapper.usuario.cep" required maxlength="8" minlength="8">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputPais">País</label>
                                <input type="text" class="form-control" id="inputPais" v-model="usuarioWrapper.usuario.pais" required maxlength="20">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputEstado">Estado</label>
                                <input type="text" class="form-control" id="inputEstado" v-model="usuarioWrapper.usuario.uf" maxlength="2">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputRua">Rua</label>
                                <input type="text" class="form-control" id="inputRua" v-model="usuarioWrapper.usuario.rua" maxlength="50">
                            </div>
                        </div>
                        <div class="col sm-6">
                            <div class="form-group">
                                <label for="inputCidade">Cidade</label>
                                <input type="text" class="form-control" id="inputCidade" v-model="usuarioWrapper.usuario.cidade" maxlength="50">
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                     <div id="alertImgMsg" style="width: 50%; display: none" class="m-auto text-center alert alert-danger" role="alert">
                        <div class="row">
                            <div class="col-md-4 text-md-right text-center">
                                <img style="width: 50px" src="../../public/assets/alert.png" alt="">
                            </div>
                            <div id ="msg" class="col-md-6 text-center">

                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="mt-3 mx-1 btn btn-light">Atualizar</button>
                        <a data-toggle="modal" style="color: #000000" data-target="#modalAlterarSenha" class="mt-3 mx-1 btn btn-light">Alterar Senha</a>
                        <router-link to="/menu-pets" class="mt-3 mx-1 btn btn-light">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
                       
        <!-- Modal -->
        <div class="modal fade" id="modalAlterarSenha" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Título do modal</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form v-on:submit.prevent="alterarSenha">
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="inputModalSenhaAtual" class="col-form-label">Senha Atual:</label>
                                <input type="password" class="form-control" id="inputModalSenhaAtual" v-model="senhaWrapper.antigaSenha" required>
                            </div>
                            <div class="form-group">
                                <label for="inputModalSenhaNova" class="col-form-label">Senha Nova:</label>
                                <input type="password" class="form-control" id="inputModalSenhaNova" v-model="senhaWrapper.novaSenha" required>
                            </div>
                            <div class="form-group">
                                <label for="inputModalRepitaSenha" class="col-form-label">Repita a Nova Senha:</label>
                                <input type="password" class="form-control" id="inputModalRepitaSenha" v-model="repitaSenhaNova" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-warning">Alterar senha</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="atualizado" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Perfil Atualizado</h5>
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
                                <h6 class="mb-4" style="font-size: 19px">Seus dados foram atualizados com <strong style="color: #5cb85c">SUCESSO</strong> no nosso sitema!</h6>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Ok!</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="senhaAtualizada" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Senha Atualizada</h5>
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
                                <h6 class="mb-4" style="font-size: 19px">Sua senha foi atualizada com <strong style="color: #5cb85c">SUCESSO</strong>!</h6>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Ok!</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="falhaAttSenha" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Falha na Atualização</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-3 my-5 my-sm-3 text-center">
                                <img src="../../public/assets/alert.png" alt="">
                            </div>
                            <div class="col-sm-9 text-center">
                                <h6 class="mb-4" style="font-size: 19px"><strong style="color: #d9534f">Falha</strong> na atualização da senha!</h6>
                                <p>Verifique:</p>
                                <ul class="ml-0 text-left">
                                    <li class="ml-0">Se a senha informada no campo 'Senha Atual' está correta</li>
                                    <li>Se os campos 'Nova Senha' e 'Repita Nova Senha' estão iguais</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Ok!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { http } from '../services/config.js'

export default {
    name: 'menuPerfil',
    data () {
        return {
            sessaoUsuario: [],
            usuarioWrapper: 
            { 
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
            }},
            senhaWrapper: {
                novaSenha: '',
                antigaSenha: ''
            },
            repitaSenhaNova: '',
        }
    },
    mounted () {    //pra preencher nos campos os dados do usuario que está na sessao
        let vm = this;  //armazenando uma instancia do Vue
        http.get ('usuario/get/' + localStorage.getItem ('login'))
            .then (function (response){
                document.getElementById("imagem").src = response.data.imagem;
                document.getElementById("imagem").style.width  = "150px";
                
                //vm.usuarioWrapper.usuario.login = response.data.usuario.login
                //vm.usuarioWrapper.usuario.email = response.data.usuario.email
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
    methods: {
        atualizar () {
            let vm = this;
            http.post ('usuario/update/' + localStorage.getItem ('login')  , this.usuarioWrapper, {
                auth: {
                    username: localStorage.getItem ('login'),
                    password: localStorage.getItem ('password')
                }
            }).then(response=>{
                $('#atualizado').modal('show')
                $('#atualizado').on('hide.bs.modal', event => {
                vm.$router.push ('menu-pets')
                })
            })
            .catch(error=>{
                console.log(error.response)
                document.getElementById('msg').innerHTML = "Algum problema ocorreu <br> Não foi possível atualizar";
                document.getElementById('alertImgMsg').style.display = 'block' 
            })
        },
        fotoSelecionada (event) {
            
            var file = event.target.files[0]
            
            var reader = new FileReader();
            let vm = this;
            
            reader.onload = function (event) 
            {
                document.getElementById("imagem").src = event.target.result;
                document.getElementById("imagem").style.width  = "150px";
                vm.usuarioWrapper.imagem = document.getElementById("imagem").src.toString();
            
            
            };
                
            reader.readAsDataURL(file);
               
        },
        alterarSenha () {
            if (this.senhaWrapper.novaSenha == this.repitaSenhaNova) {
                let vm = this;
                http.post ('usuario/mudarSenha/' + localStorage.getItem('login'), this.senhaWrapper, {
                    auth: {
                        username: localStorage.getItem ('login'),
                        password: localStorage.getItem ('password')
                    }
                })
                    .then (response => {
                        $('#modalAlterarSenha').modal('hide')
                        $('#senhaAtualizada').modal('show')
                    })
                    .catch (error => {
                        $('#falhaAttSenha').modal('show')
                    })
            }else {
                $('#falhaAttSenha').modal('show')
            }
        }
    }
}
</script>
