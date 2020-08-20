<template>
  <div class="Schools__main-container">
    <div class="Schools__sub-container">
      <div class="Schools__first-row">
        <multiselect v-model="newSchool.name" track-by="id" :options="schoolList" label="name"></multiselect>
      </div>
      <div class="Schools__second-row">
        <div>
          <label for="address">Address</label>
          <input type="text" name="address" v-model="newSchool.address"/>
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="text" name='phone' v-model="newSchool.phone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Schools",

  data() {
    return {
      newSchool: {
        name: "",
        address: "",
        phone: null,
      },
    };
  },

  computed: {
    ...mapState({
      language: (state) => state.language,
      schoolList: (state) => state.list.schools,
    }),
  },

  methods: {
    addNewSchool() {

    },
    getAllSchools() {

    },
    editSchoolData() {

    },
    deleteSchool() {

    }
  }
};
</script>

<style lang="scss" scoped>
.Schools {
  &__main-container {
    max-width: 1100px;
    margin: auto;
    padding-top: 25px;
  }

  &__sub-container {
    max-width: 500px;
    margin-left: 12px;
  }



  &__second-row {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
