import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons, BIcon } from 'bootstrap-vue'
import Multiselect from 'vue-multiselect'
import axios from './plugins/axios';

Vue.use(axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue, BootstrapVueIcons, BIcon)
Vue.component('multiselect', Multiselect)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import "vue-multiselect/dist/vue-multiselect.min.css"
import "./assets/multiselect.scss";


const DEFAULT_TITLE = 'Sri Srinivasa Stationery';
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
  created() {
    console.log(this.$axios ? 'axios plugin works' : 'axios plugin does not work');
  }
}).$mount('#app')
