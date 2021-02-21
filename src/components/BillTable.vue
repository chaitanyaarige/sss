<template>
    <div class="BillTable__main-container">
        <b-table hover :items="filteredProductsList" :fields="fields"></b-table>
        <div>
            hi
        </div>
        <div>
            no hi
        </div>
    </div>
</template>

<style>
table {
    counter-reset: rowNumber+1;
}

table tr:not(:first-child) {
    counter-increment: rowNumber;
}

table tr td:first-child::before {
    content: counter(rowNumber);
    min-width: 1em;
    margin-right: 0.5em;
}
</style>

<script>
import {BTable}  from "bootstrap-vue";
export default {

  components: {
    BTable
  },

  props: ["filteredProductsList"],

  data() {
    return {
      fields: [
        {
          key: "id",
          label: "S. No",
        },
        {
          key: "prod_name",
          label: "Product Name"
        },
        {
          key: "hsn_code",
          label: "HSN Code",
        },
        {
          key: "quantity",
          label: "Quantity",
        },
        {
          key: "unit_price",
          label: "Price",
        },
        {
          key: "cgst_percentage",
          label: "CGST %",
        },
        {
          key: "cgst_amount",
          label: "CGST Amount",
        },
        {
          key: "sgst_percentage",
          label: "SGST %",
        },
        {
          key: "sgst_amount",
          label: "SGST Amount",
        },
        {
          key: "total_amount",
          label: "Amount",
        },
      ]
    };
  },
};
</script>
