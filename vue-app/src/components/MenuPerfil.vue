<template>
    <div class="container my-5">
        <div class="row mb-5">
            <div class="col-sm-6 text-center text-sm-right">
                <img src="../../public/assets/perfil.png" alt="">
            </div>
            <div style="vertical-align: middle" class="col-sm-6 text-center text-sm-left pl-0 mt-3">
                <h1>Perfil</h1>
            </div>
        </div>
        <div class="color-brown card m-auto"  style="width: 85%; background: #fdc536">
            <h2 class="text-center my-3">Edite ou atualize seus dados</h2>
            <div class="dropdown-divider"></div>
            <img class="m-auto py-3" src="../../public/assets/perfil.png" style="width: 64px" alt="">
            <div class="card-body" style="background-image: linear-gradient(to bottom , #fdc536, #fdad00);">
                <form v-on:submit.prevent="atualizar">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputLogin">Login</label>
                                <input type="text" class="form-control" id="inputLogin" v-model="usuario.login">
                            </div>
                        </div>
                        <div class="col-sm-6">   
                            <div class="form-group">
                                <label for="inputSenha">Senha</label>
                                <input type="password" class="form-control" id="inputSenha" v-model="usuario.senha">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" v-model="usuario.email">
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputNome">Nome</label>
                                <input type="text" class="form-control" id="inputNome" v-model="usuario.nome">
                            </div>
                        </div>
                        <div class="col-sm-6">   
                            <div class="form-group">
                                <label for="inputSobrenome">Sobrenome</label>
                                <input type="password" class="form-control" id="inputSobrenome" v-model="usuario.sobrenome">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inputSexo">Sexo</label>
                                <select class="custom-select mr-sm-2" id="inputSexo" v-model="usuario.sexo">
                                    <option selected>Escolha...</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="outro">Outro</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">   
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1" style="width: 191.05px;">
                                <label class="mr-sm-2" for="inputEstadoCivil">Estado Civil</label>
                                <select class="custom-select mr-sm-2" id="inputEstadoCivil" v-model="usuario.estadoCivil">
                                    <option selected>Escolha...</option>
                                    <option value="solteiro">Solteiro(a)</option>
                                    <option value="casado">Casado(a)</option>
                                    <option value="outro">Outro</option>
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
                                    <input type="file" class="m-0" accept="image/jpeg, image/png" v-on:change="fotoSelecionada">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputData">Data de Nascimento</label>
                                <input type="date" class="form-control" id="inputData" v-model="usuario.data">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputTelefone">Telefone</label>
                                <input type="text" class="form-control" id="inputTelefone" v-model="usuario.telefone">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputCelular">Celular</label>
                                <input type="text" class="form-control" id="inputCelular" v-model="usuario.celular">
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputCep">CEP</label>
                                <input type="text" class="form-control" id="inputCep" v-model="usuario.cep">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputPais">País</label>
                                <input type="text" class="form-control" id="inputPais" v-model="usuario.pais">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="inputCidade">Cidade</label>
                                <input type="text" class="form-control" id="inputCidade" v-model="usuario.cidade">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputRua">Rua</label>
                                <input type="text" class="form-control" id="inputRua" v-model="usuario.rua">
                            </div>
                        </div>
                        <div class="col sm-6">
                            <div class="form-group">
                                <label for="inputCidade">Cidade</label>
                                <input type="text" class="form-control" id="inputCidade" v-model="usuario.cidade">
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div>
                        <button v-on:click.stop.prevent="" class="mt-2 mx-1 btn btn-light">Voltar</button>
                        <button class="mt-2 btn btn-light">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menuPerfil',
    data () {
        return {
            sessaoUsuario: [],
            usuario: {
                nome: '',
                sobrenome: '',
                telefone: '',
                celular: '',
                sexo: '',
                estadoCivil: '',
                cep: '',
                pais: '',
                cidade: '',
                bairro: '',
                rua: '',
                email: '',
                login: '',
                senha: '',
                foto: '',
                data: '',
            }
        }
    },
    mounted () {    //pra preencher nos campos os dados do usuario que está na sessao
        let url = 'http://jsonplaceholder.typicode.com/posts/1';
        let vm = this;  //armazenando uma instancia do Vue
        axios.get (url)
            .then (function (response){
                vm.usuario.nome = response.data.nome
                vm.usuario.sobrenome = response.data.sobrenome
                vm.usuario.telefone = response.data.telefone
                vm.usuario.celular = response.data.celular
                vm.usuario.sexo = response.data.sexo
                vm.usuario.estadoCivil = response.data.estadoCivil
                vm.usuario.cep = response.data.cep
                vm.usuario.pais = response.data.pais
                vm.usuario.cidade = response.data.cidade
                vm.usuario.bairro = response.data.bairro
                vm.usuario.rua = response.data.rua
                vm.usuario.email = response.data.email
                vm.usuario.login = response.data.login
                vm.usuario.senha = response.data.senha
                vm.usuario.data = response.data.data
                vm.usuario.foto = response.data.foto
            })
            .catch (error => {
                
            })
    },
    methods: {
        atualizar () {
            //let url = 'http://jsonplaceholder.typicode.com/put';
            //axios.put (url, this.usuario).then (function (response) {

           // })
        },
        fotoSelecionada (event) {
            //this.foto.src = ''
            //this.foto = event.target.files[0]
        }
    }
}
</script>
