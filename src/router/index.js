import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: function () {
      return import('../pages/Companies/index.vue')
    }
  },
  {
    path: '/creditbill',
    name: 'creditbill',
    // meta: { title: 'SSS Credit Bill'},
    component: function () {
      return import('../pages/creditbill.vue')
    }
  },
  {
    path: '/cashbill',
    name: 'cashbill',
    // meta: { title: 'SSS Cash Bill'},
    component: function () {
      return import('../pages/cashbill.vue')
    }
  },
  {
    path: '/stockin',
    name: 'stockin',
    component: function () {
      return import('../pages/stockin.vue')
    }
  },
  {
    path: '/publishers',
    name: 'publishers',
    component: function () {
      return import('../pages/Publishers/index.vue')
    }
  },
  {
    path: '/schools',
    name: 'Schools',
    component: function () {
      return import('../pages/Schools/index.vue')
    }
  },
  {
    path: '/companies',
    name: 'companies',
    component: function () {
      return import('../pages/Companies/index.vue')
    }
  },
  {
    path: '/audit',
    name: 'Audit',
    component: function () {
      return import('../pages/Audit/index.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
