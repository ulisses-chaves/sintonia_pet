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
                            <input type="text" class="form-control" id="inputNome" v-model="pet.nome" minlength="2" maxlength="15" required placeholder="Nome do pet">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputPelugem">Cor da Pelugem</label>
                            <input type="text" class="form-control" id="inputPelugem" v-model="pet.cor_pelugem" minlength="2" maxlength="15" required placeholder="Cor do pelo"> 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputRaca">Espécie/Raça</label>
                            <input type="text" class="form-control" id="inputRaca" v-model="pet.raca" minlength="2" maxlength="15" required placeholder="Sua raça">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputIdade">Idade</label>
                            <input type="text" class="form-control" id="inputIdade" name="numbers" pattern="[0-9]+$" v-model="pet.idade" maxlength="3" required placeholder="Apenas números">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inputSexo">Sexo</label>
                                <select class="custom-select mr-sm-2" id="inputSexo" v-model="pet.sexo">
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
                                <select class="custom-select mr-sm-2" id="inputCastrado" v-model="pet.castrado">
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
                                <select class="custom-select mr-sm-2" id="inputPorte" v-model="pet.porte">
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
                            <input type="date" class="form-control" id="inputData" v-model="pet.data_nascimento" required>
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
            pet: {
                nome: '',
                cor_pelugem: '',
                raca: '',
                idade: '',
                sexo: 'M',
                porte: 'P',
                data_nascimento: '',
                rg_dono: '12',
                numero_rg: '2',
                castrado: 'S',
                caminho_foto: null
            }
        }
    },
    mounted() {
        
    },
    methods: {
        cadastro () {
            let vm = this;
            http.post ('pet/add/' + localStorage.getItem ('login'), this.pet)
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
