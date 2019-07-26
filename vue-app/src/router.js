import Vue from 'vue'
import Router from 'vue-router'
import Principal from './components/Principal.vue'
import { isLogged } from './services/config';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Principal,
      beforeEnter: (to, from, next) => { 
          if (!isLogged()) {
              next()
              return
          }
          next ('/menu')
      },
      
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import ( './components/Cadastro.vue' ),
      beforeEnter: (to, from, next) => { 
          if (!isLogged()) {
              next()
              return
          }
          next ('/menu')
      },
    },
    {
      path: '/menu',
      name: 'menu-principal',
      component: () => import ( './components/MenuPrincipal.vue' ),
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
              next()
              return
          }
          next ('/')
      },
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
        },
        {
          path: '/pagina-perfil',
          name: 'paginaPerfil',
          component: () => import ( './components/PaginaPerfil.vue')
        }
      ]
    },
    {
      path: '/painel-admin',
      name: 'painelAdmin',
      component: () => import ( './components/PainelAdmin.vue' ),
      beforeEnter: (to, from, next) => {
          if (isLogged()) {
            next()
            return     
          }
          next ('/')
      },
    },
  ],
  scrollBehavior (to, from, savedPosition) {      
    if ( savedPosition ) { 
      return savedPosition 
    } 
    else { 
      return { 
        x : 0 , y : 0 
      } 
    }
  }
})
