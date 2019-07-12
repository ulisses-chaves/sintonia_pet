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
            <div class="text-center">
                <img  class="m-auto pt-4" src="../../public/assets/perfil.png" style="width: 64px" alt=""  id='imagem'>
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
                            <input type="text" class="form-control" id="inputRaca" v-model="petWrapper.pet.raca" maxlength="15" required placeholder="A raça do seu Pet">
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
                            <label for="inputNaturalidade">Naturalidade</label>
                            <input type="text" class="form-control" id="inputNaturalidade" v-model="petWrapper.pet.naturalidade" maxlength="15" required placeholder="Naturalidade do Pet">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputPeso">Peso</label>
                            <input type="text" class="form-control" id="inputPeso" name="numbers" pattern="[0-9]+$" v-model="petWrapper.pet.peso" maxlength="3" required placeholder="Apenas números">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="inputFiliacao">Filiação</label>
                            <input type="text" class="form-control" id="inputFiliacao" v-model="petWrapper.pet.filiação" maxlength="60" required placeholder="Pais do Pet">
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
        <!-- MODAL -->
        <div class="modal fade" id="cadastrado" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Pet Cadastrado</h5>
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
                                <h6 class="mb-4" style="font-size: 19px">Seu pet <strong class="color-warning">{{petWrapper.pet.nome}}</strong>, foi cadastrado com <strong style="color: #5cb85c">SUCESSO</strong> no nosso sitema!</h6>
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
import { http } from '../services/config';
export default {
    name: 'cadastroPet',
    data () {
        return {
            petWrapper: {
                imagem: null,    
                pet: {
                    numero_rg: null,
                    rg_dono: null,
                    nome: null,
                    cor_pelugem: null,
                    raca: null,
                    idade: -1,
                    sexo: 'z',
                    porte: null,
                    data_nascimento: null,
                    castrado: 'z',
                    caminho_foto: null,
                    data_exp: null,
                    filiação: null,
                    peso: -1.0,
                    naturalidade: null
                }
            }
        }
    },
    methods: {
         fotoSelecionada (event) {
            
            var file = event.target.files[0]
            
            var reader = new FileReader();
            let vm = this;
            
            reader.onload = function (event)
            {
                document.getElementById("imagem").src = event.target.result;
                document.getElementById("imagem").style.width  = "150px";
                vm.petWrapper.imagem = document.getElementById("imagem").src.toString();
            };
            
            reader.readAsDataURL(file);
               
        },
        
        cadastro () {
            this.petWrapper.pet.data_exp = Date.now();
            let vm = this;
            http.post ('pet/add/' + localStorage.getItem ('login'), this.petWrapper, {
                auth: {
                    username: localStorage.getItem ('login'),
                    password: localStorage.getItem ('password')
                }
            })
                .then (function (response) {
                    $('#cadastrado').modal('show')
                        $('#cadastrado').on('hide.bs.modal', event => {
                            vm.$router.push ('menu-pets')
                        })
                })
                .catch (error => {
                    console.log (error.response)
                    document.getElementById('msg').innerHTML = "Algum problema ocorreu <br> Não foi possível cadastrar";
                    document.getElementById('alertImgMsg').style.display = 'block'
                })
        }
    }
}
</script>
