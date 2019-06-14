import { NavbarLoginTemplate } from "../templates/navbar-login-template.js";

const NavbarLogin = Vue.component ('navbarLogin', {
    template: NavbarLoginTemplate,
    methods: {
        emitClick (opcao) {
            this.$emit ('emit-click', opcao)
        }
    }
})

export { NavbarLogin }