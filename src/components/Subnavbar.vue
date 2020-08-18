<template>
  <div class="Menu__shorts">
    <b-col class="pb-2" style="text-align: left;">
      <b-button v-b-toggle.sidebar-no-header class="Menu__buttonSize">
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

    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <b-button variant="danger" block @click="hide">Close Sidebar</b-button>

          <h4 id="sidebar-no-header-title">Custom header sidebar</h4>

          <nav class="mb-3">
            <b-nav vertical>
              <b-list-group-item
                style="cursor: pointer; color: goldenrod;"
                to='credit-invoice'
                @click="hide"
              >Cash Invoice</b-list-group-item>
              <b-list-group-item to='about'>Credit Invoice</b-list-group-item>
              <b-list-group-item href="stockin">Stock IN</b-list-group-item>
              <b-list-group-item href="#">SUB Books</b-list-group-item>
              <b-list-group-item href="#">SUB Govt. Books</b-list-group-item>
              <b-list-group-item href="#">SUB Stationery</b-list-group-item>
              <b-list-group-item href="#">Stock Return</b-list-group-item>
              <b-list-group-item href="#">Buyer List</b-list-group-item>
              <b-list-group-item href="#">sub Schools List</b-list-group-item>
              <b-list-group-item href="#">sub Companies List</b-list-group-item>
              <b-list-group-item to='publishers'>Publishers List</b-list-group-item>
              <b-list-group-item href="#">Audit</b-list-group-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>

    <div class="Menu__subcontainer">
      <b-col class="pb-2">
        <b-button to="about" class="Menu__buttonSize">School</b-button>
      </b-col>
      <b-col class="pb-2">
        <b-button class="Menu__buttonSize">Company</b-button>
      </b-col>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Menu {
  &__shorts {
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
  }

  &__subcontainer {
    display: flex;
    visibility: hidden;
  }

  &__buttonSize {
    width: 150px;
    background: linear-gradient(to right, #0098f0, #00f2c3) !important;
  }
}
</style>