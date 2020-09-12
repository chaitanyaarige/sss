<template>
  <div>
    <div class="Cashbill__select-container d-print-none ">
      <div class="text-left">
        Select your Products Here:
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="Cashbill__arrow-down"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </div>
      <div v-if="stationery" class="Cashbill__multiselect-label mt-3">
        <multiselect
          v-model="cartProducts"
          track-by="id"
          :multiple="true"
          :searchable="true"
          :options="stationery"
          label="prod_code"
        ></multiselect>
      </div>
    </div>

    <div v-if="cartProducts" class="Cashbill__productinfo-header">
      <div class="Cashbill__productinfo-names">Product Name</div>
      <div class="Cashbill__productinfo-names">Product Code</div>
      <div class="Cashbill__productinfo-names">Quantity</div>
    </div>
    <div v-for="(cartItem, index)  in cartProducts" :key="index">
      <ProductInformation :cartItem="cartItem" @changeamount="changeamount" />
    </div>

    <div v-if="cartProducts" class="Cashbill__button">
      <b-button @click="submit()" :variant="submitClicked">Submit</b-button>
    </div>

    <div v-if="showInvoice" class="Cashbill__invoice-container">
      <Invoice :invoice_number="invoice_number"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Invoice from "@/components/Cashbill/Invoice.vue";
import ProductInformation from "@/components/ProductInformation";
import { BButton } from "bootstrap-vue";

export default {
  name: "cashbill",

  data() {
    return {
      neww: null,
      selectedQuanties: {
        id: null,
        quantity: null,
      },
      invoice_number: 111,
      cartProducts: null,
      filteredProductsList: [],
      filteredProducts: {},
      showInvoice: false,
    };
  },

  components: {
    Invoice,
    ProductInformation,
    BButton,
  },

  watch: {
    cartProducts() {
      this.filteredProductsList = [];
      this.cartProducts.forEach((item) => {
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
    },
  },

  computed: {
    ...mapState({
      stationery: (state) => state.stationery.stationery,
    }),
    submitClicked() {
      return this.showInvoice ? "outline-secondary" : "secondary";
    },
  },

  created() {
    this.getAllStationery();
  },

  methods: {
    getAllStationery() {
      this.$store.dispatch("stationery/getStationery");
    },
    changeamount(data, index) {
      this.cartProducts.amount = data;
    },
    submit() {
      this.showInvoice = true;
      // document.title = "My new title";
      // window.print()
    },
  },
};
</script>

<style lang="scss">
@import "index";
</style>
