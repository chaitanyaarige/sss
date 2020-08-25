<template>
  <div class="Schools__main-container">
    <div class="Schools__second-container">
      <div class="Schools__main-title">Edit Stock Quantity</div>
    </div>

    <div class="Schools__sub-container-two">
      <div class="Schools__multiselect-label">
        <multiselect
          v-model="newstationery"
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
      newstationery: {}
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

  methods: {
    clearData() {
      this.newstationery = {}
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
      this.editForm = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "stationery";
</style>
