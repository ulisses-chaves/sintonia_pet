import { PrincipalTemplate } from '../templates/principal-template.js'

const Principal = Vue.component ('principal', {
    template: PrincipalTemplate,
    /*mounted () {
        let alturaNav = document.getElementById('altura-nav').offsetHeight;
        let alturaTela = window.innerHeight;
        document.getElementById('imagem1').style.height = (alturaTela - alturaNav) + 'px';
        document.getElementById('imagem2').style.height = (alturaTela - alturaNav) + 'px';
    },*/
    data () {
        return {
            usuario: {
                username: '',
                senha: ''
            },
            lost: {
                username: '',
                email: ''
            }
        }
    },
    methods: {
        login () {
            let url = 'http://jsonplaceholder.typicode.com/posts';
            axios.post (url, this.usuario)
                .then (function (response) {
                    console.log (response) //apenas teste
                })
                .catch (error => {
                    console.log(error)
                })
        },
        recovery () {
            let url = 'http://jsonplaceholder.typicode.com/posts';
            axios.post (url, this.lost).then (function (response) {
                console.log (response) //apenas teste
            })
        },
    }
})


export { Principal }