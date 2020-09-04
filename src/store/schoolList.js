export default ({
  namespaced: true,
  state: {
    schools: null,
  },
  getters: {
    schools: state => state.schools,
  },
  actions: {
    getSchools({ commit, dispatch }) {
      return dispatch('performRequest', { path: 'schools', method: 'get' }, { root: true })
        .then(response => {
          commit('assignSchoolsData', response.schools)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addSchool({ dispatch }, data) {
      data.created_at = new Date().toISOString();
      return dispatch('performRequest', { path: `schools`, method: 'post', data: data }, { root: true })
        .then(res => {
          dispatch('getSchools')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editSchool({ dispatch }, data) {
      // const allParams = Object.assign(params || {}, lang)
      return dispatch('performRequest', { path: `schools/${data.id}`, method: 'patch', data: data }, { root: true })
        .then(response => {
          dispatch('getSchools')
          // commit('assignSchoolsData', response.schools)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteSchool({ dispatch }, data) {
      return dispatch('performRequest', { path: `schools/${data.id}`, method: 'delete'}, { root: true })
        .then(response => {
          dispatch('getSchools')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mutations: {
    assignSchoolsData(state, data) {
      state.schools = data
    },
    // editSchool(state, data) {
    //   let uniqueId = state.schools.findIndex(item => item.id === data.id)
    //   state.schools[uniqueId].name = data.name
    //   state.schools[uniqueId].address = data.address
    //   state.schools[uniqueId].city = data.city
    //   state.schools[uniqueId].phone = data.phone
    // },
    // addSchool(state, data) {
    //   state.schools.push(data)
    // },
    // deleteSchool(state, data) {
    //   let uniqueId = state.schools.findIndex(item => item.id === data.id)
    //   state.schools.splice(uniqueId, 1)
    // }
  }
})
