export default {
  namespaced: true,
  state: {
    isLoggedIn: true,
    user: []
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user
  },
  actions: {},
  mutations: {
    newLogin(state, data) {
      if (data.email === "sonu@sss.com" && data.password === "sonu") {
        state.isLoggedIn = true;
        this.assignLocalStorage()
      }
    },
    assignLocalStorage() {
      localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn))
      localStorage.setItem('userDetails', JSON.stringify(data))
    },
    getLocalStorage(state) {
      state.user = JSON.parse(localStorage.getItem('isLoggedIn'))
    },
    clearLocalStorage() {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('userDetails')
    },
    logoutCustomer(state, data) {
      state.isLoggedIn = false
      this.clearLocalStorage()
    }
  }
};
