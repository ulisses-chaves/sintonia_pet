import { LoginTemplate } from '../templates/login-template.js'

const Login = Vue.component ('login', {
    template: LoginTemplate,
    mounted () {
        let alturaNav = document.getElementById('altura-nav').offsetHeight;
        let alturaTela = window.innerHeight;
         window.addEventListener('load', () => {
            document.getElementById('imagem1').style.height = (alturaTela - alturaNav) + 'px';
            document.getElementById('imagem2').style.height = (alturaTela - alturaNav) + 'px';
        })    
    }
})


export { Login }