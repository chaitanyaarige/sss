<template>
  <div>
    <b-navbar class="Navbar__bgColor" toggleable="lg" variant="info">
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




    <div class="Menu__shorts">
      <div class="Menu__subcontainer">
        <b-col class="pb-2">
          <b-button class="Menu__buttonSize">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              class="bi bi-menu-button"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-8zM14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"
              />
              <path
                fill-rule="evenodd"
                d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
              />
              <path
                d="M7.823 2.823l-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0z"
              />
            </svg>
            MENU
          </b-button>
        </b-col>

        <b-col class="pb-2">
          <b-button class="Menu__buttonSize">School</b-button>
        </b-col>
        <b-col class="pb-2">
          <b-button class="Menu__buttonSize">Company</b-button>
        </b-col>
      </div>
    </div>
  </div>
</template>

<style>
.bg-info {
  background-color: #eeebd9 !important;
}
</style>

<style lang="scss" >
.Navbar {
  &__bgColor {
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

.Menu {
  &__shorts {
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
  }
  
  &__buttonSize {
    width: 150px;
  }
}
</style>
