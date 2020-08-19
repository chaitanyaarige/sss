<template>
  <div class="Navbar__shorts">
    <div class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span @mouseover="showNavbar(true)" @mouseout="showNavbar(false)" class="pr-2">Dashboard</span>

      <div v-if="showFirst" class="Navbar__container">
        <b-card>
          <div class="Navbar__card">
            hjkljhj
            jhgjk
          </div>
        </b-card>
      </div>
    </div>

    <div @mouseover="showNavbar" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pr-2">Dashboard</span>
    </div>

    <div class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pr-2">Dashboard</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFirst: false
    };
  },

  methods: {
    showNavbar(data) {
      setTimeout(() => {
        this.showFirst = data
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
.Navbar {
  &__shorts {
    min-height: 60px;
    padding: 10px 100px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }

  &__smallBoxes {
    margin: auto;
  }

  &__subcontainer {
    display: flex;
    // visibility: hidden;
  }

  &__container {
    position: absolute;
    z-index: 999;
  }

  &__buttonSize {
    width: 150px;
    background: linear-gradient(to right, #0098f0, #00f2c3) !important;
  }
}
</style>