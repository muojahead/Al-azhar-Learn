<template>
  <div class="service-card">
    <div class="header">
      <div class="image">
        <img :src="cardData.image" alt="Regstier Card Image" />
      </div>
      <div class="data h-100">
        <h5 class="title">{{ cardData.title }}</h5>
        <p class="desc m-0">{{ cardData.desc }}</p>
        <button
          class="btn btn-outline-primary d-block mt-auto"
          @click="goToServe(cardData)"
        >
          المزيد
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardData"],
  methods: {
    goToServe(serve) {
      this.$router.push({
        name: serve.link,
        params: { title: serve.title, serve_id: serve.id },
      });
    },
  },
};
</script>

<style>
</style>