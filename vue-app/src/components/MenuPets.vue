<template>
    <div>
        <div class="container mt-4">
        <div class="row">
            <div class="col-sm-6 text-center text-sm-right">
                <img src="../../public/assets/cat.png" alt="">
            </div>
            <div class="col-sm-6 text-center text-sm-left pl-0 mt-3">
                <h1>Pets</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-9 m-auto">
                <ul style="list-style: none">
                    <li class="mb-3">
                        <router-link style="color: black" v-bind:to="{ name: 'cadastroPet', params: { name: 'cadastro-pet' } }">
                            <img style="width: 25px" src="../../public/assets/plus.png" alt="">
                            <span class="ml-2" style="vertical-align: middle">Adicionar Pet</span>
                        </router-link>
                    </li>
                    <li>
                        <div v-for="pet of pets" :key="pet.id" class="card">
                            <img class="card-img-top" src="../../public/assets/ralf.jpg" alt="">
                            <div class="card-body">
                                <h4 class="card-title">{{ pet.nome }}</h4>
                                <h6 class="card-subtitle mb-2 text-muted">{{ pet.raca }}</h6>
                                <p class="card-text">Alguma frase?</p>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                        <button class="btn btn-link card-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Características do Pet
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><strong>Idade:</strong> {{pet.idade}}</li>
                                                <li v-if="pet.sexo === 'M'" class="list-group-item"><strong>Sexo:</strong> Macho</li>
                                                <li v-else class="list-group-item"><strong>Sexo:</strong> Fêmea</li>
                                                <li v-if="pet.porte === 'P'" class="list-group-item"><strong>Porte:</strong> Pequeno</li>
                                                <li v-if="pet.porte === 'M'" class="list-group-item"><strong>Porte:</strong> Médio</li>
                                                <li v-if="pet.porte === 'G'" class="list-group-item"><strong>Porte:</strong> Grande</li>
                                                <li class="list-group-item"><strong>Data de Nascimento:</strong> {{ pet.data_nascimento }}</li>
                                                <li class="list-group-item"><strong>Cor da Pelugem:</strong> {{pet.cor_pelugem}}</li>
                                                <li class="list-group-item"><strong>Peso:</strong> {{pet.peso}}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                        <button class="btn btn-link card-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Informações do Cadastro
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><strong>Número do RG:</strong> {{pet.numero_rg}}</li>
                                                <li class="list-group-item"><strong>RG do Dono:</strong> {{pet.rg_dono}}</li>
                                                <li class="list-group-item"><strong>Data de Expedição:</strong> {{ pet.data_exp }}</li>
                                                <li class="list-group-item"><strong>QR code ??:</strong> imagem</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-muted">
                                <ul class="p-0">
                                    <li class="d-inline-block mx-2">
                                        <a v-on:click.prevent="pegarPet(pet)" data-toggle="modal" data-target="#rg" class="card-link" href="">
                                            <ul class="p-0">
                                                <li class="d-inline mx-2"><img class="m-0 p-0" style="width: 64px" src="../../public/assets/rg.png" alt=""></li>
                                                <li class="d-inline">RG</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li class="d-inline-block mx-2">
                                        <a data-toggle="modal" data-target="#edit" class="card-link" href="">
                                            <ul class="p-0">
                                                <li class="d-inline mx-2"><img style="width: 45px" class="m-0 p-0" src="../../public/assets/pen.png" alt=""></li>
                                                <li class="d-inline">Editar</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li class="d-inline-block mx-2">
                                        <a v-on:click.prevent="pegarPet(pet)" data-toggle="modal" data-target="#delete" class="card-link" href="">
                                            <ul class="p-0">
                                                <li class="d-inline mx-2"><img style="width: 45px" class="m-0 p-0" src="../../public/assets/delete.png" alt=""></li>
                                                <li class="d-inline">Deletar</li>
                                            </ul>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="mt-5 text-center">
                        <router-link href="" class="card-link" v-bind:to="{ name: 'cadastroPet', params: { name: 'cadastro-pet' } }">
                            <img style="width: 128px" src="../../public/assets/plus.png" alt="">
                            <p style="font-size: 30px; color: black" class="my-2">Adicionar Pet</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="rg" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">RG Pet</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div v-if="petSelecionado.sexo === 'M'" style="position: relative" id="minhaImagem" class="col text-center">
                            <img class="rgPet" style="width: 70%" src="../../public/assets/rgPetM.jpeg" alt="">
                        </div>
                        <div v-if="petSelecionado.sexo === 'F'" style="position: relative" id="minhaImagem" class="col text-center">
                            <img class="rgPet" style="width: 70%" src="../../public/assets/rgPetF.jpeg" alt="">
                        </div>
                        <label class="nomePet positions" for="">{{petSelecionado.nome}}</label>
                        <label class="dataPet positions" for="">{{petSelecionado.data_nascimento}}</label>
                        <label class="dataExp positions" for="">{{petSelecionado.data_exp}}</label>
                        <label class="filiacao positions" for="">{{petSelecionado.filiação}}</label>
                        <label class="peso positions" for="">{{petSelecionado.peso}}</label>
                        <label class="naturalidade positions" for="">{{petSelecionado.naturalidade}}</label>
                        <label class="racaPet positions" for="">{{petSelecionado.raca}}</label>
                        <label class="sexoPet positions" for="">{{petSelecionado.sexo}}</label>
                        <label class="pelugemPet positions" for="">{{petSelecionado.cor_pelugem}}</label>
                        <label class="usuario positions" for="">{{user.nome}}</label>
                        <label class="rua positions" for="">{{user.rua}}</label>
                        <label class="cidade positions" for="">{{user.cidade}}</label>
                        <label class="bairro positions" for="">{{user.bairro}}</label>
                        <label class="uf positions" for="">{{user.uf}}</label>
                        <label class="cep positions" for="">{{user.cep}}</label>
                        <label class="telefone positions" for="">{{user.numero_fixo}}</label>
                    </div>
                </div>
                <div class="modal-footer m-auto">
                    <ul>
                        <li class="d-inline-block mx-2">
                            <a v-on:click.stop.prevent="imprimirRG" href="">
                                <img style="width: 25px" src="../../public/assets/printer.png" alt="Impressora">
                                Imprimir RG
                            </a>
                        </li>
                        <li class="d-inline-block mx-2">
                            <a href="">
                                <img style="width: 25px" src="../../public/assets/sendEmail.png" alt="email">
                                Enviar para o email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="edit" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Editar Dados do Pet</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form v-on:submit.prevent="atualizarPet">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="nome">Nome</label>
                                    <input type="text" class="form-control" id="nome" required v-model="petAlterado.pet.nome" minlength="2" maxlength="15">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="pelugem">Cor da Pelugem</label>
                                    <input type="text" class="form-control" id="pelugem" required v-model="petAlterado.pet.cor_pelugem" minlength="2" maxlength="15">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="raca">Espécie/Raça</label>
                                    <input type="text" class="form-control" id="raca" required v-model="petAlterado.pet.raca" minlength="2" maxlength="15">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="idade">Idade</label>
                                    <input type="text" class="form-control" id="idade" required v-model="petAlterado.pet.idade" name="numbers" pattern="[0-9]+$" maxlength="3">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-row align-items-center">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2 color-brown" for="inlineFormCustomSelect">Sexo</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="petAlterado.pet.sexo">
                                            <option value="M">Macho</option>
                                            <option value="F">Fêmea</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-row align-items-center">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2 color-brown" for="inlineFormCustomSelect">Porte</label>
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="petAlterado.pet.porte">
                                            <option value="P">Pequeno</option>
                                            <option value="M">Médio</option>
                                            <option value="G">Grande</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="data">Data de Nascimento</label>
                                    <input type="date" class="form-control" id="data" required v-model="petAlterado.pet.data_nascimento">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-row align-items-center">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2 color-brown" for="inputCastrado">Castrado</label>
                                        <select class="custom-select mr-sm-2" id="inputCastrado" v-model="petAlterado.pet.castrado">
                                            <option value="S">Sim</option>
                                            <option value="N">Não</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="inputNaturalidade">Naturalidade</label>
                                    <input type="text" class="form-control" id="inputNaturalidade" required v-model="petAlterado.pet.naturalidade" minlength="2" maxlength="15">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="inputFiliacao">Filiação</label>
                                    <input type="text" class="form-control" id="inputFiliacao" required v-model="petAlterado.pet.filiação" maxlength="30">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label style="color: #7e4732" for="inputPeso">Peso</label>
                                    <input type="text" class="form-control" id="inputPeso" required v-model="petAlterado.pet.idade" name="numbers" pattern="[0-9]+$" maxlength="3">
                                </div>
                            </div>
                            <div class="col-sm-6 mt-4 text-sm-right text-center">
                                <div class="form-group mt-3">
                                    <a href="" class="card-link">Mudar Foto do Pet <img style="width: 18px" src="../../public/assets/download.png" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button v-on:click.stop.prevent="atualizarPet" style="color: #7e4732" type="button" class="btn btn-warning">Salvar mudanças</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Excluir Pet do seu Perfil</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-3 my-5 my-sm-3 text-center">
                            <img src="../../public/assets/delete.png" alt="">
                        </div>
                        <div class="col-sm-9 text-center text-sm-left">
                            <h6 style="font-size: 19px">Tem certeza que deseja excluir?</h6>
                            <p>Clicando em <strong style="color: #d9534f">deletar</strong>, fique ciente que você <strong style="color: #d9534f">PERDERÁ</strong> os dados cadastrados do seu Pet e só poderá tê-los de volta, cadastrando novamente!</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Cancelar</button>
                    <button type="button" v-on:click.stop.prevent="excluirPet" class="btn btn-danger">Deletar</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { http } from '../services/config';

