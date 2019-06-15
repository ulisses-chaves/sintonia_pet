import { MenuPetsTemplate } from "../templates/menu-pets-template.js";


const MenuPets = Vue.component ('menuPets', {
    template: MenuPetsTemplate,
    methods: {
        emitClick (opcao) {
            this.$emit ('emit-click', opcao)
        }
    }
})

export { MenuPets }