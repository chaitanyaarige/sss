export default ({
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
