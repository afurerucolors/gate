<template>
  <v-container fluid pa-0 class="about pb-12">
    <div class="filter">
      <div class="gradient pt-12">
        <v-row>
          <v-container class="textContainer mx-auto pa-0 pb-16">
            <v-row class="" justify="center">
              <v-col cols="10" class="text-center pt-0">
                <v-container class="pa-0 mb-6">
                  <v-avatar size="170" color="blue-grey lighten-5" class="pa-2">
                    <v-img src="@/assets/layouts/avatar.jpg"> </v-img>
                  </v-avatar>
                  <v-card-text class="text-center text-uppercase pb-0">
                    afureru colors
                  </v-card-text>
                </v-container>
                <v-container class="textWrapper bodyText pa-0 ma-0 px-6">
                  <v-card-text class="text-center">
                    I am an illustrator from indonesia. i draw original
                    characters, concepts, anime characters, or game characters
                    in majority of anime/manga style. Though rarely, but i do
                    take commission or job request you can visit
                    <router-link to="/" class="routerLink">here</router-link> if
                    you want to know more about that.
                  </v-card-text>
                  <v-card-text class="text-center text-uppercase pb-0">
                    Short Background Story
                  </v-card-text>
                  <v-card-text class="text-center">
                    A Litle Story I have come from a long way (maybe not
                    really). if you have been following me from the beginning, i
                    first posted my artwork on the internet with signature Zetto
                    Art, as time passes i shortened it to be Zart. After a lot
                    of things happen, i decided to changed it to the current
                    one. Surely this is not really important but in case it
                    confuse you to find my older works has different signature
                    name.<br />As for my real name, it is Jethro Olwen. You can
                    call me with anyway you like it.
                  </v-card-text>
                  <v-card-text class="text-center">
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
};
</script>
<style scoped>
.routerLink {
  text-decoration: none;
  color: rgb(137, 204, 190) !important;
}

.theTitle {
  color: rgb(137, 204, 190) !important;
  font-family: "Karla";
  font-weight: 600;
  letter-spacing: 0.6px;
  font-size: 20px;
}
.about {
  /* background-image: url("../../assets/layouts/header.jpg"); */
  background-size: cover;
}

.contactText {
  color: rgb(207, 214, 218) !important;
  font-family: "Karla";
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 700;
}

.selfIntro {
}
@keyframes slidein {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}

.textWrapper {
  animation: slidein ease-in-out 2000ms;

  /* border-style: solid;
  border-width: 2px;
  border-color: rgba(170, 170, 221, 0.4); */

  border-radius: 10px;
  /* background-color: rgba(77, 198, 214, 0.3); */
}
.bodyText {
  font-size: 14px;
  color: rgb(207, 214, 218) !important;
  letter-spacing: 0.4px;
  border-radius: 20px;
  border-style: solid;
  border-image: -webkit-linear-gradient(
    rgba(47, 0, 255, 0),
    rgb(66, 242, 255, 0.2),
    rgb(120, 255, 214, 0.3),
    rgb(66, 242, 255, 0.2),
    rgba(47, 0, 255, 0)
  );
  border-image-slice: 1;
  width: 100;
  color: rgb(240, 232, 234);
  /* -webkit-backdrop-filter: blur(12px) invert(); */
  backdrop-filter: blur(5px);
  /* background-color: rgba(18, 0, 68,0.7); */
}

.textContainer {
  max-width: 800px;
}

.filter {
  /* background-color: rgba(21, 21, 21, 0.6); */
}

.gradient {
  background-image: linear-gradient(
    rgb(31, 31, 31),
    rgba(31, 31, 31, 0),
    rgba(31, 31, 31)
  );
}
</style>