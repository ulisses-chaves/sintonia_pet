import { CadastroTemplate } from '../templates/cadastro-template.js'

const Cadastro= Vue.component ('cadastro', {
    template: CadastroTemplate,
    data () {
        return {
            usuario: {
                nome: '',
                sobrenome: '',
                telefone: '',
                celular: '',
                data: '',
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
                confirmarSenha: '',
            }
        }
    },
    methods: {
        cadastro () {
            let url = 'http://jsonplaceholder.typicode.com/posts';
            axios.post (url, this.usuario)
                .then (function (response) {
                    console.log (response) //teste
                })
        },
        preencherCep () {
            let url = 'http://api.postmon.com.br/v1/cep/' + this.usuario.cep;
            let vm = this;  //armazenando a instância do Vue
            axios.get(url)
                .then(function (response) {
                    vm.usuario.pais = 'Brasil';
                    vm.usuario.cidade = response.data.cidade;
                    vm.usuario.bairro = response.data.bairro;
                    vm.usuario.rua = response.data.logradouro;
                })
                .catch (error => {
                    // deixando o catch vazio pra n dar erro no console
                })
            
        },
    }
})

export { Cadastro}