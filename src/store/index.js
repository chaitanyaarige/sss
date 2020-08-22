import Vue from "vue";
import Vuex from "vuex";
import schoolList from "./schoolList";
import companyList from "./companyList";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: 2,
    leftColor: "#a387b5c7",
    rightColor: "#f58d8d"
  },
  getters: {
    language: state => state.language,
    leftColor: state => state.leftColor,
    rightColor: state => state.rightColor
  },
  actions: {},
  mutations: {},
  modules: {
    schoolList: schoolList,
    companyList: companyList,
    auth: auth
  }
});
