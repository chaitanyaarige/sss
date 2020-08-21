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
        <div class="BuyersTable__button-container">
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

  props: ["schoolList"]
};
</script>

<style lang="scss" scoped>
.BuyersTable {
  &__main-container {
    display: block;
  }

  &__table-container {
    display: flex;
    width: 1000px;
    margin: auto;
  }

  &__edit-button {
    border: 1px solid;
    padding: 0.1rem 1rem;
    vertical-align: middle;
    border-color: #f18f90;
    color: black;
    cursor: pointer;
    line-height: 1;
    user-select: none;
    background-color: transparent;
  }

  &__delete-button {
    border: 1px solid;
    padding: 0.1rem 1rem;
    vertical-align: middle;
    border-color: #f18f90;
    color: darkgrey;
    cursor: pointer;
    line-height: 1;
    user-select: none;
    background-color: transparent;
  }

  &__button-container {
    margin-right: 5px;
  }

  &__table-heading {
    padding: 10px;
    border-bottom: 1px solid darkgrey;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    text-align: left;
    &-id {
      min-width: 60px;
      text-align: unset;
    }
    &-name {
      width: 250px;
    }
    &-address {
      width: 250px;
    }
    &-city {
      width: 140px;
    }
    &-phone {
      width: 100px;
    }
    &-actions {
      width: 150px;
    }
  }

  &__table-content {
    padding: 10px;
    border-bottom: 1px solid darkgrey;
    font-size: 14px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    text-align: left;
    &-id {
      min-width: 60px;
      text-align: unset;
    }
    &-name {
      width: 250px;
    }
    &-address {
      width: 250px;
    }
    &-city {
      width: 140px;
    }
    &-phone {
      width: 100px;
    }
    &-actions {
      display: flex;
      width: 150px;
    }
  }
}
</style>
