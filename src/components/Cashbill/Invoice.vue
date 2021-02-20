<template>
  <div class="Invoice__main-container">
    <div class="Invoice_sub-container">
      <div>GST: 36BDEPK3258C1ZT</div>
      <div>Phone: 9666542244</div>
    </div>
    <div class="Invoice__subtwo" style="border: 1px solid grey">
      <div>TAX INVOICE</div>
      <div>Sri Srinivasa Stationery And General Stores</div>
      <div>Shop No: D5, R.T.C. Complex, Main Road, Zaheerabad</div>
    </div>
    <div style="display: flex" class="Invoice__subthree">
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
      class="Invoice__subfour"
      style="display: flex; border: 1px solid grey"
    >
      <div>Billed To: {{ nextYear }}</div>
    </div>
    <div class="Invoice__subfive">
      <!-- <BillTable :cartProducts="filteredProductsList" /> -->
    </div>
    <div>total 3000</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BillTable from "@/components/BillTable.vue";
export default {
  components: {
    BillTable
  },

  props:['invoice_number'],

  computed: {
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
      );
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "Invoice";
</style>
