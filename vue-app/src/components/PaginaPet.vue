<template>
    <div class="container">
        <div class="text-center my-5">
            <a href="/"><img style="width: 160px" src="../../public/assets/logo-titulo.png" alt=""></a> 
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="foto">Foto</label>
                <img src="" alt=""> <!--foto pet???-->
            </div>
            <div class="form-group col-md-6">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" readonly>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="raca">Raça</label>
                <input type="text" class="form-control" id="nome" readonly>
            </div>
            <div class="form-group col-md-6">
                <label for="data">Data Nascimento</label>
                <input type="date" class="form-control" id="data" readonly>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="peso">Peso</label>
                <input type="text" class="form-control" id="peso" readonly>
            </div>
            <div class="form-group col-md-6">
                <label for="idade">Idade</label>
                <input type="text" class="form-control" id="idade" readonly>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="sexo">Sexo</label>
                <input type="text" class="form-control" id="sexo" readonly>
            </div>
            <div class="form-group col-md-6">
                <label for="cor">Cor</label>
                <input type="text" class="form-control" id="cor" readonly>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="dono">Dono</label>
                <input type="text" class="form-control" id="dono" readonly>
            </div>
            <div class="form-group col-md-6">
                <label for="rg">RG Pet</label>
                <input type="text" class="form-control" id="rg" readonly>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="telefone">Telefone</label>
                <input type="text" class="form-control" id="telefone" readonly>
            </div>
            <div class="form-group col-md-6">
                <label for="cep">CEP</label>
                <input type="text" class="form-control" id="cep" readonly>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="estado">Estado</label>
                <input type="text" class="form-control" id="estado" readonly>
            </div>
            <div class="form-group col-md-6">
                <label for="cidade">Cidade</label>
                <input type="text" class="form-control" id="cidade" readonly>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="bairro">Bairro</label>
                <input type="text" class="form-control" id="bairro" readonly>
            </div>
            <div class="form-group col-md-6">
                <label for="endereco">Endereco</label>
                <input type="text" class="form-control" id="endereco" readonly>
            </div>
        </div>
        <rodape></rodape>
    </div>
</template>
<script>
import RodapeVue from '../views/Rodape.vue';
export default {
    name: 'paginaPet',
    components: {
        'rodape': RodapeVue,
    }
}
</script>
