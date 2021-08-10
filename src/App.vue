<template>
  <v-app>
    <div class="background">
      <Navbar />
      <v-main>
        <v-container fluid class="pa-0 ma-0 fill-height">
          <router-view></router-view>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: "App",
  created() {
    // this.$store.dispatch('deviantArt/getIllusts');
    // this.$store.dispatch('pixiv/getIllusts')
  },
  data: () => ({}),
  components: {
    Navbar,
  },
};
</script>
<style scoped>
.background {
  background-color: #020021;
}
</style>
