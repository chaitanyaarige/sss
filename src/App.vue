<template>
  <div id="app">
    <Topbar />
    <Navbar />
    <div class="max-widths">
      <router-view class="bg-whites" />
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
    Topbar,
  },
};
</script>

<style>
#app {
  font-family: "ubuntu-regular", sans-serif;
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
