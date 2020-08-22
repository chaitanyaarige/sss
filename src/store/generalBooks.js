export default ({
  namespaced: true,
  state: {
    generalBooks: [
      {
        id:1,
        prod_code: "SC_001",
        prod_name: 'Domyos Scale High School',
        publisher: 'Kangaroo',
        pre_gst: 12,
        post_gst: 0,
        unit_price: 12
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
      state.generalBooks[uniqueId].prod_code = data.prod_code
      state.generalBooks[uniqueId].prod_name = data.prod_name
      state.generalBooks[uniqueId].manufacturer = data.manufacturer
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
