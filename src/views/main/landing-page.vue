<template>
  <v-container fluid pa-0 class="landingContainer">
    <Spotlight></Spotlight>
    <v-lazy>
      <Criteria></Criteria>
    </v-lazy>
    <v-container style="max-width: 100%"> </v-container>

    <!-- show some work  -->
  </v-container>
</template>
<script>
import Spotlight from "@/components/portfolio/artworks-spotlight.vue";
import Criteria from "@/components/portfolio/criteria.vue";

export default {
  components: {
    Spotlight,
    Criteria,
  },
  data() {
    return {
      ready: false,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {},
  watch: {},
};
</script>
<style scoped>
.landingContainer {
  min-height: 100vh;
}
.notice {
  position: absolute;
  top: 120px;
  right: 0;
  left: 0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border-radius: 20px;
  text-align: center;
  color: rgb(183, 212, 255);
  bottom: 0;
  padding-top: 30px;
  padding-bottom: 60px;
  backdrop-filter: blur(1px);
  background-color: rgba(1, 11, 24, 0.4);
  height: 50px;
  margin: 0 auto;
  z-index: 2500 !important;
}
</style>