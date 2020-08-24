<template>
  <div class="Schools__main-container">
    <div v-if="showForm" class="Schools__sub-container">
      <div class="Schools__second-row">
        <b-container>
          <b-row>
            <b-col cols="4">
              <label style="display: block; text-align: left;" for="text"
                >dfdfjd</label
              >
              <b-form-input placeholder="Enter your name"></b-form-input>
            </b-col>
            <b-col cols="4">
              <label style="display: block; text-align: left;" for="text"
                >dfdfjd</label
              >
              <b-form-input placeholder="Enter your name"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="Schools__second-row">
        <div class="Schools__button">
          <b-button @click="submit()" variant="outline-secondary"
            >Submit</b-button
          >
        </div>
        <div class="Schools__button">
          <b-button @click="clearData" squared variant="outline-secondary"
            >Clear</b-button
          >
        </div>
      </div>
    </div>

    <div class="Schools__second-container">
      <div class="Schools__main-title">Edit Stock Quantity</div>
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
      <div class="Schools__multiselect-label">
        <multiselect
          v-model="newstationery.name"
          track-by="id"
          :searchable="true"
          :options="stationery"
          label="prod_code"
        ></multiselect>
      </div>
      <div class="Schools__first-row">
        <div class="Schools__input-fields">
          <label for="address">Quantity</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="address"
            v-model="newstationery.unit_price"
          />
        </div>
      </div>
      <div class="Schools__first-row">
        <div class="Schools__multiselect-label">
          <div class="Schools__edit-button">Save</div>
        </div>
      </div>
    </div>

    <div class="Schools__third-container pt-4">
      <div class="Schools__main-title">Stationery Data</div>
      <PublisherTable :dataList="stationery" @editData="editData" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import PublisherTable from "@/components/PublisherTable.vue";

export default {
  name: "StationerystockIn",

  data() {
    return {
      showForm: false,
      editForm: false,
      newstationery: {
        prod_code: "",
        prod_name: "",
        manufacturer: "",
        qty: "",
        pre_gst: null,
        post_gst: null,
        unit_price: null
      }
    };
  },

  components: {
    PublisherTable
  },

  computed: {
    ...mapState({
      leftColor: state => state.leftColor,
      rightColor: state => state.rightColor,
      stationery: state => state.stationery.stationery
    })
  },

  methods: {
    toggleShowForm() {
      this.showForm = !this.showForm;
    },
    clearData() {
      this.newstationery.id = null;
      this.newstationery.name = "";
      this.newstationery.address = "";
      this.newstationery.phone = "";
      this.newstationery.city = "";
      this.editForm = false;
    },
    editData(data) {
      const { name, address, city, phone, id } = data;
      this.newstationery.name = name;
      this.newstationery.id = id;
      this.newstationery.address = address;
      this.newstationery.city = city;
      this.newstationery.phone = phone;
      this.editForm = true;
      this.showForm = true;
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    },
    submit() {
      if (!this.newstationery.name && !this.newstationery.phone) return;
      if (!this.editForm) {
        // remove below code before sending to DB
        const ids = this.stationery.map(item => item.id);
        const sorted = ids.sort((a, b) => a - b);
        const highestId = sorted.length - 1;
        this.newstationery.id = sorted[highestId] + 1;
        this.$store.commit("schoolList/addSchool", this.newstationery);
      } else {
        this.$store.commit("schoolList/editSchool", this.newstationery);
      }
      this.toggleShowForm();
      this.editForm = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "stationery";
</style>
