<template>
  <v-container fluid class="pa-0 fill-height">
    <v-container class="mx-auto pa-0 pb-16 theContainer">
      <v-row class="" justify="center">
        <v-col cols="10" class="pt-6">
          <!-- <div class="contentDivider my-6"></div> -->

          <v-container class="textWrapper textContainer pa-0 ma-0 px-6">
            <v-card-text class="text-center text-uppercase textTitle">
              About Requests
            </v-card-text>
            <v-card-text class="text-justify textBody">
              I accept commission or job request for portrait, illustration, or
              character design. For commission, you can also find me on my Sketchmob or Fiverr.
            </v-card-text>
            <v-card-text class="text-justify textBody">
              You may request the illustration as a sketch or fully colored in a
              size of bust up, waist up, full size or any other sizes as you
              requested.
            </v-card-text>
            <v-card-text class="text-justify textBody">
              You may also request it to be with or without background or a bit
              more detailed background like a scene.
            </v-card-text>
            <v-card-text class="text-justify textBody">
              Character or OC design will require additional information.
            </v-card-text>
            <v-card-text class="text-justify textBody">
              For more detailed information may be discussed via my social media
              account.
            </v-card-text>
            <v-card-text class="text-justify textBody">
              But, please note:
              <ul>
                <li>English or Indonesian.</li>
                <li>Paypal is used for payment.</li>               
              </ul>
            </v-card-text>
            <v-card-text class="text-justify textBody" id="contact">
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
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    contactPersons() {
      return this.$store.state.resources.contactPersons;
    },
  },
};
</script>
<style scoped>
.theContainer {
   max-width: 700px;
  }
</style>