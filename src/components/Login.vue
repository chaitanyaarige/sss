<template>
  <div class="m-5 p-5">
    <form  @click="login()">
      <h2 class="m-3">Happy to see you again!</h2>
      <h4 class="m-3">Login to Access...</h4>
      <h6 v-if="errorLogin" class="errorText">Wrong Password or Email, Try Again !!</h6>
      <div class="input-container">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-key-fill"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
          />
          <path
            fill-rule="evenodd"
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
        <input
          class="input-field"
          :class="{'errorClass': errorLogin}"
          @input="removeError()"
          type="text"
          placeholder="sonu@sss.com"
          v-model="email"
          name="email"
        />
      </div>

      <div class="input-container">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-key-fill"
          :fill="leftColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
        <input
          class="input-field"
          type="password"
          @input="removeError()"
          v-model="password"
          placeholder="sonu"
          name="psw"
        />
      </div>

      <b-button variant="outline">Login</b-button>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      password: "",
      email: "",
      errorLogin: false,
    };
  },

  computed: {
    ...mapState({
      leftColor: (state) => state.leftColor,
      rightColor: (state) => state.rightColor,
    }),
  },

  methods: {
    login() {
      if (this.email === "sonu@sss.com" && this.password === "sonu") {
        let data = { email: this.email, password: this.password };
        this.$store.commit("auth/newLogin", data);
      } else this.errorLogin = true;
    },
    removeError() {
      this.errorLogin = false
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  margin: 10px;
}

.input-field {
  line-height: 1.8;
  color: #495057;
  width: 250px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.errorClass {
  border-color: red;
}

.errorText {
  color: red;
}

.btn {
  background: linear-gradient(to left, #ffec89, #c987cf);
}

svg {
  margin-right: 5px;
}
</style>
