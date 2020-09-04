<template>
  <div class="Company__main-container">
    <div class="Company__first-container">
      <div class="Company__main-title">{{editForm ? "Edit" : "Add"}} Company Data</div>
      <div class="Company__toggle-form" @click="toggleShowForm()">
        <svg
          v-if="!showForm"
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

        <svg
          v-if="showForm"
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-dash-circle-fill"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 7.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H4z"
          />
        </svg>
      </div>
    </div>

    <div v-if="showForm" class="Company__sub-container">
      <div class="Company__second-row">
        <div class="Company__input-fields">
          <label for="name">Company Name</label>
          <input
            class="Company__input-fields-deep"
            type="text"
            name="name"
            v-model="newCompany.name"
          />
        </div>
        <div class="Company__input-fields">
          <label for="city">City</label>
          <input
            class="Company__input-fields-deep"
            type="text"
            name="city"
            v-model="newCompany.city"
          />
        </div>
      </div>
      <div class="Company__second-row">
        <div class="Company__input-fields">
          <label for="address">Address</label>
          <input
            class="Company__input-fields-deep"
            type="text"
            name="address"
            v-model="newCompany.address"
          />
        </div>
        <div class="Company__input-fields">
          <label for="phone">Phone</label>
          <input
            class="Company__input-fields-deep"
            type="text"
            name="phone"
            v-model="newCompany.phone"
          />
        </div>
        <div class="Company__button">
          <b-button @click="submit()" variant="outline-secondary">Submit</b-button>
        </div>
        <div class="Company__button">
          <b-button @click="clearData" squared variant="outline-secondary">Clear</b-button>
        </div>
      </div>
    </div>

    <div class="Company__second-container">
      <div class="Company__main-title">Edit Company Data</div>
      <div class="Company__toggle-form">
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

    <div class="Company__sub-container-two">
      <div v-if="companyList" class="Company__first-row">
        <multiselect
          v-model="editCompany.name"
          @input='editFormMethod'
          track-by="id"
          :searchable="true"
          :options="companyList"
          :label="'name'"
        ></multiselect>
      </div>
    </div>

    <div class="Company__third-container">
      <div class="Company__main-title">Company Data</div>
      <div v-if="!companyList" class="Company__loadingRed">Loading.....</div>
       <BuyersTable v-if='companyList' :dataList="companyList" @editData="editData" @deleteData="deleteData" />
      </div>
    <div v-if="showDeleteConfirm">
      <DeleteConfirmModal @confirmDelete="confirmDelete" :deleteName="newCompany"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BuyersTable from "@/components/BuyersTable.vue";
import DeleteConfirmModal from "@/components/DeleteConfirmModal.vue";

export default {
  name: "Company",

  data() {
    return {
      showForm: false,
      editForm: false,
      showDeleteConfirm: false,
      editCompany: {},
      newCompany: {
        id: null,
        name: "",
        address: "",
        city: "",
        phone: null,
      },
    };
  },

  components: {
    BuyersTable,
    DeleteConfirmModal
  },

  computed: {
    ...mapState({
      leftColor: (state) => state.leftColor,
      companyList: (state) => state.companyList.companies,
    }),
  },

  mounted() {
    this.getAllCompaniesData();
  },

  methods: {
    getAllCompaniesData() {
      this.$store.dispatch("companyList/getCompanies");
    },
    toggleShowForm() {
      this.showForm = !this.showForm;
    },
    clearData() {
      this.newCompany.id = null;
      this.newCompany.name = "";
      this.newCompany.address = "";
      this.newCompany.phone = "";
      this.newCompany.city = "";
      this.editForm = false;
    },
    editFormMethod() {
      this.editForm   =true,
      this.showForm = true
      this.newCompany = Object.assign({}, this.editCompany.name);
    },
    editData(data) {
      const { name, address, city, phone, id } = data;
      this.newCompany.name = name;
      this.newCompany.id = id;
      this.newCompany.address = address;
      this.newCompany.city = city;
      this.newCompany.phone = phone;
      this.editForm = true;
      this.showForm = true;
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    },
    submit() {
      if (!this.newCompany.name && !this.newCompany.phone) return;
      if (!this.editForm) {
        this.$store.dispatch("companyList/addCompany", this.newCompany);
      } else {
        this.$store.dispatch("companyList/editCompany", this.newCompany);
      }
      this.toggleShowForm();
      this.editForm = false;
    },
    confirmDelete(data) {
      if(data) {
      this.$store
        .dispatch("companyList/deleteCompany", this.newCompany)
        .then((response) => {
          this.showDeleteConfirm = false;
          this.newCompany = {}
        })
        .catch((error) => {
          this.showDeleteConfirm = false;
          this.newCompany = {}
          console.log(error);
        });
      }
      else {
        this.newCompany = null
        this.showDeleteConfirm = false
      }
    },
    deleteData(data) {
      this.showDeleteConfirm = true;
      this.newCompany = Object.assign({}, this.newCompany, data);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "index";
</style>
