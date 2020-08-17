<template>
  <div class="Sidebar__container">
    <b-list-group>
      <b-list-group-item href="#some-link">Cash Invoice</b-list-group-item>
      <b-list-group-item href="#some-link">Credit Invoice</b-list-group-item>
      <b-list-group-item href="#" active>Stock IN</b-list-group-item>
          <b-list-group-item href="#" >SUB Books</b-list-group-item>
          <b-list-group-item href="#" >SUB Govt. Books</b-list-group-item>
          <b-list-group-item href="#" >SUB Stationery</b-list-group-item>
      <b-list-group-item href="#" >Stock Return</b-list-group-item>
      <b-list-group-item href="#" >Buyer List</b-list-group-item>
        <b-list-group-item href="#" >sub Schools List</b-list-group-item>
        <b-list-group-item href="#" >sub Companies List</b-list-group-item>
      <b-list-group-item href="#" >Publishers List</b-list-group-item>
      <b-list-group-item href="#" >Audit</b-list-group-item>


    </b-list-group>  
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Sidebar {
  &__container {
    width: 20%;
  }
}
</style>
