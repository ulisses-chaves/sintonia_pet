import { MenuTemplate } from '../templates/menu-template.js'

const Menu = Vue.component ('menuPrincipal', {
    template: MenuTemplate,
    data() {
        return {
            opcao: 'telaPets'
        }
    },
    methods: {
        getOpcao (opcao) {
            this.opcao = opcao
        }
    }
})

export { Menu }