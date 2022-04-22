<template>
  <div dir="rtl">
    <modal v-if="!showDialoag" />
    <app-header />
    <div class="app-container container">
      <span v-if="!routeStart">
        <router-view />
      </span>
      <div class="d-flex align-items-center justify-content-center" v-else>
        <div class="loader"></div>
      </div>
      <side-section />
    </div>
    <app-footer />
  </div>
</template>
<script>
import SideSection from "./components/Layout/SideSection.vue";
import AppFooter from "./components/navigation/AppFooter.vue";
import AppHeader from "./components/navigation/AppHeader.vue";
import Modal from "./components/navigation/Modal.vue";
export default {
  components: { AppHeader, SideSection, AppFooter, Modal },
  data() {
    return {
      routeStart: false,
      showDialoag: true,
    };
  },
  created() {
    this.showDialoag = JSON.parse(localStorage.getItem("dont_show"));
    console.log(this.showDialoag);
  },
  watch: {
    $route(nr) {
      if (nr) {
        this.routeStart = true;
        setTimeout(() => {
          this.routeStart = false;
        }, 300);
      }
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/index.scss";
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");
</style>
