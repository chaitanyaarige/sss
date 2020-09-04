export default ({
  namespaced: true,
  state: {
    companies: null,
  },
  getters: {
    companies: state => state.companies,
  },
  actions: {
    getCompanies({ commit, dispatch }) {
      return dispatch('performRequest', { path: 'companies', method: 'get' }, { root: true })
        .then(response => {
          commit('assignCompanyData', response.companies)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addCompany({ dispatch }, data) {
      data.created_at = new Date().toISOString();
      return dispatch('performRequest', { path: `companies`, method: 'post', data: data }, { root: true })
        .then(res => {
          dispatch('getCompanies')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editCompany({ dispatch }, data) {
      return dispatch('performRequest', { path: `companies/${data.id}`, method: 'patch', data: data }, { root: true })
        .then(response => {
          dispatch('getCompanies')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCompany({ dispatch }, data) {
      return dispatch('performRequest', { path: `companies/${data.id}`, method: 'delete'}, { root: true })
        .then(response => {
          dispatch('getCompanies')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mutations: {
    assignCompanyData(state, data) {
      state.companies = data
    }
  }
})
