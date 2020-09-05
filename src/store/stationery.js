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
    },
    // editStationery(state, data) {
    //   let uniqueId = state.stationery.findIndex(item => item.id === data.id)
    //   state.stationery[uniqueId].prod_code = data.prod_code
    //   state.stationery[uniqueId].prod_name = data.prod_name
    //   state.stationery[uniqueId].manufacturer = data.manufacturer
    //   state.stationery[uniqueId].pre_gst = data.pre_gst
    //   state.stationery[uniqueId].unit_price = data.unit_price
    //   state.stationery[uniqueId].qty = data.qty
    //   state.stationery[uniqueId].post_gst = data.post_gst
    // },
    // addStationery(state, data) {
    //   state.stationery.push(data)
    // },
    // deleteStationery(state, data) {
    //   let uniqueId = state.stationery.findIndex(item => item.id === data.id)
    //   state.stationery.splice(uniqueId,1)
    // }
  }
})
