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
      <div class="Schools__second-row">
        <div class="Schools__input-fields">
          <label for="name">School Name</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="name"
            v-model="newSchool.name.name"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="city">City</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="city"
            v-model="newSchool.city"
          />
        </div>
      </div>
      <div class="Schools__second-row">
        <div class="Schools__input-fields">
          <label for="address">Address</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="address"
            v-model="newSchool.address"
          />
        </div>
        <div class="Schools__input-fields">
          <label for="phone">Phone</label>
          <input
            class="Schools__input-fields-deep"
            type="text"
            name="phone"
            v-model="newSchool.phone"
          />
        </div>
        <div Class="Schools__button">
          <b-button squared variant="outline-secondary">Submit</b-button>
        </div>
      </div>
    </div>

    <div class="Schools__second-container">
      <div class="Schools__main-title">Edit School Data</div>
      <div class="Schools__toggle-form">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-pencil"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
          />
          <path
            fill-rule="evenodd"
            d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
          />
        </svg>
      </div>
    </div>

    <div class="Schools__sub-container-two">
      <div class="Schools__first-row">
        <multiselect
          v-model="newSchool.name"
          track-by="id"
          :options="schoolList"
          label="name"
        ></multiselect>
      </div>
    </div>

    <div class="Schools__second-container">
      <div class="Schools__main-title">Edit School Data</div>
      <div class="Schools__toggle-form">
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
input,
label {
  display: block;
  margin-bottom: unset;
}

.Schools {
  &__main-container {
    max-width: 1100px;
    margin: auto;
    padding-top: 25px;
  }

  &__first-container {
    display: flex;
  }

  &__button {
    margin: 14px 40px;
  }

  &__second-container {
    display: flex;
    padding-top: 20px;
    border-top: 2px dotted lightgray;
  }

  &__input-fields-deep {
    line-height: 1.8;
    color: #495057;
    width: 250px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  &__input-fields {
    text-align: left;
    margin: 0 10px 10px 0;
  }

  &__sub-container {
    max-width: 700px;
    margin-left: 12px;
    margin-bottom: 30px;
  }

  &__sub-container-two {
    max-width: 500px;
    margin-left: 12px;
    margin-top: 10px;
    margin-bottom: 30px;
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
  }
}
</style>
