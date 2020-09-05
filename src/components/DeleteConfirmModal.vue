<template>
  <b-modal v-model="show" >
       <template v-slot:modal-header>
        <h5>Do You  Want to Delete?</h5>
        <b-button size="sm" :header-bg-variant="'light'" variant="outline-success" @click="notDelete()">
          Close
        </b-button>
    </template>


    <p class="my-2">{{deleteName}}</p>
    <template v-slot:modal-footer>
      <div class="col">
        <b-button variant="outline-danger" size="sm" class="float-right" @click="confirmDelete()">OKAY</b-button>
      </div>
      <div class="col-5"></div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "Deleteconfirmmodal",

  data() {
    return{
      show: false,
    }
  },

  props: {
    deleteName: {
      type: String,
      default: null
    },
  },

  mounted() {
    this.show = this.deleteName ? true : false;
  },

  methods: {
    notDelete() {
      this.show = false
      this.$emit("confirmDelete", false);
    },
    confirmDelete() {
      this.$emit("confirmDelete", true);
    },
  },
};
</script>
