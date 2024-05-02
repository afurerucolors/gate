<template>
  <v-container fluid pa-0 class="about pb-12">
    <div class="filter c-text-wrapper">
      <div class="pt-12">
        <v-row>
          <v-container class="content-wrapper mx-auto pa-0 pb-16">
            <v-row class="" justify="center">
              <v-col cols="10" class="text-center pt-0">
                <v-container class="pa-0 mb-4">
                  <v-avatar size="170" color="blue-grey lighten-5" class="">
                    <v-img src="@/assets/images/layouts/avatar.jpg"> </v-img>
                  </v-avatar>
                  <v-card-text class="text-center pb-0 c-text-title">
                    Afureru Colors
                  </v-card-text>
                  <v-card-text class="text-center py-0 c-text-subtitle">
                    (Jethro Olwen)
                  </v-card-text>
                </v-container>
                <v-card-text class="text-center pb-2 c-text-body">
                    Language: English/Indonesian.
                  </v-card-text>
                <v-container class=" c-text-container pa-0 ma-0 px-6">
                  <v-card-text class="text-center c-text-body">
                    I draw illustrations (Original/Fan Work), character design and concept arts. You can find my works on various platforms that I provided below. For request and commission, <router-link to="/request"
                      class="c-link-text">click here</router-link>.
                  </v-card-text>
                  <v-card-text class="mt-8 text-center c-text-body" id="contact">
                    Check out these platform for my other works!
                  </v-card-text>
                  <v-card-actions class="py-0">
                    <v-spacer></v-spacer>
                    <v-btn icon v-for="(media, i) in $store.state.resources.platforms" :key="i" :href="media.link"
                      target="_blank">
                      <v-icon size="20px" class="contactIcon mx-1" v-text="media.icon" v-if="media.icon"
                        color="blue-grey lighten-2"></v-icon>
                      <v-img width="18" height="18" contain class="contactIcon iconImage mx-1"
                        :src="require('@/assets/icons/' + media.src + '.png')" v-else />
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                  <div class="c-content-divider my-6"></div>
                  <Contacts></Contacts>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>
import Contacts from '../../components/layouts/contacts.vue';

export default {
  components: {
    Contacts,
  },
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
@import url("../../assets/css/text-css.css");

.content-wrapper {
  min-height: 70vh;
  max-width: 700px;
}

</style>