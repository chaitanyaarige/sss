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
    language: 2,
    leftColor: "#a387b5c7",
    rightColor: "#f58d8d"
  },
  getters: {
    appUrl: state => state.appUrl,
    language: state => state.language,
    leftColor: state => state.leftColor,
    rightColor: state => state.rightColor
  },
  actions: {
    setAppUrl() {
      this.commit('setAppUrl', process.env.APP_URL)
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
