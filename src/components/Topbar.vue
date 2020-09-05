<template>
  <b-navbar class="Topbar__bgColor" toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <img class="Topbar__logo" src="../assets/logo.png" alt />
      </b-navbar-nav>

      <div>
        <div class="Topbar__phone-gst">
          <div class="Topbar__gst">GST: 36BDEPK3258C1ZT</div>
          <div>Phone: 9666542244</div>
        </div>
        <div
          class="Topbar__MainTitle"
          @click="goToHome"
          style="cursor: pointer"
        >
          Sri Srinivasa Stationery And General Stores
        </div>
        <div class="Topbar__address">
          Shop No: D5, R.T.C. Complex, Main Road, Zaheerabad
        </div>
      </div>

      <!-- Right aligned nav items -->
      <b-navbar-nav
        v-b-tooltip.hover
        title="Log out"
        @click="logoutCustomer"
        style="cursor: pointer"
        class="ml-auto mr-auto"
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
          class="bi bi-power"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"
          />
          <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z" />
        </svg>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BNavbarToggle,
  BCollapse,
  BNavbarNav
} from "bootstrap-vue";

import { mapState, mapGetters } from "vuex";
export default {
  name: "topbar",

  components: {
    BNavbar,
    BNavbarToggle,
    BCollapse,
    BNavbarNav
  },

  computed: {
    ...mapState({
      isLoggedIn: state => state.auth.isLoggedIn
    })
  },

  methods: {
    logoutCustomer() {
      this.$store.commit("auth/logoutCustomer");
    },
    goToHome() {
      this.$router.push({ path: `/` });
    }
  }
};
</script>

<style lang="scss">
@import "Topbar";
</style>
