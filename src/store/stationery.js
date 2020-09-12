export default ({
  namespaced: true,
  state: {
    stationery: null,
  },
  getters: {
    stationery: state => state.stationery,
  },
  actions: {
    getStationery({ commit, dispatch }) {
      return dispatch('performRequest', { path: 'stationery', method: 'get' }, { root: true })
        .then(response => {
          commit('assignStationeryData', response.stationery)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addStationery({ dispatch }, data) {
      data.created_at = new Date().toISOString();
      return dispatch('performRequest', { path: `stationery`, method: 'post', data: data }, { root: true })
        .then(res => {
          dispatch('getStationery')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editStationery({ dispatch }, data) {
      data.updated_at = new Date().toISOString();
      return dispatch('performRequest', { path: `stationery/${data.id}`, method: 'patch', data: data }, { root: true })
        .then(response => {
          dispatch('getStationery')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteStationery({ dispatch }, data) {
      return dispatch('performRequest', { path: `stationery/${data.id}`, method: 'delete'}, { root: true })
        .then(response => {
          dispatch('getStationery')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mutations: {
    assignStationeryData(state, data) {
      state.stationery = data
    }
  }
})
