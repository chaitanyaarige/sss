<template>
  <div>
    <div class="ml-2" style="display:flex">
      <div
        @click="activateTab(1)"
        class="m-4 Publisher__underline"
        :class="{'Publisher__underline-active': activeTab === 1 }"
      >Add Stationery</div>
      <div
        @click="activateTab(2)"
        class="m-4 Publisher__underline"
        :class="{'Publisher__underline-active': activeTab === 2 }"
      >Add Books</div>
      <div
        @click="activateTab(3)"
        class="m-4 Publisher__underline"
        :class="{'Publisher__underline-active': activeTab === 3 }"
      >Add Govt Books</div>
    </div>

    <StationeryList v-if="activeTab === 1" />
    <GeneralBooks v-if="activeTab === 2" />
    <GovtBooks v-if="activeTab === 3" />
  </div>
</template>

<script>
import StationeryList from "@/components/Publishers/StationeryList.vue";
import GeneralBooks from "@/components/Publishers/GeneralBooks.vue";
import GovtBooks from "@/components/Publishers/GovtBooks.vue";

export default {
  components: {
    StationeryList,
    GeneralBooks,
    GovtBooks,
  },

  data() {
    return {
      activeTab: 1,
    };
  },

  methods: {
    activateTab(data) {
      this.activeTab = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.Publisher {
  &__underline {
    cursor: pointer;
    &-active {
      border-bottom: 4px solid darkcyan;
    }
  }
}
</style>
