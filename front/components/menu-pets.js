import { MenuPetsTemplate } from "../templates/menu-pets-template.js";


const MenuPets = Vue.component ('menuPets', {
    template: MenuPetsTemplate,
    methods: {
        emitClick (opcao) {
            this.$emit ('emit-click', opcao)
        },
        imprimirRG () {
            let img = document.getElementById("minhaImagem").innerHTML; 
            let rgPet = window.open ('', '', 'height=660,width=375');
            rgPet.document.write (img);
            rgPet.document.close ();
            rgPet.print ();
        }
    }
})

export { MenuPets }