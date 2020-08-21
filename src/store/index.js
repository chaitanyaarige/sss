import Vue from 'vue'
import Vuex from 'vuex'
import list from './list'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 2,
    leftColor: '#a387b5c7',
    rightColor: '#f58d8d'
  },
  getters: {
    language: state => state.language,
    leftColor: state => state.leftColor,
    rightColor: state => state.rightColor
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
