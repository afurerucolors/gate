<template>
  <v-container fluid pa-0 class="request">
    <Criteria></Criteria>
    <!-- show some work  -->
  </v-container>
</template>
<script>
import Criteria from "@/components/portfolio/criteria.vue";

export default {
  components: {
    Criteria,
  },
  data() {
    return {};
  },
  computed: {
 
  },
  watch: {},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.request {
  min-height: 100vh;
}
</style>