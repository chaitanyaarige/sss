<template>
  <div class="Schools__main-container">
    <div class="Schools__first-container">
      <div class="Schools__main-title">{{editForm ? "Edit" : "Add"}} Company Data</div>
      <div class="Schools__toggle-form" @click="toggleShowForm()">
        <svg
          v-if="!showForm"
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-plus-circle-fill"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
          />
        </svg>

        <svg
          v-if="showForm"
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-dash-circle-fill"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 7.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H4z"
          />
        </svg>
      </div>
    </div>

    <div v-if="showForm" class="Schools__sub-container">
      <div class="Schools__second-row">
        <div class="Schools__input-fields">
          <label for="name">Company Name</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="name"
            v-model="newCompany.name"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="city">City</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="city"
            v-model="newCompany.city"
          />
        </div>
      </div>
      <div class="Schools__second-row">
        <div class="Schools__input-fields">
          <label for="address">Address</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="address"
            v-model="newCompany.address"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="phone">Phone</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="phone"
            v-model="newCompany.phone"
          />
        </div>
        <div class="Schools__button">
          <b-button @click="submit()" variant="outline-secondary">Submit</b-button>
        </div>
        <div class="Schools__button">
          <b-button @click="clearData" squared variant="outline-secondary">Clear</b-button>
        </div>
      </div>
    </div>

    <div class="Schools__second-container">
    </div>

    <!-- <div class="Schools__sub-container-two">
      <div class="Schools__first-row">
        <multiselect
          v-model="newCompany.name"
          track-by="id"
          :searchable="true"
          :options="companyList"
          label="name"
        ></multiselect>
      </div>
    </div> -->

    <div class="Schools__third-container">
      <div class="Schools__main-title">Company Data</div>
      <BuyersTable :dataList="companyList" @editData="editData" @deleteData="deleteData" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BuyersTable from "@/components/BuyersTable.vue";

export default {
  name: "Company",

  data() {
    return {
      showForm: false,
      editForm: false,
      newCompany: {
        id: null,
        name: "",
        address: "",
        city: "",
        phone: null,
      },
    };
  },

  components: {
    BuyersTable,
  },

  computed: {
    ...mapState({
      leftColor: (state) => state.leftColor,
      rightColor: (state) => state.rightColor,
      companyList: (state) => state.companyList.companies,
    }),
  },

  methods: {
    toggleShowForm() {
      this.showForm = !this.showForm;
      if(!this.showForm) this.clearData()
    },
    clearData() {
      this.newCompany.id = null;
      this.newCompany.name = "";
      this.newCompany.address = "";
      this.newCompany.phone = "";
      this.newCompany.city = "";
      this.editForm = false;
    },
    editData(data) {
      const { name, address, city, phone, id } = data;
      this.newCompany.name = name;
      this.newCompany.id = id;
      this.newCompany.address = address;
      this.newCompany.city = city;
      this.newCompany.phone = phone;
      this.editForm = true;
      this.showForm = true;
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    },
    submit() {
      if (!this.newCompany.name && !this.newCompany.phone) return;
      if (!this.editForm) {
        // remove below code before sending to DB
        const ids = this.companyList.map((item) => item.id);
        const sorted = ids.sort((a, b) => a - b);
        const highestId = sorted.length - 1;
        this.newCompany.id = sorted[highestId] + 1;

        this.$store.commit("companyList/addCompany", this.newCompany);
      } else {
        this.newCompany.id = this.$store.commit(
          "companyList/editCompany",
          this.newCompany
        );
      }
      this.toggleShowForm();
      this.editForm = false;
    },
    deleteData() {
      this.$store.commit("companyList/deleteCompany", this.newCompany);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "index";
</style>
