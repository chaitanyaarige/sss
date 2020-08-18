<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="2">
          <div class="text-center">
            <b-button variant="primary">
              Add New
              <b-badge variant="light">4</b-badge>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-4">
      <b-row>
        <b-col>
          <b-row>
            <b-col cols="5">
              <b-table striped hover :items="items" :fields="fields"></b-table>
            </b-col>
            <b-col cols="2">
              <b-button variant="primary">Save</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
     data() {
      return {
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>