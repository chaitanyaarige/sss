<template>
  <div>
    <b-navbar class="Navbar__bgColor" toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <img class="Navbar__logo" src="../assets/logo.png" alt />
        </b-navbar-nav>

        <div>
          <div class="Navbar__phone-gst">
            <div class="Navbar__gst">GST: 36BDEPK3258C1ZT </div>
            <div>Phone: 9666542244</div>
          </div>
          <div class="Navbar__MainTitle">Sri Srinivasa Stationery And General Stores</div>
          <div>Shop No: D5, R.T.C. Complex, Main Road, Zaheerabad</div>
        </div>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
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
          <span>Log out</span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  <Subnavbar/>
  </div>
</template>

<script>
import Subnavbar from '@/components/Subnavbar.vue'
export default {
  name: 'navbar',

  components: {
    Subnavbar
  }
}
</script>

<style lang="scss" >
.Navbar {
  &__bgColor {
    // visibility: hidden;
    background-color: #eeebd9 !important;
  }

  &__phone-gst {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    width: 200px;
  }

  &__MainTitle {
    font-size: 40px;
  }
}

</style>