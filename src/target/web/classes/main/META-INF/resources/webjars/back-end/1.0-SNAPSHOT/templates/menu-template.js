const MenuTemplate = `
    <div>
        <navbarLogin v-on:emit-click="getOpcao"></navbarLogin>
            <menuPets v-on:emit-click="getOpcao" v-show="opcao === 'telaPets'"></menuPets>
            <cadastroPet v-show="opcao === 'telaCadastroPets'"></cadastroPet>
            <menuPerfil v-show="opcao === 'telaPerfil'"></menuPerfil>
            <div v-show="opcao === 'telaContato'">
                <h2 class="text-center h1 mt-5">Fale Conosco</h2>
                <contato></contato>
            </div>
            <comoUsar v-show="opcao === 'telaComoUsar'"></comoUsar>
        <rodape></rodape>
    </div>

`

export { MenuTemplate }