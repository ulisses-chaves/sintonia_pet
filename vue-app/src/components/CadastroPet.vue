<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-sm-4 m-auto">
                    <hr style="width: 40%;" class="pt-1 bg-warning mr-0">
                    <h1 class="text-center color-brown">Cadastre seu Pet</h1>
                    <hr style="width: 40%;" class="pt-1 bg-warning ml-0">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col mt-5">
                    <h3 class="text-center">Preencha os dados para o cadastro</h3>
                    <hr>
                </div>
            </div>
            <form v-on:submit.prevent="cadastro">
                <div class="row mt-5">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputNome">Nome</label>
                            <input type="text" class="form-control" id="inputNome" v-model="petWrapper.pet.nome" maxlength="15" required placeholder="Nome do pet">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputPelugem">Cor da Pelugem</label>
                            <input type="text" class="form-control" id="inputPelugem" v-model="petWrapper.pet.cor_pelugem" maxlength="15" required placeholder="Cor do pelo"> 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputRaca">Espécie/Raça</label>
                            <input type="text" class="form-control" id="inputRaca" v-model="petWrapper.pet.raca" maxlength="15" required placeholder="Sua raça">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputIdade">Idade</label>
                            <input type="text" class="form-control" id="inputIdade" name="numbers" pattern="[0-9]+$" v-model="petWrapper.pet.idade" maxlength="2" required placeholder="Apenas números">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputRaca">Espécie/Raça</label>
                            <input type="text" class="form-control" id="inputRaca" v-model="petWrapper.pet.raca" maxlength="15" required placeholder="Sua raça">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputIdade">Idade</label>
                            <input type="text" class="form-control" id="inputIdade" name="numbers" pattern="[0-9]+$" v-model="petWrapper.pet.idade" maxlength="2" required placeholder="Apenas números">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inputSexo">Sexo</label>
                                <select class="custom-select mr-sm-2" id="inputSexo" v-model="petWrapper.pet.sexo">
                                    <option value="M">Macho</option>
                                    <option value="F">Fêmea</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inputCastrado">Castrado</label>
                                <select class="custom-select mr-sm-2" id="inputCastrado" v-model="petWrapper.pet.castrado">
                                    <option value="S">Sim</option>
                                    <option value="N">Não</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inputPorte">Porte</label>
                                <select class="custom-select mr-sm-2" id="inputPorte" v-model="petWrapper.pet.porte">
                                    <option value="P">Pequeno</option>
                                    <option value="M">Médio</option>
                                    <option value="G">Grande</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputData">Data de Nascimento</label>
                            <input type="date" class="form-control" id="inputData" v-model="petWrapper.pet.data_nascimento" required>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group mt-4 text-right text-sm-center">
                            <label class="mr-4" for="inputFoto">Escolha uma foto</label>
                            <input type="file" accept="image/png, image/jpeg" v-on:change="fotoSelecionada">
                        </div>
                    </div>
                </div>
                <div id="alertImgMsg" style="width: 50%; display: none" class="m-auto text-center alert alert-danger" role="alert">
                    <div class="row">
                        <div class="col-md-4 text-md-right text-center">
                            <img style="width: 50px" src="../../public/assets/alert.png" alt="">
                        </div>
                        <div id ="msg" class="col-md-6 text-center">

                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-sm-5 text-sm-right text-center">
                        <img src="../../public/assets/gato-cinza-sentado.png" alt="">
                    </div>
                    <div class="col-sm-2 mt-sm-5 text-center">
                        <button class="mt-4 btn btn-warning">Cadastrar Pet</button>
                    </div>
                    <div class="col-5 mt-3 text-left d-none d-sm-block">
                        <img style="width: 115px" src="../../public/assets/cachorro-esquerda.png" alt="">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { http } from '../services/config';
export default {
    name: 'cadastroPet',
    data () {
        return {
            petWrapper: {
                image: '',    
                pet: {
                    nome: '',
                    cor_pelugem: '',
                    raca: '',
                    idade: '',
                    sexo: 'M',
                    porte: 'P',
                    data_nascimento: '',
                    rg_dono: '',
                    numero_rg: '',
                    castrado: 'S',
                    caminho_foto: '',
                    data_exp: '',
                    filiação: '',
                    peso: '',
                    naturalidade: ''
                }
            }
        }
    },
    mounted() {
        let vm = this;
        http.get('usuario/get/' + localStorage.getItem ('login'))
            .then (function (response) {
                vm.petWrapper.pet.rg_dono = response.data.usuario.rg
            })
            .catch (error => {
                console.log (error)
            });
    },
    methods: {
        cadastro () {
            this.data_exp = Date.now;
            let vm = this;
            http.post ('pet/add/' + localStorage.getItem ('login'), this.petWrapper, {
                auth: {
                    username: localStorage.getItem ('login'),
                    password: localStorage.getItem ('password')
                }
            })
                .then (function (response) {
                    alert ('pet cadastrado');
                    vm.$router.push ('menu-pets')
                })
                .catch (error => {
                    console.log (error)
                    document.getElementById('msg').innerHTML = "Algum problema ocorreu <br> Não foi possível cadastrar";
                    document.getElementById('alertImgMsg').style.display = 'block'
                })
        },
        fotoSelecionada (event) {
            //this.foto.src = ''
            this.foto = event.target.files[0]
        },
    }
}
</script>
