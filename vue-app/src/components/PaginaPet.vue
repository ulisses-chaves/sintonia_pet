<template>
    <div class="container">
        <div class="">
            <a href="/"><img style="width: 160px" src="../../public/assets/logo-titulo.png" alt=""></a> 
        </div>
        <img src="" alt=""> <!--foto pet???-->
        <div class="">
            <div class="form-group col-md-6">
                <label for="nome">Nome: </label>
                <label id="nome" th:text="${nome}"></label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="raca">Raça</label>
                <label class="form-control" id="nome" readonly th:text="${raca}"></label>
            </div>
            <div class="form-group col-md-6">
                <label for="data">Data Nascimento</label>
                <label class="form-control" id="data" readonly th:text="${data_nascimento}"></label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="peso">Peso</label>
                <label class="form-control" id="peso" readonly th:text="${peso}"></label>
            </div>
            <div class="form-group col-md-6">
                <label for="idade">Idade</label>
                <label class="form-control" id="idade" readonly th:text="${idade}"></label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="sexo">Sexo</label>
                <label class="form-control" id="sexo" readonly th:text="${sexo}"></label>
            </div>
            <div class="form-group col-md-6">
                <label for="cor">Cor</label>
                <label class="form-control" id="cor" readonly th:text="${cor_pelugem}"></label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="dono">Dono</label>
                <label class="form-control" id="dono" readonly th:text="${dono_rg}"></label>
            </div>
            <div class="form-group col-md-6">
                <label for="rg">RG Pet</label>
                <label class="form-control" id="rg" readonly th:text="${numero_rg}"></label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="telefone">Telefone</label>
                <label class="form-control" id="telefone" readonly th:text="${numero_fixo}"></label>
            </div>
            <div class="form-group col-md-6">
                <label for="cep">CEP</label>
                <label class="form-control" id="cep" readonly th:text="${cep}"></label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="estado">Estado</label>
                <label class="form-control" id="estado" readonly th:text="${estado}"></label>
            </div>
            <div class="form-group col-md-6">
                <label for="cidade">Cidade</label>
                <label class="form-control" id="cidade" readonly th:text="${cidade}"></label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="bairro">Bairro</label>
                <label class="form-control" id="bairro" readonly th:text="${bairro}"></label>
            </div>
            <div class="form-group col-md-6">
                <label for="endereco">Endereco</label>
                <label class="form-control" id="endereco" readonly th:text="${rua}"></label>
            </div>
        </div>
        <rodape></rodape>
    </div>
</template>
<script>
import RodapeVue from '../views/Rodape.vue';
import { http } from '../services/config';
export default {
    name: 'paginaPet',
    components: {
        'rodape': RodapeVue,
    },
    data () {
        return { 
            petWrapper: {
                pet: {},
                imagem: ''
            }
        }
    },
}
</script>

<style>
    .container { padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; } @media (min-width: 768px) { .container { width: 750px; } } @media (min-width: 992px) { .container { width: 970px; } } @media (min-width: 1200px) { .container { width: 1170px; } }
</style>

