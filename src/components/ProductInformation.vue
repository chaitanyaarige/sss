<template>
  <div>
    <div class="ProductInformation__main-container">
      <div class="ProductInformation__name">
        <div class="ProductInformation__names">{{cartItem.prod_name}}</div>
        <div class="ProductInformation__names">{{cartItem.prod_code}}</div>
        <div class="ProductInformation__names">{{cartItem.quantity}}</div>
        <div class="ProductInformation__names">
          <input
            type="number"
            v-model="neww"
            @change="changeamount"
            :min="1"
            :max="cartItem.quantity"
            value="1"
            style="width:100px;"
            :class="{'ProductInformation__error': neww === null || neww > cartItem.quantity}"
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

  methods: {
    changeamount() {
      this.$emit('changeamount', this.neww, this.cartItem.id)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "ProductInformation";
</style>
