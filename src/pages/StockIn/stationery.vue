<template>
  <div class="Schools__main-container">
    <div class="Schools__second-container">
      <div class="Schools__main-title">Edit Stock Quantity</div>
    </div>

    <div class="Schools__sub-container-two">
      <div v-if="stationery" class="Schools__multiselect-label">
        <multiselect
          v-model="newstationery"
          track-by="id"
          :searchable="true"
          :options="stationery"
          label="prod_code"
        ></multiselect>
      </div>
      <div class="Schools__first-row">
        <div v-if='newstationery' class="Schools__input-fields">
          <label for="address">Quantity</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="address"
            v-model="newstationery.quantity"
          />
        </div>
      </div>
      <div class="Schools__first-row">
        <div class="Schools__multiselect-label">
          <div @click="submit" class="Schools__edit-button">Save</div>
        </div>
      </div>
    </div>

    <div class="Schools__third-container pt-4">
      <div class="Schools__main-title">Stationery Data</div>
      <PublisherTable
      :stockin="true"
      :dataList="stationery" @editData="editData" />
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
      editForm: false,
      newstationery: {},
    };
  },

  components: {
    PublisherTable
  },

  computed: {
    ...mapState({
      stationery: state => state.stationery.stationery
    })
  },

  mounted() {
    this.getAllStationery();
  },

  methods: {
    getAllStationery() {
      this.$store.dispatch("stationery/getStationery");
    },
    clearData() {
      this.newstationery = {}
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
    },
    submit() {
      if (!this.newstationery.quantity && !this.newstationery.prod_code) return;
      this.$store.dispatch("stationery/editStationery", this.newstationery);
      this.clearData()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "stationery";
</style>
