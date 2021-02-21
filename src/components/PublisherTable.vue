<template>
  <div class="PublisherTable__main-container">
    <div class="PublisherTable__table-container">
      <div class="PublisherTable__table-heading PublisherTable__table-content-id">Serial #</div>
      <div class="PublisherTable__table-heading PublisherTable__table-heading-name">
        Code
      </div>
      <div
        class="PublisherTable__table-heading PublisherTable__table-heading-address"
      >
        Product Name
      </div>
      <div class="PublisherTable__table-heading PublisherTable__table-heading-gst">
        GST%
      </div>
      <div class="PublisherTable__table-heading PublisherTable__table-heading-phone">
        Unit Price
      </div>
      <div v-if="stockin" class="PublisherTable__table-heading PublisherTable__table-heading-phone">
        Quantity
      </div>
      <div
        class="PublisherTable__table-heading PublisherTable__table-heading-actions"
      >
        Edit <span v-if="!stockin">/ Delete </span>
      </div>
    </div>

    <div
      v-for="(item, index) in dataList"
      :key="index"
      class="PublisherTable__table-container"
    >
      <div class="PublisherTable__table-content PublisherTable__table-content-id">
        {{ index+1 }}
      </div>
      <div class="PublisherTable__table-content PublisherTable__table-content-name">
        {{ item.prod_code }}
      </div>
      <div
        class="PublisherTable__table-content PublisherTable__table-content-address"
      >
        {{ item.prod_name }}
      </div>
      <div class="PublisherTable__table-content PublisherTable__table-content-gst">
        {{ item.pre_gst }} %
      </div>
      <div class="PublisherTable__table-content PublisherTable__table-content-phone">
        {{ item.unit_price }}
      </div>
      <div v-if="stockin" class="PublisherTable__table-content PublisherTable__table-content-phone">
        {{ item.quantity }}
      </div>
      <div
        class="PublisherTable__table-content PublisherTable__table-content-actions"
      >
        <div
          @click="editData(item)"
          class="PublisherTable__button-container"
        >
          <div class="PublisherTable__edit-button">Edit</div>
        </div>
        <div
          v-if="!stockin"
          @click="deleteData(item)"
        class="PublisherTable__button-container">
          <div class="PublisherTable__delete-button">Delete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishersTable",

  props: ["dataList", "stockin"],

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
