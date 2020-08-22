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
        class="bi bi-credit-card"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
        />
        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
      </svg>
      <span class="pl-2">Credit Invoice</span>
    </div>

    <div @click.stop="routemeto('cashbill')" class="Navbar__smallBoxes">
      <span class="Navbar__rupee">&#8377;</span>
      <span class="pl-2">Cash Invoice</span>
    </div>

    <div @mouseover="onOver('stock')" @mouseleave="onLeave" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-cloud-download-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
        />
      </svg>
      <span class="pl-2">Stock In</span>
      <div v-if="showStock" class="Navbar__cardcontainer">
        <b-card>
          <div @click.prevent="routemeto('stockin/books')" class="Navbar__card">Books</div>
          <div @click.prevent="routemeto('stockin/govtbooks')" class="Navbar__card">Govt Books</div>
          <div @click.prevent="routemeto('stockin/stationery')" class="Navbar__card">Stationery</div>
          <div
            @click.prevent="routemeto('stockin/registers')"
            class="Navbar__card Navbar__card-last"
          >Printed Registers</div>
        </b-card>
      </div>
    </div>

    <!-- <div @click.stop="routemeto('')" class="Navbar__smallBoxes">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-cloud-upload-fill"
        :fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z"
        />
      </svg>
      <span class="pl-2">Stock Out</span>
    </div> -->

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
          fill-rule="evenodd"
          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
      </svg>
      <span class="pl-2">Buyer List</span>
      <div v-if="showBuyer" class="Navbar__cardcontainer">
        <b-card>
          <div @click.prevent="routemeto('schools')" class="Navbar__card">Schools</div>
          <div
            @click.prevent="routemeto('companies')"
            class="Navbar__card Navbar__card-last"
          >Companies</div>
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
          fill-rule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          fill-rule="evenodd"
          d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
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
        <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
        <path
          fill-rule="evenodd"
          d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
        />
        <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z" />
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
      currentColor: "white",
    };
  },

  methods: {
    routemeto(data) {
      this.$router.push({ path: `/${data}` });
    },
    onOver(data) {
      switch (data) {
        case "buyer":
          return (this.showBuyer = true);
        case "stock":
          return (this.showStock = true);
      }
    },
    onLeave() {
      this.showStock = false;
      this.showBuyer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Navbar";
</style>
