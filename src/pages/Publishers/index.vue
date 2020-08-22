<template>
  <div>
    <div class="ml-2" style="display:flex">
      <div class="m-4 Publisher__underline-active">Add Stationery</div>
      <div class="m-4 Publisher__underline">Add Books</div>
      <div class="m-4 Publisher__underline">Add Govt Books</div>
    </div>

    <StationeryList />
    <GeneralBooks/>
    <GovtBooks/>

  </div>
</template>

<script>
import StationeryList from '@/components/Publishers/StationeryList.vue'
import GeneralBooks from '@/components/Publishers/GeneralBooks.vue'
import GovtBooks from '@/components/Publishers/GovtBooks.vue'

export default {

  components: {
    StationeryList,
    GeneralBooks,
    GovtBooks
  },

  data() {
    return {
      fields: [
        {
          key: "last_name",
          sortable: true
        },
        {
          key: "first_name",
          sortable: false
        },
        {
          key: "age",
          label: "Person age",
          sortable: true
        },
        {
          key: "last_names",
          label: "Person age",
          sortable: false
        }
      ],
      items: [
        {
          isActive: true,
          age: 20,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson"
        }
      ]
    };
  }
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
