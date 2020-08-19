<template>
  <div class="Navbar__shorts">
    <div to="/" class="Navbar__smallBoxes">
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
      <!-- 
      <div class="Navbar__container">
        <b-card>
          <div class="Navbar__card">
            hjkljhj
            jhgjk
          </div>
        </b-card>
      </div>-->
    </div>

    <div @mouseover="onOver" @mouseleave="onLeave" class="Navbar__smallBoxes">
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
      <span class="pr-2">Invoice</span>
      <div v-if="showFirst" class="Navbar__container">
        <b-card>
          <div to="creditbill" class="Navbar__card">Credit Invoice</div>
          <div>Cash Invoice</div>
        </b-card>
      </div>
    </div>

    <div @mouseover="onOver" @mouseleave="onLeave" class="Navbar__smallBoxes">
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
      <span class="pr-2">Stock In</span>
    </div>

    <div @mouseover="onOver" @mouseleave="onLeave" class="Navbar__smallBoxes">
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
      <span class="pr-2">Stock In</span>
      <div v-if="showFirst" class="Navbar__container">
        <b-card>
          <div class="Navbar__card">Books</div>
          <div>Govt Books</div>
          <div>Stationery</div>
        </b-card>
      </div>
    </div>

    <div @mouseover="onOver" @mouseleave="onLeave" class="Navbar__smallBoxes">
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
      <span class="pr-2">Buyer List</span>
      <div v-if="showFirst" class="Navbar__container">
        <b-card>
          <div class="Navbar__card">Schools</div>
          <div>Companies</div>
        </b-card>
      </div>
    </div>

    <div to="publishers" class="Navbar__smallBoxes">
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
      <span class="pr-2">Publishers List</span>
    </div>

    <div  to="about" class="Navbar__smallBoxes">
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
      <span class="pr-2">Audit</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFirst: false,
    };
  },

  methods: {
    onOver() {
      this.showFirst = true;
    },
    onLeave() {
      this.showFirst = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.Navbar {
  &__shorts {
    min-height: 60px;
    max-width: 1170px;
    margin: auto;
    padding: 10px 100px;
    display: flex;
    background-color: #d7fff8;
    // justify-content: space-between;
    align-items: center;
  }

  &__smallBoxes {
    margin: auto;
    cursor: pointer;
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