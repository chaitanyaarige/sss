<template>
  <div class="Invoice__main-container">
    <div class="Invoice__sub-container">
      <div>GST: 36BDEPK3258C1ZT</div>
      <div>Phone: 9666542244</div>
    </div>
    <div class="Invoice__sub-two">
      <div style="text-decoration: underline;">TAX INVOICE</div>
      <div class="Invoice__Main-heading">
        Sri Srinivasa Stationery And General Stores
      </div>
      <div>Shop No: D5, R.T.C. Complex, Main Road, Zaheerabad</div>
    </div>
    <div class="Invoice__sub-three">
      <div class="Invoice__invoice-subContainer">
        <div>
          Invoice Number: SSS/CASH/{{ invoice_number }}/{{ currentYear }}-{{
            nextYear
          }}
        </div>
        <div>Date of Invoice: {{ currentTime }}</div>
      </div>
      <div class="Invoice__place-of-supply">
        <div>Place of Supply: Telangana (36)</div>
      </div>
    </div>

    <div class="Invoice__sub-four">
      <div class="Invoice__invoice-subContainer">
        <div> <strong> Billed To:</strong> <br> SRI SRINIVASA Stationery, ZHB</div>
      </div>
      <div class="Invoice__place-of-supply">
        <div>
          <strong>Shipped To: </strong> <br />
          SRI SRINIVASA Stationery, ZHB
        </div>
      </div>
    </div>

    <div class="Invoice__sub-five">
      <BillTable :filteredProductsList="filteredProductsList" />
    </div>

    <div class="Invoice__sub-six">
      <div class="Invoice__invoice-subContainer">
        <div> <strong> Total Quantity:</strong> {{totalQty}} <br> </div>
      </div>
      <div class="Invoice__place-of-supply">
        <div>
          <strong>Total Amount: </strong> {{totalAmt}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BillTable from "@/components/BillTable.vue";
export default {
  components: {
    BillTable
  },

  props: ["invoice_number", "filteredProductsList"],

  computed: {
    currentTime() {
      return new Date().toDateString();
    },
    currentYear() {
      return new Date().getFullYear();
    },
    totalQty() {
      return this.filteredProductsList.reduce((prev,next) => prev + next.quantity,0);
    },
    totalAmt() {
      return this.filteredProductsList.reduce((prev,next) => prev + next.total_amount,0);
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
