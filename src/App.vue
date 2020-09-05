<template>
  <div id="app">
    <Topbar />
    <Navbar v-if="isLoggedIn" />
    <div class="max-widths">
      <router-view v-if="isLoggedIn" class="bg-whites"/>
      <Login v-if="!isLoggedIn" class="bg-whites"/>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Navbar from "@/components/Navbar.vue";
import Login from "@/components/Login.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Topbar,
    Login
  },

  created() {
    this.$store.dispatch('setAppUrl', process.env.VUE_APP_URL)
  },

  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.isLoggedIn,
    })
  },
};
</script>

<style>
#app {
  font-family: "ubuntu-regular", sans-serif;
  /* font-family: 'Dancing Script', cursive; */
  /* font-family: 'Raleway', sans-serif; */
  /* font-family: 'Dosis', sans-serif; */
  /* font-family: 'Roboto', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1366px;
  font-size: 15px;
  margin: auto;
  background: #eeebd9;
}

.max-widths {
  max-width: 1170px;
  margin: auto;
  padding-bottom: 20px;
}

.bg-whites {
  background: white;
  min-height: 500px;
}
</style>
