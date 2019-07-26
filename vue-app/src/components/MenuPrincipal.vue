<template>
    <div>
        <navbarLogin></navbarLogin>
        <div v-if="this.$route.name === 'contato'">
                <h2 class="text-center h1 mt-5">Fale Conosco</h2>
            </div>
        <router-view></router-view>
        <rodape></rodape>
    </div>
</template>

<script>
import NavbarLoginVue from '../views/NavbarLogin.vue';
import RodapeVue from '../views/Rodape.vue';
import { http, getLogin } from '../services/config';
import { setTimeout } from 'timers';

export default {
    name: 'menu-principal',
    data () {
        return {
            rota: ''
        }
    },
    components: {
        'navbarLogin': NavbarLoginVue,
        'rodape': RodapeVue
    },
    beforeCreate () {
        let vm = this
        http.get ('usuario/get/' + getLogin())
            .then (function (response) {
                if (response.data.usuario.is_admin) {
                    vm.$router.push ('painel-admin')
                }
            })
    },
    created () {
        setTimeout( () => {
            if (this.$route.name == 'menu-principal') {
                this.$router.push ({ 
                    name: 'menuPets', 
                    params: { name: 'menu-pets' },
                });
            }
        }, 1500)
    },
    methods: {
        
    }
}
</script>
