export default ({
  namespaced: true,
  state: {
    companies: [
      {
      id:1,
      name: 'Zilla parishad High Company',
      address: 'Patancheru',
      city: 'Hyderabad',
      phone: 123
    },
    {
      id:2,
      name: 'Jyothi Vidyalaya Company',
      address: 'bhel hyderabad',
      city: 'Any Indian city',
      phone: 123
    },
    {
      id:3,
      name: 'Jyothi Vidyalaya Company',
      address: 'bhel hyderabad',
      city: 'Any Indian city',
      phone: 123
    },
    {
      id:8,
      name: 'Jyothi Vidyalaya Company',
      address: 'bhel hyderabad',
      city: 'Any Indian city',
      phone: 123
    }
  ],
  },
  getters: {
    companies: state => state.companies,
  },
  actions: {
    editCompany({commit}, data){
      console.log(data, 'disp')
      commit('editCompany', data)
    }
  },
  mutations: {
    editCompany(state, data) {
      let uniqueId = state.companies.findIndex(item => item.id === data.id)
      state.companies[uniqueId].name = data.name
      state.companies[uniqueId].address = data.address
      state.companies[uniqueId].city = data.city
      state.companies[uniqueId].phone = data.phone
    },
    addCompany(state, data) {
      state.companies.push(data)
    },
    deleteCompany(state, data) {
      let uniqueId = state.companies.findIndex(item => item.id === data.id)
      state.companies.splice(uniqueId,1)
    }
  }
})
