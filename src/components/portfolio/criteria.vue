<template>
  <v-container fluid class="selfIntro pa-0 fill-height">
    <v-container class="textContainer mx-auto pa-0 pb-16">
      <v-row class="" justify="center">
        <v-col cols="10" class="pt-16">
          <div class="contentDivider my-6"></div>

          <v-container class="textWrapper bodyText pa-0 ma-0 px-6">
            <v-card-text class="text-center text-uppercase">
              About Requests
            </v-card-text>
            <v-card-text class="text-justify">
              I accept commission or job request for portrait, illustration, or
              character design.
            </v-card-text>
            <v-card-text class="text-justify">
              You may request the illustration as a sketch or fully colored in a
              size of bust up, waist up, full size or any other sizes as you
              requested.
            </v-card-text>
            <v-card-text class="text-justify">
              You may also request it to be with or without background or a bit
              more detailed background like a scene.
            </v-card-text>
            <v-card-text class="text-justify">
              Character or OC design will require additional information.
            </v-card-text>
            <v-card-text class="text-justify">
              For more detailed information may be discussed via my social media
              account.
            </v-card-text>
            <v-card-text class="text-justify">
              But, first of all:
              <ul>
                <li>I accept payment from paypal.</li>
                <li>
                  I don't accept request that needs to be done quickly or has
                  short deadline.
                </li>
              </ul>
            </v-card-text>
            <v-card-text class="text-justify" id="contact">
              Contact person:
              <v-list-item
                v-for="(item, i) in contactPersons"
                :key="i"
                :href="item.link"
                dark
                target="_blank"
                class="contactContainer"
              >
                <v-list-item-icon>
                  <v-icon
                    color="rgb(137, 204, 190)"
                    v-text="item.icon"
                  ></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.name"
                    class="contactText text-uppercase"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.account"
                    class="contactAccount"
                  >
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
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
          <div class="contentDivider my-6"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    contactPersons() {
      return this.$store.state.resources.contactPersons;
    }
  }
};
</script>
<style scoped>
.contactText {
  color: rgb(207, 214, 218) !important;
  font-family: "Karla";
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 700;
}

.contactAccount {
  color: rgb(137, 204, 190) !important;
  font-family: "Karla";
  font-size: 14px;
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
.gradient {
  background-image: linear-gradient(
    hsl(244, 100%, 6%),
    rgba(0, 0, 0, 0),
    hsl(244, 100%, 6%)
  );
}
.textWrapper {
  animation: slidein ease-in-out 2000ms;

  /* border-style: solid;
  border-width: 2px;
  border-color: rgba(170, 170, 221, 0.4); */

  border-radius: 10px;
  /* background-color: rgba(77, 198, 214, 0.3); */

  backdrop-filter: blur(1.5px) grayscale(30%);
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
  -webkit-backdrop-filter: blur(12px) invert();
  /* background-color: rgba(18, 0, 68,0.7); */
}

.textContainer {
  max-width: 800px;
}
</style>