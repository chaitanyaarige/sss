<template>
  <div class="home">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Sidebar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar
  }
}
</script>
