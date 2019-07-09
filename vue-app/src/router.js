import Vue from 'vue'
import Router from 'vue-router'
import Principal from './components/Principal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Principal
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import ( './components/Cadastro.vue' )
    },
    {
      path: '/menu',
      name: 'menu-principal',
      component: () => import ( './components/MenuPrincipal.vue' ),
      children: [
        {
          path: '/menu-pets',
          name: 'menuPets',
          component: () => import ( './components/MenuPets.vue' )
        },
        {
          path: '/perfil',
          name: 'menuPerfil',
          component: () => import ( './components/MenuPerfil.vue' )
        },
        {
          path: '/como-usar',
          name: 'comoUsar',
          component: () => import ( './components/ComoUsar.vue' )
        },
        {
          path: '/contato',
          name: 'contato',
          component: () => import ( './components/Contato.vue' )
        },
        {
          path: '/cadastro-pet',
          name: 'cadastroPet',
          component: () => import ( './components/CadastroPet.vue' )
        },
        {
          path: '/painel-premium',
          name: 'painelPremium',
          component: () => import ( './components/PainelPremium.vue' )
        }
      ]
    },
    {
      path: '/painel-admin',
      name: 'painelAdmin',
      component: () => import ( './components/PainelAdmin.vue' )
    },
    {
      path: '/pagina-pet',
      name: 'paginaPet',
      component: () => import ( './components/PaginaPet.vue' )
    }
  ]
})
