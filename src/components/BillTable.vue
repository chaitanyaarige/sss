<template>
    <div class="BillTable__main-container">
        <b-table hover :items="items" :fields="fields"></b-table>
        <div>
            hi
        </div>
        <div>
            no hi
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "S. No",
        },
        {
          key: "product_name",
          label: "Product List"
        },
        {
          key: "hsn_code",
          label: "HSN Code",
        },
        {
          key: "qty",
          label: "Quantity",
        },
        {
          key: "unit_price",
          label: "Price",
        },
        {
          key: "cgst_percentage",
          label: "CGST Rate",
        },
        {
          key: "cgst_amount",
          label: "CGST Amount",
        },
        {
          key: "sgst_percentage",
          label: "SGST Rate",
        },
        {
          key: "sgst_amount",
          label: "SGST Amount",
        },
        {
          key: "total_amount",
          label: "Amount",
        },
      ],
      items: [
        {
          id: 1,
          product_name: "hgjkl",
          hsn_code: "jhklj",
          qty: 3,
          unit_price: 3.3,
          cgst_percentage: 3,
          cgst_amount: 23,
          sgst_percentage: 3,
          sgst_amount: 3,
          total_amount: 100
        },
                {
          id: 2,
          product_name: "hgjkl",
          hsn_code: "jhklj",
          qty: 3,
          unit_price: 3.3,
          cgst_percentage: 3,
          cgst_amount: 23,
          sgst_percentage: 3,
          sgst_amount: 3,
          total_amount: 100
        },

      ],
    };
  },
};
</script>
