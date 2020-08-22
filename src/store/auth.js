export default ({
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
  actions: {

  },
  mutations: {
    newLogin(state, data) {
      if(data.email === 'sonu@sss.com' && data.password === 'sonu') {
        state.isLoggedIn = true
      }
    },
    logoutCustomer() {
      state.isLoggedIn = false
    }
  }
})
