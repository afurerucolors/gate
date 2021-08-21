<template>
  <v-app>
    <div class="mainApp">
      <Navbar></Navbar>
      <v-main>
        <v-container fluid class="pa-0 ma-0">
          <router-view></router-view>
        </v-container>
      </v-main>
      <Footer></Footer>
    </div>
    <Loader></Loader>
    <LightBox
      :show="this.$store.state.resources.lightbox.show"
      :items="this.$store.state.resources.gallery.images"
      type="gallery"
    ></LightBox>
      <LightBox
      :show="this.$store.state.resources.portfolioLightbox.show"
      :items="this.$store.state.resources.portfolio.images"
      type="portfolio"
    ></LightBox>

    <v-tooltip left color="black">
      <template v-slot:activator="{ on, attrs }">
        <div class="btnTop">
          <v-btn
            icon
            dark
            v-bind="attrs"
            v-on="on"
            @click="
              $vuetify.goTo(0, {
                duration: 700,
                offset: 500,
                easing: 'easeInOutQuad',
              })
            "
          >
            <v-avatar class="btnTopAvatar" size="40">
              <v-icon>mdi-arrow-up-bold</v-icon>
            </v-avatar>
          </v-btn>
        </div>
      </template>
      <span>Go to Top</span>
    </v-tooltip>
  </v-app>
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";
import Footer from "@/components/layouts/footer.vue";
import Loader from "@/components/layouts/loader.vue";
import LightBox from "@/components/layouts/lightbox.vue";

export default {
  name: "App",
  data: () => ({}),
  components: {
    Navbar,
    Footer,
    Loader,
    LightBox,
  },
  async created() {
    await this.$store.dispatch("resources/getImages").then(() => {});
  },
};
</script>
<style scoped>
.mainApp {
  background-color: #1f1f1f !important;
  /* background-color: hsl(244, 100%, 6%) !important; */
}

.btnTop {
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 10px;
  margin-bottom: 20px;
}


.btnTopAvatar{
  /* background-color: rgb(0, 0, 44,0.5) ; */
  backdrop-filter: blur(5px);
}
</style>
