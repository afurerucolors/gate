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
                  target="_blank" class="c-link-text"><u>here</u></a>. For my other illustrations please visit my <router-link to="/platforms" class="c-link-text"><u>links</u></router-link>
                <br><br>
                This page should cover some important information regarding basic services, but if you still have unanswered questions, Please message me your inquiries through my social
                media or e-mail.
                <br><br>
                I accept payment through Paypal or <a href="https://vgen.co/AfureruColors" target="_blank"
                class="c-link-text"><u>VGen</u></a>.
                <!-- <a href="https://www.fiverr.com/afurerucolors" target="_blank"
                  class="c-link-text">Fiverr</a> and <a href="https://sketchmob.com/user-profile/afurerucolors"
                  target="_blank" class="c-link-text">Sketchmob</a>, or using direct payment through Paypal. -->
                <br><br>
                There are two types in basic commission:
                <ul>
                    <li>Half Body Character Illustration. Simple illustration in close up or cropped until around waist/thighs</li>
                    <li>Full Character Illustration. More complex illustration which might show more view of the character up to full body composition. </li>
                </ul>
              </v-card-text>
              <PriceContainer></PriceContainer>
              <v-card-text class="text-center text-uppercase c-text-title">
                Term of Services
              </v-card-text>
              <v-card-text class="text-justify c-text-body">
                <div class="text-justify">
                  There will be additional charge for Commercial Purposes.
                  <ul>
                    <li>Monetized Content will be 50% from the total prices</li>
                    <li>Commercial Merchandising will be 100% from total prices</li>
                    <li>Both will be 150% from the total prices</li>
                </ul>
                <br>
                </div>
                <div class="text-justify">
                  Include:
                  <ul>
                    <li>Colored illustration in 4K to 8K resolution. I usually work on A2 canvas with 300 Dpi, might change depending on the request, please let me know if you have preferred aspect ratio in mind.</li>
                    <li>Simple backgrounds or no background (plain white or transparent), You can try to request one if you have preference in mind. Complex or scene background will cost additional charge.</li>
                    <li>Watermarked and non watermarked versions PNG or JPG files (CSP or PSD source files, I will send CSP source files if there is no request)</li>
                  </ul>
                  <br>
                  Currently I don't really has a list of what I will or won't draw, but you are always free to consult your request if you're not sure. You could also try to browse my illustrations from my platforms or internets.
                  <br><br>
                  If you have more questions, you could ask your questions through my social media or e-mail. I use mainly English or Indonesian for communication. But if too hard I can use machine translation.
                  <br><br>
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