<template>
  <v-container fluid pa-0 class="faq pb-12">
    <div class="filter">
      <div class="pt-12">
        <v-row justify="center">
          <v-container class="theContainer mx-auto pa-0 pb-16">
            <v-row justify="center" class="c-text-title"> FAQ </v-row>
            <v-row class="" justify="center">
              <v-col>
                <v-list rounded>

                  <v-list-group no-action >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title >
                          Could I use your art as profile picture/background?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4">
                      Outside of commission or work illustrations, I don't see any problem with it.
                    </v-list-item-content>
                  </v-list-group>


                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          Can i repost your works somewhere?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4">
                      Outside of commission or work illustrations, I don't see any problem with it. Please include the
                      original link or source when you do.
                    </v-list-item-content>
                  </v-list-group>

                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          What software do you use to draw?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4">
                      Clip Studio Paint Pro
                    </v-list-item-content>
                  </v-list-group>


                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          Do you take request or commissions?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4">
                      <router-link to="/request" class="c-link-text">Please visit this section
                      </router-link>
                    </v-list-item-content>
                  </v-list-group>


                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          Can i re-edit or sell your works?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4"> No </v-list-item-content>
                  </v-list-group>


                </v-list>
              </v-col>
            </v-row>

            <contacts></contacts>
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
    Contacts,
  },
  data() {
    return {
      faqs: [
        {
          title: "What software do you use to draw?",
          text: "Clip Studio Paint Pro",
        },
        {
          title: "Could I use your art as profile picture/background?",
          text: "Outside of commission or work illustrations, I don't see any problem with it.",
        },
        {
          title: "Could I repost your art on other platforms?",
          text: "Outside of commission or work illustrations, I don't see any problem with it. Please include the source when you do.",
        },
        {
          title: "Do you accept commissions?",
          text: "",
          link: "/request",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    
  },
};
</script>
<style scoped>
@import url("../../assets/css/text-css.css");

.theContainer {
  min-height: 70vh;
  max-width: 500px;
}

.faq {}
</style>