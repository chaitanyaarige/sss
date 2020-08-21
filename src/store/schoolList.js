export default ({
  namespaced: true,
  state: {
    schools: [
      {
      id:1,
      name: 'Zilla parishad High School',
      address: 'Patancheru',
      city: 'Hyderabad',
      phone: 123
    },
    {
      id:2,
      name: 'Jyothi Vidyalaya School',
      address: 'bhel hyderabad',
      city: 'Any Indian city',
      phone: 123
    },
    {
      id:3,
      name: 'Jyothi Vidyalaya School',
      address: 'bhel hyderabad',
      city: 'Any Indian city',
      phone: 123
    },
    {
      id:8,
      name: 'Jyothi Vidyalaya School',
      address: 'bhel hyderabad',
      city: 'Any Indian city',
      phone: 123
    }
  ],
  },
  getters: {
    schools: state => state.schools,
  },
  actions: {
    editSchool({commit}, data){
      console.log(data, 'disp')
      commit('editSchool', data)
    }
  },
  mutations: {
    editSchool(state, data) {
      let uniqueId = state.schools.findIndex(item => item.id === data.id)
      state.schools[uniqueId].name = data.name
      state.schools[uniqueId].address = data.address
      state.schools[uniqueId].city = data.city
      state.schools[uniqueId].phone = data.phone
    },
    addSchool(state, data) {
      state.schools.push(data)
    },
    deleteSchool(state, data) {
      let uniqueId = state.schools.findIndex(item => item.id === data.id)
      state.schools.splice(uniqueId,1)
    }
  }
})
