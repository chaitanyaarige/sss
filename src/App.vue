<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <div class="max-widths">
      <router-view class="bg-whites"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: "ubuntu-regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1200px;
  font-size: 15px;
  margin: auto;
  background: lightcyan;
}

.max-widths {
  max-width: 1170px;
  margin: auto;
  padding-bottom: 20px;
}

.bg-whites {
  background: white;
}
</style>
