import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.NODE_URL ? process.env.NODE_URL : 'http://localhost:5200/api/',
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance });
  }
}
