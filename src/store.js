import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      { text: 'Início', to: '/', icon:'home'},
      { text: 'Eventos', to: '/eventos', icon: 'rounded_corner'},
      { text: 'Equipe', to: '/equipe', icon:'group'},
      { text: 'Sobre', to: '/sobre', icon: 'toc'},
      { text: 'Contato', to: '/contato', icon:'person'},
      { text: 'Certificados', to: '/certificados', icon: 'folder_shared' }
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
