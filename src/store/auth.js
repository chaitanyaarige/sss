export default ({
  state: {
    isLoggedIn: true
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
  actions: {

  },
  mutations: {
    newLogin(data) {
      if(data.username === 'sonu' && data.password === 'sonu') {
        this.state.isLoggedIn = true
      }
    },
    logoutCustomer() {
      this.state.isLoggedIn = false
    }
  }
})
