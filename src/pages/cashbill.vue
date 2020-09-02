<template>
  <div>
    <div class="Cashbill__main-container">
      <div class="Cashbill_sub-container">
        <div>GST: 36BDEPK3258C1ZT</div>
        <div>Phone: 9666542244</div>
      </div>
      <div  class="Cashbill__subtwo" style="border: 1px solid grey">
        <div>TAX INVOICE</div>
        <div>Sri Srinivasa Stationery And General Stores</div>
        <div>Shop No: D5, R.T.C. Complex, Main Road, Zaheerabad</div>
      </div>
      <div style="display: flex" class="Cashbill__subthree">
        <div style="border: 1px solid grey">
          <div>Invoice Number: SSS/CASH/{{invoice_number}}/{{currentYear}}-{{(nextYear)}}</div>
          <div>Date of Invoice: {{currentTime}}</div>
        </div>
        <div>
          <div>Place of Supply: Telangana (36)</div>
        </div>
      </div>
      <div class="Cashbill__subfour" style="display: flex; border: 1px solid grey">
        <div>Billed To: {{(nextYear)}}</div>
      </div>
      <div  class="Cashbill__subfive">
        <BillTable  />
      </div>
      <div>total 3000 </div>
    </div>
  </div>
</template>

<style lang="scss">
.Cashbill {
  &__main-container {
    width: 1050px;
    margin: auto;
    min-height: 400px;
    border: 1px solid red;
  }

  &__sub-container {
    display: flex;
  }
}
</style>


<script>
import BillTable from "@/components/BillTable.vue";

export default {
  name: "Cash_Bill",

  data() {
    return {
      invoice_number:111,
    }
  },

  components:  {
    BillTable
  },

  computed: {
    currentTime() {
      return new Date().toDateString();
    },
    currentYear() {
      return new Date().getFullYear();
    },
    nextYear() {
      return parseInt(new Date().getFullYear().toString().substr(2, 2)) + 1;
    },
  },
};
</script>
