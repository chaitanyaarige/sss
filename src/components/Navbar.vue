<template>
  <div class="Navbar__shorts">
    <div @click.stop="routemeto('')" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pl-2">Dashboard</span>
    </div>

    <div @click.stop="routemeto('creditbill')" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pl-2">Credit Invoice</span>
    </div>

    <div @click.prevent="routemeto('cashbill')" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pl-2">Cash Invoice</span>
    </div>

    <div @mouseover="onOver('stock')" @mouseleave="onLeave" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pl-2">Stock In</span>
      <div v-if="showStock" class="Navbar__cardcontainer">
        <b-card>
          <div @click.stop="routemeto('stockin')" class="Navbar__card">Books</div>
          <div @click.prevent="routemeto('stockin/govtbooks')">Govt Books</div>
          <div @click.prevent="routemeto('stockin/stationery')">Stationery</div>
        </b-card>
      </div>
    </div>

    <div @mouseover="onOver('buyer')" @mouseleave="onLeave" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pl-2">Buyer List</span>
      <div v-if="showBuyer" class="Navbar__cardcontainer">
        <b-card>
          <div @click.prevent="routemeto('schools')" class="Navbar__card">Schools</div>
          <div @click.prevent="routemeto('companies')">Companies</div>
        </b-card>
      </div>
    </div>

    <div @click.prevent="routemeto('publishers')" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pl-2">Publishers List</span>
    </div>

    <div @click.prevent="routemeto('audit')" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-house-door-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
        />
        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      </svg>
      <span class="pl-2">Audit</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showStock: false,
      showBuyer: false,
      currentColor: 'white'
    };
  },

  methods: {
    routemeto(data) {
      this.$router.push({ path: `/${data}`})
    },  
    onOver(data) {
      switch (data) {
        case ('buyer'):
          return this.showBuyer = true
        case ('stock'):
          return this.showStock = true
      }
    },
    onLeave() {
      this.showStock = false;
      this.showBuyer = false
    },
  },
};
</script>

<style lang="scss" scoped>
.Navbar {
  &__shorts {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    min-height: 60px;
    max-width: 1170px;
    margin: auto;
    padding: 10px 20px;
    display: flex;
    background-color: #d7fff8;
    background: rgb(163,135,181);
    background: linear-gradient(90deg, #a387b5c7 0%, #f58d8d 50%, #7efbe5 100%); 
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

  &__cardcontainer {
    margin-left: -50px;
    min-width: 200px;
    position: absolute;
    z-index: 999;
  }

  &__buttonSize {
    width: 150px;
    background: linear-gradient(to right, #0098f0, #00f2c3) !important;
  }
}
</style>