export default ({
  namespaced: true,
  state: {
    generalBooks: [
      {
        id:1,
        prod_code: "SC_001",
        name: 'Zilla parishad High School',
        address: 'Patancheru',
        city: 'Hyderabad',
        phone: 123
      }
    ]
  },
  getters: {
    generalBooks: state => state.generalBooks,
  },
  actions: {

  },
  mutations: {
    editgeneralBook(state, data) {
      let uniqueId = state.generalBooks.findIndex(item => item.id === data.id)
      state.generalBooks[uniqueId].name = data.name
      state.generalBooks[uniqueId].address = data.address
      state.generalBooks[uniqueId].city = data.city
      state.generalBooks[uniqueId].phone = data.phone
    },
    addgeneralBook(state, data) {
      state.generalBooks.push(data)
    },
    deletegeneralBook(state, data) {
      let uniqueId = state.generalBooks.findIndex(item => item.id === data.id)
      state.generalBooks.splice(uniqueId,1)
    }
  }
})
