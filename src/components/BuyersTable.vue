<template>
  <div class="BuyersTable__main-container">
    <div class="BuyersTable__table-container">
      <div class="BuyersTable__table-heading">Serial #</div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-name">
        Name
      </div>
      <div
        class="BuyersTable__table-heading BuyersTable__table-heading-address"
      >
        Address
      </div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-city">
        City
      </div>
      <div class="BuyersTable__table-heading BuyersTable__table-heading-phone">
        phone
      </div>
      <div
        class="BuyersTable__table-heading BuyersTable__table-heading-actions"
      >
        Edit/Delete
      </div>
    </div>

    <div
      v-for="(item, index) in schoolList"
      :key="index"
      class="BuyersTable__table-container"
    >
      <div class="BuyersTable__table-content BuyersTable__table-content-id">
        {{ item.id }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-name">
        {{ item.name }}
      </div>
      <div
        class="BuyersTable__table-content BuyersTable__table-content-address"
      >
        {{ item.address }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-city">
        {{ item.city }}
      </div>
      <div class="BuyersTable__table-content BuyersTable__table-content-phone">
        {{ item.phone }}
      </div>
      <div
        class="BuyersTable__table-content BuyersTable__table-content-actions"
      >
        <div
          @click="editSchoolData(item)"
          class="BuyersTable__button-container"
        >
          <div class="BuyersTable__edit-button">Edit</div>
        </div>
        <div class="BuyersTable__button-container">
          <div class="BuyersTable__delete-button">Delete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyersTable",

  props: ["schoolList"],

  methods: {
    editSchoolData(item) {
      this.$emit("editSchoolData", item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "BuyersTable";
</style>
