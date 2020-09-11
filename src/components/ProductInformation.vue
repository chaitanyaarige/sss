<template>
  <div>
    <div class="ProductInformation__main-container">
      <div class="ProductInformation__name">
        <div class="ProductInformation__names">{{cartItem.prod_name}}</div>
        <div class="ProductInformation__names">{{cartItem.quantity}}</div>
        <div class="ProductInformation__names">
          <input
            type="number"
            v-model="neww"
            :min="1"
            :max="cartItem.quantity"
            value="1"
            style="width:100px;"
            :class="{'ProductInformation__error': neww > cartItem.quantity}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInformation",

  props: ["cartItem"],

  data() {
    return {
      neww: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "ProductInformation";
</style>
