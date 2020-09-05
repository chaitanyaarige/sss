<template>
  <div class="Schools__main-container StationeryList">
    <div class="Schools__first-container">
      <div class="Schools__main-title">{{editForm ? "Edit" : "Add"}} Stationery</div>
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
          <label for="name">Product Code</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="name"
            v-model="newstationery.prod_code"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="city">Product Name</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="city"
            v-model="newstationery.prod_name"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="address">Manufacturer</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="address"
            v-model="newstationery.manufacturer"
          />
        </div>
      </div>
      <div class="Schools__second-row">
        <div class="Schools__input-fields">
          <label for="address">Unit Price</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="address"
            v-model="newstationery.unit_price"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="phone">Pre GST</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="phone"
            v-model="newstationery.pre_gst"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="address">Post GST</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="address"
            v-model="newstationery.post_gst"
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

    <div class="Schools__second-container"></div>

    <div class="Schools__third-container">
      <div class="Schools__main-title">Stationery Data</div>
      <div v-if="!stationery" class="Schools__loadingRed">Loading.....</div>
      <PublisherTable v-if='stationery' :dataList="filteredStationery" @editData="editData" @deleteData="deleteData" />
    </div>
    <div v-if="showDeleteConfirm">
      <DeleteConfirmModal @confirmDelete="confirmDelete" :deleteName="newstationery.prod_name"/>
    </div>
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue"
import { mapState, mapGetters } from "vuex";
import PublisherTable from "@/components/PublisherTable.vue";
import DeleteConfirmModal from "@/components/DeleteConfirmModal.vue";

export default {
  name: "StationeryList",

  data() {
    return {
      showForm: false,
      editForm: false,
      newstationery: {
        prod_code: "",
        prod_name: "",
        manufacturer: "",
        pre_gst: null,
        post_gst: null,
        unit_price: null,
      },
    };
  },

  components: {
    PublisherTable,
    BButton,
    DeleteConfirmModal
  },

  computed: {
    ...mapState({
      leftColor: (state) => state.leftColor,
      rightColor: (state) => state.rightColor,
      stationery: (state) => state.stationery.stationery,
      showDeleteConfirm:   (state) => state.showDeleteConfirm,
    }),
    filteredStationery()   {
      return this.stationery ? this.stationery.sort((a, b) => {
            return a.id - b.id;
          })
        : [];
    }
  },

  mounted() {
    this.getAllStationery();
  },

  methods: {
    getAllStationery() {
      this.$store.dispatch("stationery/getStationery");
    },
    toggleShowForm() {
      this.showForm = !this.showForm;
    },
    clearData() {
      this.newstationery.id = null;
      this.newstationery.prod_code = "";
      this.newstationery.prod_name = "";
      this.newstationery.manufacturer = "";
      this.newstationery.pre_gst = "";
      this.newstationery.post_gst = "";
      this.newstationery.unit_price = "";
      this.editForm = false;
    },
    editData(data) {
      const { prod_code, prod_name, manufacturer, pre_gst, post_gst, unit_price, id } = data;
      this.newstationery.prod_code = prod_code;
      this.newstationery.id = id;
      this.newstationery.prod_name = prod_name;
      this.newstationery.manufacturer = manufacturer;
      this.newstationery.pre_gst = pre_gst;
      this.newstationery.post_gst = post_gst;
      this.newstationery.unit_price = unit_price;
      this.editForm = true;
      this.showForm = true;
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    },
    submit() {
      if (!this.newstationery.prod_code && !this.newstationery.unit_price) return;
      if (!this.editForm) {
        this.$store.dispatch("stationery/addStationery", this.newstationery);
      } else {
        this.stationery.id = this.$store.dispatch(
          "stationery/editStationery",
          this.newstationery
        );
      }
      this.toggleShowForm();
      this.clearData()
    },
    confirmDelete(data) {
      if(data) {
      this.$store
        .dispatch("stationery/deleteStationery", this.newstationery)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error);
        });
        this.newstationery = {}
        this.$store.commit('toggleDeleteConfirm', false)
      }
      else {
        this.newstationery = null
        this.$store.commit('toggleDeleteConfirm', false)
      }
    },
    deleteData(data) {
      this.$store.commit('toggleDeleteConfirm', true)
      this.newstationery = Object.assign({}, this.newstationery, data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "StationeryList";
</style>
