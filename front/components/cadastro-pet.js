import { CadastroPetTemplate } from "../templates/cadastro-pet-template.js";


const CadastroPet = Vue.component ('cadastroPet', {
    template: CadastroPetTemplate,
    data () {
        return {
            pet: {
                nome: '',
                pelugem: '',
                raca: '',
                idade: '',
                sexo: '',
                porte: '',
                data: '',
                foto: null
            }
        }
    },
    methods: {
        cadastro () {
            let url= 'http://jsonplaceholder.typicode.com/posts';
            axios.post (url, this.pet).then (function (response) {
                console.log(response)
            })
        },
        fotoSelecionada (event) {
            //this.foto.src = ''
            this.foto = event.target.files[0]
        }
    }
})

export { CadastroPet }