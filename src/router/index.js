import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/index.vue";

Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// };

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/creditbill",
    name: "creditbill",
    // meta: { title: 'SSS Credit Bill'},
    component: function () {
      return import("../pages/creditbill.vue");
    }
  },
  {
    path: "/cashbill",
    name: "cashbill",
    // meta: { title: 'SSS Cash Bill'},
    component: function () {
      return import("../pages/cashbill/index.vue");
    }
  },
  {
    path: "/stockin/books/",
    name: "books",
    component: function () {
      return import("../pages/StockIn/books.vue");
    }
  },
  {
    path: "/stockin/govtbooks/",
    name: "govtbooks",
    component: function () {
      return import("../pages/StockIn/govtbooks.vue");
    }
  },
  {
    path: "/stockin/stationery",
    name: "stationery",
    component: function () {
      return import("../pages/StockIn/stationery.vue");
    }
  },
  {
    path: "/stockin/registers",
    name: "registers",
    component: function () {
      return import("../pages/StockIn/registers.vue");
    }
  },
  {
    path: "/companies",
    name: "companies",
    component: function () {
      return import("../pages/Companies/index.vue");
    }
  },
  {
    path: "/schools",
    name: "Schools",
    component: function () {
      return import("../pages/Schools/index.vue");
    }
  },
  {
    path: "/publishers",
    name: "publishers",
    component: function () {
      return import("../pages/Publishers/index.vue");
    }
  },
  {
    path: "/audit",
    name: "Audit",
    component: function () {
      return import("../pages/Audit/index.vue");
    }
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
