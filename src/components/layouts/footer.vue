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
        <v-col class="text-center footerText">
          <span class="footerCaption">
          You have reached the end of this page.<br/>
          Thank you for sharing your time<br/><br>
          </span>
              <v-row class="">
            <v-spacer></v-spacer>
            <v-btn
              icon
              v-for="(media, i) in $store.state.resources.socialMediasWeb"
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
          <br>
          <span class="copyrightText">
            Illustrations and Designs by Afureru Colors.
            <!-- &copy;{{ new Date().getFullYear() }} -->
            <!-- All Rights Reserved. -->
            <br>
          </span>
          Any concepts and references used in fanwork or fanart (including characters,
          background, etc) still belongs to the original creator.
          <br><br>
          
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
    font-size: 13px;
    color: rgb(58, 104, 129) !important;
}

.footerCaption {
  font-size: 14px;
  color: rgb(58, 104, 129) !important;
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
  font-size: 13px;
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