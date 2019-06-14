import { PrincipalTemplate } from '../templates/principal-template.js'

const Principal = Vue.component ('principal', {
    template: PrincipalTemplate,
    mounted () {
        let alturaNav = document.getElementById('altura-nav').offsetHeight;
        let alturaTela = window.innerHeight;
        document.getElementById('imagem1').style.height = (alturaTela - alturaNav) + 'px';
        document.getElementById('imagem2').style.height = (alturaTela - alturaNav) + 'px';
    },
})


export { Principal }