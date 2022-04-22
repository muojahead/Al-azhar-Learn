<template>
  <div class="main-section">
    <div class="container py-4">
      <div class="sec-title">
        <h2>الخدمات</h2>
      </div>
      <div class="services">
        <service-card
          v-for="(card, cardInd) in services"
          :cardData="card"
          :key="cardInd"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ServiceCard from "./ServiceCard.vue";
export default {
  components: { ServiceCard },
  computed: {
    ...mapGetters(["services"]),
  },
};
</script>

<style>
</style>