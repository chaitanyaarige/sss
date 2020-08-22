<template>
  <div class="Schools__main-container">
    <div class="Schools__first-container">
      <div class="Schools__main-title">{{editForm ? "Edit" : "Add"}} School Data</div>
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
        <b-container>
          <b-row>
            <b-col cols="4">
              <label style="display: block; text-align: left;" for="text">dfdfjd</label>
              <b-form-input placeholder="Enter your name"></b-form-input>
            </b-col>
            <b-col cols="4">
              <label style="display: block; text-align: left;" for="text">dfdfjd</label>
              <b-form-input placeholder="Enter your name"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="Schools__second-row">
        <div class="Schools__button">
          <b-button @click="submit()" variant="outline-secondary">Submit</b-button>
        </div>
        <div class="Schools__button">
          <b-button @click="clearData" squared variant="outline-secondary">Clear</b-button>
        </div>
      </div>
    </div>

    <div class="Schools__second-container">
      <div class="Schools__main-title">Edit School Data</div>
      <div class="Schools__toggle-form">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-pencil"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
          />
          <path
            fill-rule="evenodd"
            d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
          />
        </svg>
      </div>
    </div>

    <div class="Schools__sub-container-two">
      <div class="Schools__first-row">
        <multiselect
          v-model="newSchool.name"
          track-by="id"
          :searchable="true"
          :options="schoolList"
          label="name"
        ></multiselect>
      </div>
    </div>

    <div class="Schools__third-container">
      <div class="Schools__main-title">School Data</div>
      <BuyersTable :dataList="schoolList" @editData="editData" @deleteData="deleteData" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BuyersTable from "@/components/BuyersTable.vue";

export default {
  name: "Schools",

  data() {
    return {
      showForm: false,
      editForm: false,
      newSchool: {
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
      schoolList: (state) => state.schoolList.schools,
    }),
  },

  methods: {
    toggleShowForm() {
      this.showForm = !this.showForm;
    },
    clearData() {
      this.newSchool.id = null;
      this.newSchool.name = "";
      this.newSchool.address = "";
      this.newSchool.phone = "";
      this.newSchool.city = "";
      this.editForm = false;
    },
    editData(data) {
      const { name, address, city, phone, id } = data;
      this.newSchool.name = name;
      this.newSchool.id = id;
      this.newSchool.address = address;
      this.newSchool.city = city;
      this.newSchool.phone = phone;
      this.editForm = true;
      this.showForm = true;
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    },
    submit() {
      if (!this.newSchool.name && !this.newSchool.phone) return;
      if (!this.editForm) {
        // remove below code before sending to DB
        const ids = this.schoolList.map((item) => item.id);
        const sorted = ids.sort((a, b) => a - b);
        const highestId = sorted.length - 1;
        this.newSchool.id = sorted[highestId] + 1;
        this.$store.commit("schoolList/addSchool", this.newSchool);
      } else {
        this.$store.commit("schoolList/editSchool", this.newSchool);
      }
      this.toggleShowForm();
      this.editForm = false;
    },
    deleteData() {
      this.$store.commit("schoolList/deleteSchool", this.newSchool);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "stationery";
</style>
