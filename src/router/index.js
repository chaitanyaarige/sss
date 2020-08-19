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
    path: '/publishers',
    name: 'publishers',
    component: function () {
      return import('../views/publishers.vue')
    }
  },  
  {
    path: '/creditbill',
    name: 'creditbill',
    component: function () {
      return import('../views/creditbill.vue')
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
