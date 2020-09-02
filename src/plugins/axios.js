import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://apistationery.herokuapp.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance });
  }
}
