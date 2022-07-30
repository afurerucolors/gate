<template>
  <v-container fluid pa-0 class="portal grey lighten-5 fill-height">
    <div class="filter" style="margin: 0 auto">
      <div class="pt-12">
        <v-row>
          <v-container class="theContainer mx-auto pa-0 pb-16">
            <v-row class="" justify="center">
              <v-col cols="10" class="text-center pt-0">
                <v-container class="pa-0 mb-6">
                  <v-row class="text-center" justify="center">
                    <v-col cols="12">
                      <img
                        width="200"
                        src="@/assets/layouts/logo.png"
                        class=""
                      />
                    </v-col>
                  </v-row>
                  <!-- <v-avatar size="170" color="blue-grey lighten-5" class=""> -->
                  <!-- </v-avatar> -->
                  <v-card-text
                    class="text-center linksLogo teal--text text--darken-2"
                  >
                    Afureru Colors
                  </v-card-text>
                  <!-- <v-card-text
                    class="
                      text-center
                      pb-0
                      textBody
                      red--text
                      text-subtitle-2 text--lighten-2
                    "
                  >
                    I'm very sorry!
                    <br />
                    I am not accepting any job/work request right now.
                    <br />
                    Will be back later!
                  </v-card-text> -->
                  <v-card-text class="text-center pb-0 textBody blue-grey--text text--lighten-3">
                    ✎ English/Indonesian
                    <br />
                    I draw Illustration/Arts. For work inquiries, contact ✉
                    <b> afurerucolors@gmail.com</b>.<br />For commission,
                    contact my social media or via Sketchmob/Fiverr <br />
                  </v-card-text>
                </v-container>
                <v-container>
                  <v-row justify="center">
                    <v-col
                      cols="6"
                      md="4"
                      class="textBody"
                      v-for="sm in $store.state.resources.socialMedias"
                      :key="sm.name"
                    >
                      <v-tooltip left color="teal" >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            :href="sm.disabled ? '' : sm.link"
                            v-bind="attrs"
                            v-on="on"
                            target="_blank"
                            width="100%"
                            height="100px"
                            depressed
                            :color="
                              sm.background ? sm.background : 'teal lighten-4'
                            "
                            :class="[
                              sm.text ? sm.text : '',
                              'font-weight-bold',
                            ]"
                          >
                            {{ sm.name }}
                          </v-btn>
                        </template>
                        <div>
                          <span v-if="!sm.disabled">
                            Takes you to {{ sm.name }}
                          </span>
                          <span v-else> Currently unavailable! </span>
                        </div>
                      </v-tooltip>
                    </v-col>
                  </v-row>
                  <v-card-text class="text-center my-4  mt-6 textBody thanks">
                    <br>
                   <span class="text-caption">
                     this is the end of this page.<br>
                    <!-- ⋯ -->
                    </span> 
                   Have a Nice Day<br>
                  
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
  computed: {},
  data() {
    return {
      accounts: [
        {
          name: "Pixiv",
          logo: "",
          img: "",
          link: "",
        },
        {
          name: "Twitter",
          logo: "",
          img: "",
          link: "",
        },
        {
          name: "Instagram",
          logo: "",
          img: "",
          link: "",
        },
        {
          name: "DeviantArt",
          logo: "",
          img: "",
          link: "",
        },
        {
          name: "Facebook",
          logo: "",
          img: "",
          link: "",
        },
      ],
    };
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