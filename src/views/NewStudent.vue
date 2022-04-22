<template>
  <div class="register-student py-4">
    <div class="container" v-if="service && service != {}">
      <div class="sec-title mb-4 d-flex align-items-center">
        <img
          :src="service.image"
          :alt="service.title"
          class="mx-1"
          width="125"
        />
        <h2>{{ service.title }}</h2>
      </div>
      <div class="sectors-search d-flex">
        <input
          type="text"
          placeholder="ادخل رقمك القومي المكون من 14 رقم..."
          @input="searchAboutUser"
          v-model="searchWord"
        />
        <button class="btn btn-primary mx-2">أستعلام</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      service: {},
      searchWord: "",
    };
  },
  methods: {
    searchAboutUser() {
      console.log(this.searchWord);
    },
  },
  watch: {
    $route(nr) {
      if (nr) {
        this.service = this.services.find(
          (serve) => serve.id == this.$route.params.serve_id
        );
      }
    },
  },
  mounted() {
    this.service = this.services.find(
      (serve) => serve.id == this.$route.params.serve_id
    );
  },
  computed: {
    ...mapGetters(["services"]),
  },
};
</script>

<style>
</style>