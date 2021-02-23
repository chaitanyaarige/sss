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

      <div class="text-left mt-3">
        Customer Type:
      </div>
      <div v-if="stationery" class="Cashbill__radio-labels mt-3">
        <input v-model="customerType" type="radio" id="general" value="general">
        <label for="general">general</label><br>
        <input v-model="customerType" type="radio" id="school"  value="school">
        <label for="school">school</label><br>
        <input v-model="customerType" type="radio" id="company" value="company">
        <label for="company">company</label>
      </div>

      <div v-if="customerType != 'general'" class="text-left mt-3">
        To BILL:
      </div>
      <div v-if="customerType != 'general'" class="Cashbill__multiselect-label mt-3">
        <multiselect
          v-model="selectedCustomer"
          track-by="id"
          :multiple="false"
          :searchable="true"
          :options="filteredCustomers"
          label="name"
        ></multiselect>
      </div>
    </div>

    <div v-if="cartProducts" class="d-print-none Cashbill__productinfo-header">
      <div class="Cashbill__productinfo-names">Product Name</div>
      <div class="Cashbill__productinfo-names">Product Code</div>
      <div class="Cashbill__productinfo-names">Max Available Quantity</div>
      <div class="Cashbill__productinfo-names">Quantity</div>
    </div>
    <div class="d-print-none" v-for="(cartItem, index) in cartProducts" :key="index">
      <ProductInformation :cartItem="cartItem" @changeamount="changeamount" />
    </div>

    <div v-if="cartProducts" class="Cashbill__button d-print-none">
      <b-button @click="submit()" :variant="submitClicked">Submit</b-button>
    </div>

    <div v-if="showInvoice" class="Cashbill__invoice-container">
      <Invoice
        :invoice_number="invoice_number"
        :filteredProductsList="filteredProductsList"
      />
      <div class="d-print-none" @click="print">
        Finalize and Print - This will reduce Stock Inventory
      </div>
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
      invoice_number: 111,
      cartProducts: null,
      filteredProductsList: [],
      customerType: 'general',
      selectedCustomer: {},
      filteredProducts: {},
      showInvoice: false
    };
  },

  components: {
    Invoice,
    ProductInformation,
    BButton
  },

  computed: {
    ...mapState({
      stationery: state => state.stationery.stationery,
      schools: state => state.schoolList.schools,
      companies: state => state.companyList.companies
    }),
    submitClicked() {
      return this.showInvoice ? "outline-secondary" : "secondary";
    },
    filteredCustomers() {
      if(this.customerType === 'company') return this.companies
      if(this.customerType === 'school') return this.schools
      return null
    }
  },

  created() {
    this.getAllStationery();
    this.$store.dispatch("schoolList/getSchools");
    this.$store.dispatch("companyList/getCompanies");
  },

  methods: {
    getAllStationery() {
      this.$store.dispatch("stationery/getStationery");
    },
    changeamount(data, index) {
      let modify = this.cartProducts.find(item => item.id === index);
      let productAdded = this.filteredProductsList.find(item => item.prod_code === modify.prod_code)
      if(!productAdded) {
        this.filteredProducts.prod_name = modify.prod_name;
        this.filteredProducts.prod_code = modify.prod_code;
        this.filteredProducts.unit_price = parseInt(modify.unit_price);
        this.filteredProducts.cgst_percentage = parseInt(modify.post_gst / 2);
        this.filteredProducts.sgst_percentage = parseInt(modify.post_gst / 2);
        this.filteredProducts.cgst_amount = this.filteredProducts.cgst_percentage * this.filteredProducts.unit_price.toFixed(2);
        this.filteredProducts.sgst_amount = this.filteredProducts.cgst_percentage * this.filteredProducts.unit_price.toFixed(2);
        this.filteredProducts.total_gst =   this.filteredProducts.cgst_amount + this.filteredProducts.sgst_amount;
        this.filteredProducts.quantity = parseInt(data);
        this.filteredProducts.total_amount = this.filteredProducts.unit_price * parseInt(data);;
        this.filteredProductsList.push(this.filteredProducts);
      } else {
        this.showInvoice = false
        this.filteredProductsList.forEach(item => {
          if(item.prod_code === productAdded.prod_code) item.quantity = parseInt(data);
        }) ;
      }
      this.filteredProducts = {};
    },
    submit() {
      this.showInvoice = true;
    },
    print() {
      document.title = "My new title";
      window.print()
    }
  }
};
</script>

<style lang="scss">
@import "index";
</style>
