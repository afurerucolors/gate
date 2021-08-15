<template>
  <v-footer dark padless>
    <v-container fluid class="dark">
      <v-row class="bottomNavbar">
        <v-spacer></v-spacer>
        <v-btn plain class="bottomNavbarText" to="/">About</v-btn>
        <v-btn plain class="bottomNavbarText" to="/artworks">Gallery</v-btn>
        <v-btn plain class="bottomNavbarText" to="/contact">Contact</v-btn>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-col class="footerText text-center">
          Hello, seems like you have reached the end of this page!
          <div class="mb-1"></div>
          every illustration and artwork here are created by Afureru Colors.
          <br />
          any concepts used in fanwork or fanart (including characters,
          background, etc)<br />
          belongs to the original creator.

          <v-divider class="my-2 mx-16"></v-divider>
        <v-row class="pa-5">
        <v-spacer></v-spacer>
        <v-btn icon><v-icon size="20px" class="contactIcon mx-1">mdi-twitter</v-icon></v-btn>
          
         <v-btn icon> <v-icon size="20px" class="contactIcon mx-1">mdi-instagram</v-icon></v-btn>
         <v-btn icon> <v-icon size="20px" class="contactIcon mx-1">mdi-facebook</v-icon></v-btn>
         <v-btn icon> <v-icon size="20px" class="contactIcon mx-1">mdi-deviantart</v-icon></v-btn>
         <v-btn icon class="text-center"> <img width="19px" class="contactIcon iconImage mx-1" src="@/assets/icons/pixiv.png"></v-btn>
         <v-btn icon> <img width="21px" class="contactIcon iconImage mx-1" src="@/assets/icons/arxist.png"></v-btn>
        <v-spacer></v-spacer>
        </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <span class="copyrightText">Thank you for sharing your time</span>
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
  components: {
  }
};
</script>
<style scoped>
.copyrightText {
  font-size: 10;
}
</style>