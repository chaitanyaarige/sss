<template>
  <div class="Schools__main-container">
    <div class="Schools__first-container">
      <div class="Schools__main-title">Please Add School Data</div>
      <div class="Schools__toggle-form" @click="toggleShowForm()">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-plus-circle-fill"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
          />
        </svg>
      </div>
    </div>

    <div v-if="showForm" class="Schools__sub-container">
      <div class="Schools__first-row">
        <multiselect
          v-model="newSchool.name"
          track-by="id"
          :options="schoolList"
          label="name"
        ></multiselect>
      </div>
      <div class="Schools__second-row">
        <div>
          <label for="address">Address</label>
          <input type="text" name="address" v-model="newSchool.address" />
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="text" name="phone" v-model="newSchool.phone" />
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
      showForm: false,
      newSchool: {
        name: "",
        address: "",
        phone: null
      }
    };
  },

  computed: {
    ...mapState({
      leftColor: state => state.leftColor,
      rightColor: state => state.rightColor,
      schoolList: state => state.list.schools
    })
  },

  methods: {
    toggleShowForm() {
      this.showForm = !this.showForm;
    },
    addNewSchool() {},
    getAllSchools() {},
    editSchoolData() {},
    deleteSchool() {}
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

  &__first-container {
    display: flex;
  }
  &__sub-container {
    max-width: 500px;
    margin-left: 12px;
  }

  &__toggle-form {
    cursor: pointer;
  }

  &__main-title {
    display: flex;
    font-size: 20px;
    padding: 0 12px 10px;
  }

  &__second-row {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
