import Vue from "vue";
import Vuex from "vuex";
import schoolList from "./schoolList";
import companyList from "./companyList";
import generalBooks from "./generalBooks";
import stationery from "./stationery";
import auth from "./auth";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appUrl: null,
    leftColor: "#a387b5c7",
    rightColor: "#f58d8d",
    showDeleteConfirm: false
  },
  getters: {
    appUrl: state => state.appUrl,
    leftColor: state => state.leftColor,
    rightColor: state => state.rightColor,
    showDeleteConfirm: state => state.showDeleteConfirm
  },
  actions: {
    setAppUrl({state}, data) {
      this.commit('setAppUrl', data)
    },
    performRequest ({state, getters}, data) {
      const reqData = {
        method: data.method,
        url: `${state.appUrl}${data.path}`,
        data: data.data,
        params: data.params
      }

      return axios(reqData)
        .then(resp => {
          return resp.data
        })
        .catch(error => Promise.reject(error))
    },
  },
  mutations: {
    setAppUrl(state, apiUrl) {
      if (apiUrl) {
        state.appUrl = `https://${apiUrl}/api/`
      } else {
        state.appUrl = 'http://localhost:5200/api/'
      }
    },
    toggleDeleteConfirm(state, data) {
      state.showDeleteConfirm =  data
    }
  },
  modules: {
    schoolList: schoolList,
    companyList: companyList,
    generalBooks: generalBooks,
    stationery: stationery,
    auth: auth
  }
});
