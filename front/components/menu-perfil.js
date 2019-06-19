import { MenuPerfilTemplate } from "../templates/menu-perfil-template.js";


const MenuPerfil = Vue.component ('menuPerfil', {
    template: MenuPerfilTemplate,
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
})

export { MenuPerfil }