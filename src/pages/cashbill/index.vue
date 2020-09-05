<template>
  <div>
    <div class="Cashbill__select-container">
      lorem ipsum dolor
      <div v-if="stationery" class="Schools__multiselect-label">
        <multiselect
          v-model="sdfg"
          track-by="id"
          :searchable="true"
          :options="stationery"
          label="prod_code"
          multiple="true"
        ></multiselect>
      </div>
    </div>

    <div class="Cashbill__main-container">
      <div class="Cashbill_sub-container">
        <div>GST: 36BDEPK3258C1ZT</div>
        <div>Phone: 9666542244</div>
      </div>
      <div class="Cashbill__subtwo" style="border: 1px solid grey">
        <div>TAX INVOICE</div>
        <div>Sri Srinivasa Stationery And General Stores</div>
        <div>Shop No: D5, R.T.C. Complex, Main Road, Zaheerabad</div>
      </div>
      <div style="display: flex" class="Cashbill__subthree">
        <div style="border: 1px solid grey">
          <div>
            Invoice Number: SSS/CASH/{{ invoice_number }}/{{ currentYear }}-{{
              nextYear
            }}
          </div>
          <div>Date of Invoice: {{ currentTime }}</div>
        </div>
        <div>
          <div>Place of Supply: Telangana (36)</div>
        </div>
      </div>
      <div
        class="Cashbill__subfour"
        style="display: flex; border: 1px solid grey"
      >
        <div>Billed To: {{ nextYear }}</div>
      </div>
      <div class="Cashbill__subfive">
        <BillTable />
      </div>
      <div>total 3000</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BillTable from "@/components/BillTable.vue";

export default {
  name: "cashbill",

  data() {
    return {
      invoice_number: 111,
      sdfg: null,
    };
  },

  components: {
    BillTable
  },

  computed: {
    ...mapState({
      stationery: state => state.stationery.stationery
    }),
    currentTime() {
      return new Date().toDateString();
    },
    currentYear() {
      return new Date().getFullYear();
    },
    nextYear() {
      return (
        parseInt(
          new Date()
            .getFullYear()
            .toString()
            .substr(2, 2)
        ) + 1
      )
    }
  },

  created() {
    this.getAllStationery();
  },

  methods: {
    getAllStationery() {
      this.$store.dispatch("stationery/getStationery");
    }
  }
};
</script>

<style lang="scss">
  @import "index";
</style>
