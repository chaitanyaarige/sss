import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/creditbill',
    name: 'creditbill',
    component: function () {
      return import('../views/creditbill.vue')
    }
  },   
  {
    path: '/cashbill',
    name: 'cashbill',
    component: function () {
      return import('../views/cashbill.vue')
    }
  },  
  {
    path: '/stockin',
    name: 'stockin',
    component: function () {
      return import('../views/stockin.vue')
    }
  }, 
  {
    path: '/stockin/govtbooks',
    name: 'govtbooks',
    component: function () {
      return import('../components/govtbooks.vue')
    }
  }, 
  {
    path: '/stockin/stationary',
    name: 'stockin',
    component: function () {
      return import('../components/stationary.vue')
    }
  },  
  {
    path: '/publishers',
    name: 'publishers',
    component: function () {
      return import('../views/publishers.vue')
    }
  }, 
  {
    path: '/schools',
    name: 'schools',
    component: function () {
      return import('../views/schools.vue')
    }
  }, 
  {
    path: '/companies',
    name: 'companies',
    component: function () {
      return import('../views/companies.vue')
    }
  }, 
  {
    path: '/audit',
    name: 'Audit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Audit.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
