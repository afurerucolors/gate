<template>
  <v-container fluid pa-0 class="about pb-12">
    <div class="filter">
      <div class="pt-12">
        <v-row>
          <v-container class="theContainer mx-auto pa-0 pb-16">
            <v-row class="" justify="center">
              <v-col cols="10" class="text-center pt-0">
                <v-container class="pa-0 mb-6">
                  <v-avatar size="170" color="blue-grey lighten-5" class="">
                    <v-img src="@/assets/layouts/avatar.jpg"> </v-img>
                  </v-avatar>
                  <v-card-text class="text-center pb-0 textTitle">
                    Afureru Colors
                  </v-card-text>
                </v-container>
                <v-container class="textWrapper textContainer pa-0 ma-0 px-6">
                  <v-card-text class="text-center textBody">
                    I am an illustrator from indonesia. <br />
                    I draw original characters, concepts, anime characters, or
                    game characters in majority of anime/manga style. Though
                    rarely, but i do take commission or job request you can
                    visit
                    <router-link to="/" class="routerLink">here</router-link> if
                    you want to know more about that.
                  </v-card-text>
                  <v-card-text
                    class="text-center text-uppercase pb-0 textSubtitle"
                  >
                    Short Background Story
                  </v-card-text>
                  <v-card-text class="text-center textBody">
                    A Litle Story I have come from a long way or maybe not
                    really. if you have been following me from the beginning, i
                    first posted my artwork on the internet with signature Zetto
                    Art, as time passes i shortened it to be Zart.
                    <br /><br />After a lot of things happen, i decided to
                    changed it to the current one. Surely this is not really
                    important but in case it confuse you to find my older works
                    has different signature name.<br /><br />As for my real
                    name, it is Jethro Olwen. You can call me with anyway you
                    like it.
                  </v-card-text>
                  <v-card-text class="text-center textBody">
                    When you look at my works from the past, it really feels
                    different. Even now it keeps changing or evolving which i am
                    not so sure myself.
                  </v-card-text>
                  <v-card-text class="text-center">
                    <v-icon color="rgb(137, 204, 190)" size="20"
                      >mdi-leaf-maple
                    </v-icon>
                    <v-icon color="rgb(137, 204, 190)" size="20"
                      >mdi-leaf-maple
                    </v-icon>
                    <v-icon color="rgb(137, 204, 190)" size="20"
                      >mdi-leaf-maple
                    </v-icon>
                  </v-card-text>
                  <div style="display:block; height: 100px"></div>
                  <v-card-text class="mt-8 text-center textBody" id="contact">
                    Check out these platform for my other works!
                  </v-card-text>
                  <v-card-actions class="py-0">
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
                  </v-card-actions>
                </v-container>
                <!-- <div class="contentDivider my-6"></div> -->
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>
import Criteria from "@/components/portfolio/criteria.vue";

export default {
  components: {
    Criteria,
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
.theContainer {
  min-height: 70vh;
  max-width: 800px;
}
</style>