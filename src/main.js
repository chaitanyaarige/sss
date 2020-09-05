import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'

import { VBTooltip } from 'bootstrap-vue'
Vue.directive('b-tooltip', VBTooltip)

Vue.config.productionTip = false

Vue.component('multiselect', Multiselect)
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
}).$mount('#app')
