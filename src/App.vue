<template>
  <v-app>
    <div class="background">
      <Navbar />
      <v-main>
        <v-container fluid class="pa-0 ma-0">
          <router-view></router-view>
        </v-container>
      </v-main>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";
import Footer from "@/components/layouts/footer.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Navbar,
    Footer,
  },
  created(){
    this.$store.dispatch('gallery/getImages');
  }
};
</script>
<style scoped>
.background {
  background-color: #020021;
}
</style>
