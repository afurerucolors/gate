<template>
  <v-container fluid pa-0 class="request">
    <v-container fluid class="pa-0 fill-height">
      <v-container class="mx-auto pa-0 pb-16 content-wrapper">
        <v-row class="" justify="center">
          <v-col cols="10" class="pt-6">
            <!-- <div class="c-content-divider my-6"></div> -->

            <v-container class="c-text-wrapper c-text-container pa-0 ma-0 px-6">
              <v-card-text class="text-center text-uppercase c-text-title">
                Request or Commission
              </v-card-text>

              <v-card-text class="text-justify c-text-body">
                I accept commission or job request for drawing illustration of original, anime, or movie characters. You could find most of my commission/request work <a href="https://cara.app/afurerucolors/portfolio/commissions"
                  target="_blank" class="c-link-text"> <u>here</u> </a>
                <br><br>
                This page provide more detailed information regarding basic commission, if you still have unanswered questions, Please message me your inquiries through my social
                media or e-mail.
                <br><br>
                My Commission service is available through <a href="https://www.fiverr.com/afurerucolors" target="_blank"
                  class="c-link-text">Fiverr</a> and <a href="https://sketchmob.com/user-profile/afurerucolors"
                  target="_blank" class="c-link-text">Sketchmob</a>, or using direct payment through Paypal.
                Basic commission currently divided into half body composition (limited to around knee level) and full
                body
                composition.
              </v-card-text>

              <PriceContainer></PriceContainer>

              <v-card-text class="text-justify c-text-body">
                <div class="text-justify">
                  You could request for more subjects/additional characters with discounted price.<br><br>Each
                  illustration
                  comes with or without simple background, you could also request for detailed background
                  such as scene with extra charge.
                  <br><br>
                  Pet cover more simple pet that can be find in daily life, while companion could be a mascot or more detailed creature than your usual pet.
                  <br><br>
                  If you have more questions, you could ask your questions through my social media or e-mail.
                  <br><br>
                </div>
                <div class="text-justify">
                  Some notes:
                  <ul>
                    <li>Please use English or Indonesian for communication.</li>
                    <li>Available payment method supported for direct payment is Paypal.</li>
                  </ul>
                </div>
              </v-card-text>
              <Contacts></Contacts>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
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

.content-wrapper {
  min-height: 70vh;
  max-width: 700px;
}
</style>