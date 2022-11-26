<template>
  <v-container fluid pa-0 class="request">
    <v-container fluid class="pa-0 fill-height">
    <v-container class="mx-auto pa-0 pb-16 theContainer">
      <v-row class="" justify="center">
        <v-col cols="10" class="pt-6">
          <!-- <div class="c-content-divider my-6"></div> -->

          <v-container class="c-text-wrapper c-text-container pa-0 ma-0 px-6">
            <v-card-text class="text-center text-uppercase c-text-title">
              About Requests
            </v-card-text>
            <v-card-text class="text-justify c-text-body">
              I accept commission or job request for drawing original characters, character fan art, cover illustrations, etc. Commission is available on <a href="https://www.fiverr.com/afurerucolors" target="_blank" class="c-link-text">Fiverr</a> and <a href="https://sketchmob.com/user-profile/afurerucolors" target="_blank" class="c-link-text">Sketchmob</a>, you can also use direct payment via Paypal.
              If you have other kind of request you can message me your offer or request on my social media or e-mail.
            </v-card-text>

            <v-card-text class="text-center text-uppercase c-text-title">Commission</v-card-text>

            <v-card-text class="text-justify c-text-body">
              The illustration will come in half body composition (limited to around knee level) or full body composition based on your request. 
            </v-card-text>
            <PriceContainer></PriceContainer>

            <v-card-text class="text-justify c-text-body">
              Each illustration comes with simple background or no background based on the request. You can request detailed background such as scene with extra charge.
            </v-card-text>
            <v-card-text class="text-justify c-text-body">
              If you have any questions, feel free to ask them through my social media account or e-mail. 
            </v-card-text>

    
            <v-card-text class="text-justify c-text-body">
              Some notes:
              <ul>
                <li>Please use English or Indonesian for communication.</li>
                <li>Available payment method is via Paypal (directly) or Sketchmob.</li>               
              </ul>
            </v-card-text>

            <Contacts></Contacts>
            
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
    <!-- show some work  -->
  </v-container>
</template>
<script>
import Contacts from '../../components/layouts/contacts.vue';
import PriceContainer from '../../components/commission/price-container.vue';
export default {
  components: {
    PriceContainer,
    Contacts,
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