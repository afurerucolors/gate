<template>
  <v-footer dark padless class="footer">
    <v-container fluid class="dark">
      <v-row class="bottomNavbar">
        <v-spacer></v-spacer>
        <v-btn plain class="bottomNavbarText" to="/">Artworks</v-btn>
        <v-btn plain class="bottomNavbarText" to="/request">Request</v-btn>
        <v-btn plain class="bottomNavbarText" to="/faq">Faq</v-btn>
        <v-btn plain class="bottomNavbarText" to="/about">About</v-btn>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-col class="footerText text-center">
          hey, seems like you have reached the end of this page! <br />
          Thank you for sharing your time

          <br />

          <v-divider class="my-2 mx-16"></v-divider>
          <v-row class="">
            <v-spacer></v-spacer>
            <v-btn
              icon
              v-for="(media, i) in $store.state.resources.socialMedias"
              :key="i"
              :href="media.link"
              target="_blank"
            >
              <v-icon
                size="20px"
                class="contactIcon mx-1"
                v-text="media.icon"
                v-if="media.icon"
                color="blue-grey lighten-2"
              ></v-icon>
              <v-img
                width="18"
                height="18"
                contain
                class="contactIcon iconImage mx-1"
                :src="require('@/assets/icons/' + media.src + '.png')"
                v-else
              />
            </v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <span class="copyrightText">
            Art and Design by &copy;2021 Afureru Colors. All Rights Reserved.<br>
          </span>
          <span class="credit">
            Any concepts and references used in fanwork or fanart (including characters,
            background, etc) still belongs to the original creator.
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style scoped>
.copyrightText {
  font-size: 10;
  color: rgb(58, 104, 129);
}
.footer-dark {
  background-image: linear-gradient(
    to top,
    rgba(57, 238, 126, 0.2),
    rgba(0, 0, 0, 0)
  );
  background-color: rgb(41, 41, 41) !important;
}
.footer {
  background-image: linear-gradient(
    to top,
    rgba(61, 232, 255, 0.2),
    rgba(0, 0, 0, 0)
  );
  background-color: rgb(240, 240, 240) !important;
}

.footerText {
  font-size: 14px;
  color: rgb(58, 104, 129) !important;
  word-spacing: 1.5px;
}
.bottomNavbarText {
  font-size: 11px;
  min-width: 0 !important;
  color: rgb(58, 104, 129) !important;
  letter-spacing: 1.5px;
  padding: 5px !important;
}

</style>