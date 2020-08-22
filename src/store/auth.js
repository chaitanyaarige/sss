export default {
  namespaced: true,
  state: {
    isLoggedIn: true
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  },
  actions: {},
  mutations: {
    newLogin(state, data) {
      if (data.email === "sonu@sss.com" && data.password === "sonu") {
        state.isLoggedIn = true;
      }
    },
    logoutCustomer(state, data) {
      state.isLoggedIn = false;
    }
  }
};
