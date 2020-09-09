<template>
  <div>
    <div class="Cashbill__select-container">
      Select your Products Here:
      <div v-if="stationery" class="Cashbill__multiselect-label">
        <multiselect
          v-model="cartProducts"
          track-by="id"
          :searchable="true"
          :options="stationery"
          label="prod_code"
        ></multiselect>
      </div>
      <div class="Cashbill__quantity">
        <input type="number" v-model="neww" :min="1" :max="20" value="1">

      </div>
    </div>

    <div>

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
        <BillTable :cartProducts="filteredProductsList" />
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
      neww: null,
      selectedQuanties: {
        id: null,
        quantity:null
      },
      invoice_number: 111,
      cartProducts: null,
      filteredProductsList: [],
      filteredProducts: {}
    };
  },

  components: {
    BillTable
  },
  watch: {
    cartProducts() {
      this.filteredProductsList = [];
      this.cartProducts.forEach(item => {
        this.filteredProducts.prod_name = item.prod_name;
        this.filteredProducts.unit_price = parseInt(item.unit_price);
        this.filteredProducts.cgst_percentage = parseInt(item.post_gst / 2);
        this.filteredProducts.sgst_percentage = parseInt(item.post_gst / 2);
        this.filteredProducts.cgst_amount =
          this.filteredProducts.cgst_percentage *
          this.filteredProducts.unit_price.toFixed(2);
        this.filteredProducts.sgst_amount =
          this.filteredProducts.cgst_percentage *
          this.filteredProducts.unit_price.toFixed(2);
        this.filteredProducts.total_gst =
          this.filteredProducts.cgst_amount + this.filteredProducts.sgst_amount;

        // this.filteredProducts.quantity = item.id ===

        this.filteredProducts.total_amount =
          this.filteredProducts.unit_price * this.filteredProducts.quantity;
        this.filteredProductsList.push(this.filteredProducts);
        this.filteredProducts = {};
      });
    }
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
      );
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
