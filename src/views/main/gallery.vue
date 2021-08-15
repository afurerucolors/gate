<template>
  <v-container fluid pa-0 class="base">
    <Header></Header>
    <!-- <Slider></Slider> -->
    <!-- self intro -->

    <!-- show some work  -->
    <Works></Works>
    
  </v-container>
</template>
<script>
import Works from "@/components/dashboard/works.vue";
export default {
  components: {
    Works,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>

</style>