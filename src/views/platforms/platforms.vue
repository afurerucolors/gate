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
                      <img width="200" src="@/assets/images/layouts/logo.png" class="" />
                    </v-col>
                  </v-row>
                  <v-card-text class="text-center pen-name blue-grey--text ">
                    Afureru Colors
                  </v-card-text>
                  <v-card-text class="text-center pb-0 textBody blue-grey--text ">
                    ✎ English/Indonesian
                    <br />
                    I draw Illustration/Arts. For work inquiries, contact ✉
                    <b> afurerucolors@gmail.com</b>.<br />For commission,
                    contact my social media or via Sketchmob/Fiverr <br />
                  </v-card-text>
                </v-container>
                <v-container>
                  <v-row justify="center">
                    <v-col cols="6" md="4" class="textBody" v-for="sm in $store.state.platforms.socialMedias"
                      :key="sm.name">
                      <v-tooltip left color="teal">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn :href="sm.disabled ? '' : sm.link" v-bind="attrs" v-on="on" target="_blank"
                            width="100%" height="100px" depressed :color="
                              sm.background ? sm.background : 'teal lighten-4'
                            " :class="[
  sm.text ? sm.text : '',
  'font-weight-bold',
]">
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
                    Have a Nice Day<br>

                  </v-card-text>
                </v-container>
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
  computed: {},
  data() {
    return {
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

.pen-name {
  font-family: "Poiret One";
  font-weight: 700;
  font-size: small;
  letter-spacing: 2.0px !important;
}
</style>