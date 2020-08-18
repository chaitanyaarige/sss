<template>
  <div class="Stockin__main-container">
    <b-container>
      <b-row>
        <b-col cols="4">
          <div @click="addnewrow">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle-fill"
              :fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
              />
            </svg>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-if="addNewProp" class="mt-5">
      <b-row>
        <b-col cols="4">
          <label style="display: block; text-align: left;" for="text"
            >dfdfjd</label
          >
          <b-form-input
            v-model="newitems.last_name"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
        <b-col cols="4">
          <label style="display: block; text-align: left;" for="text"
            >dfdfjd</label
          >
          <b-form-input
            v-model="newitems.first_name"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <label style="display: block; text-align: left;" for="text"
            >dfdfjd</label
          >
          <b-form-input
            v-model="newitems.age"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
        <b-col cols="4">
          <label style="display: block; text-align: left;" for="text"
            >dfdfjd</label
          >
          <b-form-input
            v-model="newitems.isActive"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>
      <button @click="addNewtoTable">Submit</button>
    </b-container>

    <b-container class="mt-4">
      <b-row>
        <b-col>
          <div>
            <b-table
              sticky-header="1000px"
              :items="items"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              responsive="sm"
            ></b-table>

            <div>
              Sorting By:
              <b>{{ sortBy }}</b
              >, Sort Direction:
              <b>{{ sortDesc ? "Descending" : "Ascending" }}</b>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentColor: "#0098f0",
      sortBy: "age",
      addNewProp: false,
      sortDesc: false,
      fields: [
        { key: "last_name", sortable: true },
        { key: "first_name", sortable: true },
        { key: "age", sortable: true },
        { key: "isActive", sortable: false },
      ],
      newitems: {
        isActive: "",
        age: "",
        first_name: "",
        last_name: "",
      },
      items: [
        { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },

  methods: {
    addnewrow() {
      this.addNewProp = !this.addNewProp;
    },
    addNewtoTable() {
      this.items.push({
        isActive: this.newitems.isActive,
        age: this.newitems.age,
        first_name: this.newitems.first_name,
        last_name: this.newitems.last_name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Stockin {
  &__main-container {
    margin: auto;
  }
}
</style>
