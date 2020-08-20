export default ({
  state: {
    schools: [
      {
      id:1,
      name: 'first',
      address: 'hyderabad',
      phone: 123
    },
    {
      id:2,
      name: 'second',
      address: 'hyderabad',
      phone: 123
    }
  ],
  },
  getters: {
    schools: state => state.schools,
  },
  actions: {

  },
  mutations: {
    addSchool(data) {
      this.state.schools.push(data)
    }
  }
})
