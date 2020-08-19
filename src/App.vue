<template>
  <div id="app">
    <div id="nav">
      <Topbar/>
    </div>
    <div class="max-widths">
      <router-view class="bg-whites"/>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
export default {
  components: {
    Topbar
  }
}
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
