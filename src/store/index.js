import Vue from 'vue'
import Vuex from 'vuex'
import list from './list'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 2,
  },
  getters: {
    language: state => state.language,
  },
  actions: {

  },
  mutations: {

  },
  modules: {
    list: list,
    auth: auth
  }
})
