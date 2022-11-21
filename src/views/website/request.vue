<template>
  <v-container fluid pa-0 class="request">
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
              I accept commission or job request for drawing original characters, character fan art, cover illustrations, etc. Commission is available on <a href="https://www.fiverr.com/afurerucolors" target="_blank" class="routerLink">Fiverr</a> and <a href="https://sketchmob.com/user-profile/afurerucolors" target="_blank" class="routerLink">Sketchmob</a>, you can also use direct payment via Paypal.
              If you have other kind of request you can message me your offer or request on my social media or e-mail.
            </v-card-text>
            <v-card-text class="text-center text-uppercase textTitle">Basic Commission</v-card-text>
            <v-card-text class="text-justify textBody">
              The illustration will come in half body composition (limited to around knee level) or full body composition based on your request. 
            </v-card-text>
            <v-card-text class="text-justify textBody">
              Each illustration comes with simple background or no background based on the request. You can request detailed background such as scene with extra charge.
            </v-card-text>
            <v-card-text class="text-justify textBody">
              If you have any questions, feel free to ask them through my social media account or e-mail. 
            </v-card-text>
            <v-card-text class="text-justify textBody">
              Some notes:
              <ul>
                <li>Please use English or Indonesian for communication.</li>
                <li>Available payment method is via Paypal (directly) or Sketchmob.</li>               
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
            <PriceContainer></PriceContainer>
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
    <!-- show some work  -->
  </v-container>
</template>
<script>
import PriceContainer from '@/components/commission/price-container.vue';
export default {
  components: {
    PriceContainer
  },
  data() {
    return {};
  },
  computed: {
    contactPersons() {
      return this.$store.state.resources.contactPersons;
    },
  },
  watch: {},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.request {
  min-height: 100vh;
}
.theContainer {
   max-width: 700px;
  }
</style>