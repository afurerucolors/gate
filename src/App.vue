<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";
import Footer from "@/components/layouts/footer.vue";
import Loader from "@/components/layouts/loader.vue";
import ScrollToTopButton from "@/components/layouts/scroll-to-top-button.vue";
import LightBox from "@/components/layouts/lightbox.vue";

export default {
  name: "App",
  data: () => ({}),
  components: {
    Navbar,
    Footer,
    Loader,
    ScrollToTopButton,
    LightBox,
  },
  async created() {
    // if (this.$store.state.resources.info.groups == 0) {
    //   this.$store.dispatch("resources/getInfo");
    // }
  },


};
</script>
<style scoped>
.mainApp {
  /* background-color: #1f1f1f !important; */
  /* background-color: hsl(244, 100%, 6%) !important; */
}
.mainApp {
  /* background-color: #1f1f1f !important; */
  background-color: rgb(255, 255, 255) !important;
}

.optionPanel {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 20;
  margin-right: 20px;
}
</style>
