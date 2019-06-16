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
            axios.post (url, this.usuario).then (function (response) {
                console.log (response)
            })
        },
    }
})

export { Cadastro}