export default {
    name: 'menuPets',
    data () {
        return {
            user: {},
            pets: [],
            petSelecionado: {},
            petAlterado: {
                image: '',
                pet: {
                    nome: '',
                    cor_pelugem: '',
                    raca: '',
                    idade: '',
                    sexo: 'M',
                    porte: 'P',
                    data_nascimento: '',
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
    mounted () {
        let vm = this;
        http.get ('pet/all/' + localStorage.getItem('login'))
            .then (function (response) {
                vm.pets = response.data
            })
        http.get ('usuario/get/' + localStorage.getItem ('login'))
            .then (function (response) {
                vm.user = response.data.usuario
            })
            .catch(error => {
                console.log (error)
            })
    },
    methods: {
        atualizarPet() {
            let vm = this;
            http.put ('pet/update/' + localStorage.getItem ('login'), this.petSelecionado, {
                auth: {
                    username: localStorage.getItem ('login'),
                    password: localStorage.getItem ('password')
                }
            })
                .then ( function (response) {
                    alert ('pet atualizado');
                    vm.$router.push ('menu-pets')
                })
                .catch (error => {
                    console.log (error)
                })
        },
        imprimirRG () {
            let img = document.getElementById("minhaImagem").innerHTML; 
            let rgPet = window.open ('', '', 'height=500,width=500');
            rgPet.document.write (img);
            rgPet.document.close ();
            rgPet.print ();
        },
        pegarPet (pet) {
            this.petSelecionado = pet;
        },
        excluirPet () {
            let vm = this;
            http.delete ('pet/delete/' + localStorage.getItem ('login'), { 
                data: this.petSelecionado, 
                auth: {
                    username: localStorage.getItem ('login'),
                    password: localStorage.getItem ('password')
                }
            })
                .then (function (response) {
                    alert ('pet excluido');
                })
                .catch (error => {
                    console.log (error)
                }) 
        }
    }
}
</script>

<style scoped>
    .rgPet {
        z-index: 1;
    }
    .positions { 
        z-index: 2;
        position: absolute;
        font-size: 13px;
    }
    .nomePet {
        margin: 223px 0 0 150px
    }
    .dataPet {
        margin: 242px 0 0 180px
    }
    .dataExp {
        margin: 242px 0 0 298px
    }
    .filiacao {
        margin: 262px 0 0 160px
    }
    .peso {
        margin: 262px 0 0 286px
    }
    .naturalidade {
        margin: 282px 0 0 185px
    }
    .racaPet {
        margin: 300px 0 0 148px
    }
    .sexoPet {
        margin: 300px 0 0 286px
    }
    .pelugemPet {
        margin: 300px 0 0 332px
    }
    .usuario {
        margin: 318px 0 0 168px
    }
    .rua {
        margin: 345px 0 0 170px
    }
    .cidade {
        margin: 364px 0 0 155px
    }
    .bairro {
        margin: 364px 0 0 295px
    }
    .uf {
        margin: 382px 0 0 138px
    }
    .cep {
        margin: 382px 0 0 190px
    }
    .telefone {
        margin: 382px 0 0 280px
    }
</style>
