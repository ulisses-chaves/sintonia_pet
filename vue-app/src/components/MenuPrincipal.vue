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
    created () {
        if (this.$route.name == 'menu-principal') {
            this.$router.push ({ 
                name: 'menuPets', 
                params: { name: 'menu-pets' },
            });
        }
    },
    methods: {
        
    }
}
</script>
