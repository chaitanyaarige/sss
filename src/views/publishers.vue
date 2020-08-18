<template>
  <div>

    <div class='ml-2' style="display:flex">
      <div class="m-4 Publisher__underline-active">Add Books</div>
      <div class="m-4 Publisher__underline">Add Govt Books</div>
      <div class="m-4 Publisher__underline">Add Stationary</div>
    </div>


<b-row>
  <b-col lg="4" class="pb-2"><b-button size="sm">Small Button</b-button></b-col>
  <b-col lg="4" class="pb-2"><b-button>Default Button</b-button></b-col>
  <b-col lg="4" class="pb-2"><b-button size="lg">Large Button</b-button></b-col>
</b-row>


    <div class='ml-2'>
        <b-button variant="outline-primary">Button</b-button>
      <div class="m-4 Publisher__underline-active">Add Books</div>
      <div class="m-4 Publisher__underline">Add Govt Books</div>
      <div class="m-4 Publisher__underline">Add Stationary</div>
    </div>

    <b-container>
      <b-card>
        <b-table hover :items="items" :fields="fields"></b-table>
      </b-card>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "last_name",
          sortable: true,
        },
        {
          key: "first_name",
          sortable: false,
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
        },
        {
          key: "last_names",
          label: "Person age",
          sortable: false,
        },
      ],
      items: [
        {
          isActive: true,
          age: 20,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          last_names: "Wilson",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .Publisher {
    &__underline {
      cursor:pointer;
      &-active {
        border-bottom: 4px solid darkcyan;
      }
    }
  }
</style>