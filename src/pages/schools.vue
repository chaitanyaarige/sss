<template>
  <div>
    <multiselect
      v-model="selected" :options="options"></multiselect>

      {{language}}
      {{languages}}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "Schools",

  data() {
    return {
      selected: null,
      options: ["list", "of", "options"],
    };
  },

  computed: {
    ...mapState({
      language: state => state.language,
      languages: state => state.list.languages
    }),
  }
};
</script>

<style lang="scss">

</style>
