import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: function () {
      return import('../pages/schools.vue')
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
    path: '/stockin/govtbooks',
    name: 'govtbooks',
    component: function () {
      return import('../pages/govtbooks.vue')
    }
  },
  {
    path: '/stockin/stationery',
    name: 'stockin',
    component: function () {
      return import('../pages/stationery.vue')
    }
  },
  {
    path: '/publishers',
    name: 'publishers',
    component: function () {
      return import('../pages/publishers.vue')
    }
  },
  {
    path: '/schools',
    name: 'schools',
    component: function () {
      return import('../pages/schools.vue')
    }
  },
  {
    path: '/companies',
    name: 'companies',
    component: function () {
      return import('../pages/companies.vue')
    }
  },
  {
    path: '/audit',
    name: 'Audit',
    component: function () {
      return import('../pages/Audit.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
