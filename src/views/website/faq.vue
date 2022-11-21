<template>
  <v-container fluid pa-0 class="about pb-12">
    <div class="filter">
      <div class="pt-12">
        <v-row justify="center">
          <v-container class="theContainer mx-auto pa-0 pb-16">
            <v-row justify="center" class="textTitle"> FAQ </v-row>
            <v-row class="" justify="center">
              <v-col>
                <v-list>
                  <v-list-group no-action>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          Can i use your artworks as profile picture?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4">
                      Of course and it's free, i would appreciate it if you
                      actually using it!
                    </v-list-item-content>
                  </v-list-group>
                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          Can i use your works as thumbnail/cover for video?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4">
                      Yes, but Include the source or link to my Pixiv/Twitter/
                      other account site i provided here ( choose one that suits
                      you )
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
                      Yes, i would thank you for doing that, but please include
                      the source just name would be okay but a link will be
                      better.
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
                      <ul>
                        <li>Clip Studio Paint Pro</li>
                      </ul>
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
                      <router-link to="/request" class="routerLink"
                        >Visit Here
                      </router-link>
                    </v-list-item-content>
                  </v-list-group>
                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          Can i re-edit and sell your works?
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item-content class="px-4"> No </v-list-item-content>
                  </v-list-group>
                </v-list>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col>
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
  data() {
    return {
      faqs: [
        {
          title: "What software do you use to draw?",
          text: "For now, Clip Studio Paint Pro",
        },
        {
          title: "Can i use your works as thumbnail/cover for video?",
          text: "Yes, but Include the source or link to my Pixiv/Twitter/ other account site i provided here ( choose one that suits you )",
        },
        {
          title: "Can i use your artworks as profile picture?",
          text: "Of course and it's free, i would appreciate if you actually use it.",
        },
        {
          title: "Can i repost your works somewhere?",
          text: "Yes but please include the source just name is okay but link is better.",
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
    contactPersons() {
      return this.$store.state.resources.contactPersons;
    },
  },
};
</script>
<style scoped>
@import url("../../assets/css/text-css.css");
.theContainer {
  min-height: 70vh;
  max-width: 700px;
}
</style>