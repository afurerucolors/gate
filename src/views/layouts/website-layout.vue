<template>
  <v-app>
    <div class="mainApp">
      <header>
        <Navbar></Navbar>
      </header>

      <section id="main-content">
        <v-main class="">
          <v-container fluid class="pa-0 ma-0">
            <router-view></router-view>
          </v-container>
        </v-main>
      </section>
      <footer>
          <Footer></Footer>
      </footer>
    </div>
    <LightBox
      :show="this.$store.state.illustrations.lightbox.show"
      :items="this.$store.state.resources.displayedArts"
    ></LightBox>
    <div class="sideNavigationPanel">
      <v-tooltip
        left
        color="rgba(0,0,0,0.5)"
        v-for="(media, i) in $store.state.resources.socialMedias"
        :key="i"
      >
        <template v-slot:activator="{ on, attrs }">
          <div v-if="!media.hide">
            <v-btn
              icon
              dark
              v-bind="attrs"
              v-on="on"
              :href="media.link"
              target="_blank"
              class="mb-1"
            >
              <v-avatar class="btnTopAvatar" size="25">
                <v-icon
                  size="20"
                  v-if="media.icon"
                  v-text="media.icon"
                  color="blue-grey lighten-2"
                ></v-icon>
                <v-img
                  width="19"
                  height="19"
                  class="contactIcon iconImage mx-1"
                  :src="require('@/assets/icons/' + media.src + '.png')"
                  v-else
                  contain
                />
              </v-avatar>
            </v-btn>
          </div>
        </template>
        <span v-text="media.name"></span>
      </v-tooltip>
    </div>
    <ScrollToTopButton color="rgba(0,0,0,0.5)" />
    <Loader></Loader>
  </v-app>
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";
import Footer from "@/components/layouts/footer.vue";
import Loader from "@/components/layouts/loader.vue";
import ScrollToTopButton from "@/components/layouts/scroll-to-top-button.vue";
import LightBox from "@/components/illustration/lightbox.vue";

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
  },


};
</script>
<style scoped>
.mainApp {
  background-color: rgb(255, 255, 255) !important;
}

.sideNavigationPanel {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 20;
  margin-right: 20px;
}
</style>
