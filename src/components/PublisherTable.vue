<template>
  <div class="BuyersTable__main-container">
    <div class="BuyersTable__table-container">
      <div class="BuyersTable__table-heading BuyersTable__table-content-id">Serial #</div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-name">
        Code
      </div>
      <div
        class="BuyersTable__table-heading BuyersTable__table-heading-address"
      >
        Product Name
      </div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-city">
        GST
      </div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-phone">
        Unit Price
      </div>
      <div style="display: none" class="BuyersTable__table-heading BuyersTable__table-heading-phone">
        Unit Price
      </div>
      <div
        class="BuyersTable__table-heading BuyersTable__table-heading-actions"
      >
        Edit / Delete
      </div>
    </div>

    <div
      v-for="(item, index) in dataList"
      :key="index"
      class="BuyersTable__table-container"
    >
      <div class="BuyersTable__table-content BuyersTable__table-content-id">
        {{ item.id }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-name">
        {{ item.prod_code }}
      </div>
      <div
        class="BuyersTable__table-content BuyersTable__table-content-address"
      >
        {{ item.prod_name }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-city">
        {{ item.pre_gst }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-phone">
        {{ item.unit_price }}
      </div>
      <div
        class="BuyersTable__table-content BuyersTable__table-content-actions"
      >
        <div
          @click="editData(item)"
          class="BuyersTable__button-container"
        >
          <div class="BuyersTable__edit-button">Edit</div>
        </div>
        <div
          @click="deleteData(item)"
        class="BuyersTable__button-container">
          <div class="BuyersTable__delete-button">Delete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishersTable",

  props: ["dataList"],

  methods: {
    editData(item) {
      this.$emit("editData", item);
    },
    deleteData(item) {
      this.$emit("deleteData", item)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "PublisherTable";
</style>
