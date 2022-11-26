<template>
  <v-container fluid pa-0 class="about pb-12">
    <div class="filter">
      <div class="pt-12">
        <v-row>
          <v-container class="content-wrapper mx-auto pa-0 pb-16">
            <v-row class="" justify="center">
              <v-col cols="10" class="text-center pt-0">
                <v-container class="pa-0 mb-6">
                  <v-avatar size="170" color="blue-grey lighten-5" class="">
                    <v-img src="@/assets/images/layouts/avatar.jpg"> </v-img>
                  </v-avatar>
                  <v-card-text class="text-center pb-0 c-text-title">
                    Afureru Colors
                  </v-card-text>
                </v-container>
                <v-container class="c-text-wrapper c-text-container pa-0 ma-0 px-6">
                  <v-card-text class="text-center c-text-body">
                    I am an illustrator from Indonesia. My actual name is Jethro Olwen, I draw original characters,
                    fictional characters (Anime, Game, or Movie), and concept arts. If you would like to look at those
                    works, please
                    visit any social media or art platforms that I <router-link target="_blank" to="/platforms"
                      class="c-link-text">provided</router-link>.
                  </v-card-text>
                  <v-card-text class="text-center text-uppercase pb-0 c-text-sub-title">
                    Short Background Story
                  </v-card-text>
                  <v-card-text class="text-center c-text-body">
                    I have come from a long way or maybe not really. When you look at my works from the past, it really
                    feels different. Even now it keeps changing or evolving which I am not so sure myself.
                  </v-card-text>
                  <v-card-text class="text-center c-text-body">
                    If you have been following me from the beginning, I first posted my artwork on the internet with my
                    own name, after that I use Zetto Art and shortened it to Zart. I've used that name for pretty long
                    time until I decide to get a name which actually hold some meaning for myself, and that's how I'm
                    going with the current one.
                  </v-card-text>
                  <v-card-text class="text-center">
                    <v-icon color="rgb(137, 204, 190)" size="20">mdi-leaf-maple
                    </v-icon>
                    <v-icon color="rgb(137, 204, 190)" size="20">mdi-leaf-maple
                    </v-icon>
                    <v-icon color="rgb(137, 204, 190)" size="20">mdi-leaf-maple
                    </v-icon>
                  </v-card-text>
                  <div style="display:block; height: 100px"></div>
                  <v-card-text class="mt-8 text-center c-text-body" id="contact">
                    Check out these platform for my other works!
                  </v-card-text>
                  <v-card-actions class="py-0">
                    <v-spacer></v-spacer>
                    <v-btn icon v-for="(media, i) in $store.state.resources.socialMedias" :key="i" :href="media.link"
                      target="_blank">
                      <v-icon size="20px" class="contactIcon mx-1" v-text="media.icon" v-if="media.icon"
                        color="blue-grey lighten-2"></v-icon>
                      <v-img width="18" height="18" contain class="contactIcon iconImage mx-1"
                        :src="require('@/assets/icons/' + media.src + '.png')" v-else />
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-container>
                <!-- <div class="c-content-divider my-6"></div> -->
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>

export default {
  components: {
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
  max-width: 800px;
}
</style>