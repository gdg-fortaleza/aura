import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/equipe',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
    {
      path: '/eventos',
      name: 'events',
      component: () => import('./views/Events.vue')
    },
    {
      path: '/contato',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },

    {
      path: '/certificados',
      name: 'certificados',
      component: () => import('./views/Certificados.vue')
    }
  ]
})
