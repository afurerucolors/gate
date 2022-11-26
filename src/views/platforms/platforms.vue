<template>
  <v-container fluid pa-0 class="portal grey lighten-5 fill-height">
    <div class="filter" style="margin: 0 auto">
      <div class="pt-12">
        <v-row>
          <v-container class="content-wrapper mx-auto pa-0 pb-16">
            <v-row class="" justify="center">
              <v-col cols="10" class="text-center pt-0">
                <v-container class="pa-0 mb-6">
                  <v-row class="text-center" justify="center">
                    <v-col cols="12">
                      <img width="200" src="@/assets/images/layouts/logo.png" class="" />
                    </v-col>
                  </v-row>
                  <v-card-text class="text-center c-text-title">
                    Afureru Colors
                  </v-card-text>
                  <v-card-text class="text-center pb-0 c-text-body">
                    I draw stuffs ✎
                  </v-card-text>
                </v-container>
                <v-container>
                  <v-row justify="center" class="c-text-wrapper">
                    <v-col cols="12" sm="6" md="4" class=" c-text-body" v-for="sm in $store.state.platforms.socialMedias"
                      :key="sm.name">
                      <!-- <v-tooltip left color="rgba(245, 245, 245, 1)">
                        <template v-slot:activator="{ on, attrs }"> -->
                      <!-- v-bind="attrs" v-on="on"
                        target="_blank" -->
                      <v-btn :href="sm.disabled ? '' : sm.link" width="100%" height="50px" depressed rounded
                        :color="sm.background" :class="[sm.text, 'font-weight-bold']">
                        <v-row>
                          <v-col cols="3">
                            <v-icon size="22" v-text="sm.icon" v-if="sm.icon" :color="sm.text" class=""></v-icon>
                            <v-container fluid class="pa-0 ma-0 d-flex" v-else>
                              <v-spacer></v-spacer>
                              <v-img width="20px" height="20px" contain class="icon-image " :color="sm.text"
                                :src="require('@/assets/icons/' + (sm.platformsrc ? sm.platformsrc : sm.src) + '.png')" />
                              <v-spacer></v-spacer>
                            </v-container>
                          </v-col>
                          <v-col align-self="center" class="d-flex">
                            {{ sm.name }}
                          </v-col>
                        </v-row>
                      </v-btn>
                      <!-- </template>
                        <div class="c-tooltip-text">
                          <span v-if="!sm.disabled">
                            Takes you to {{ sm.name }}
                          </span>
                          <span v-else> Currently unavailable! </span>
                        </div>
                      </v-tooltip> -->
                    </v-col>
                  </v-row>
                  <v-card-text class="text-center my-4  mt-6 c-text-display">
                    <br>
                    Thank You For Visiting!<br>
                  </v-card-text>
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
    Contacts
  },
  computed: {},
  data() {
    return {
    };
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
  max-width: 800px;
}

.c-tooltip-text {
  color: var(--title-primary-color);
}
</style>