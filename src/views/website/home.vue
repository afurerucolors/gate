<template>
  <v-container fluid pa-0 class="landingContainer">
    <section id="art-dis-section" v-infinite-scroll="showMoreWorks" infinite-scroll-disabled="isBusy"
      infinite-scroll-distance="30">
      <IllustrationStack></IllustrationStack>
    </section>

    <section id="infinite-loader" v-if="isBusy">
      <v-row justify="center" class="mt-4">
        <v-progress-circular color="blue" indeterminate></v-progress-circular>
      </v-row>
      <v-row justify="center" class="mt-4 blue--text">
        now loading...
      </v-row>
    </section>

    <v-row justify="center" class="mt-4">
      <v-col cols="8">
        <div class="c-content-divider"></div>
      </v-col>
      <v-col cols="8">
        <v-container class="pa-0">
          <v-card-actions class="py-0">
            <v-spacer></v-spacer>
            <v-btn depressed dark color="blue-grey lighten-2" to="/request">
              Request or Commission
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-container>
      </v-col>
      <v-col cols="8"> </v-col>
      <v-col cols="8" class="mb-6">
        <v-container class="pa-0">
          <v-card-text class="c-text-body text-center">
            I display only some of my artworks here.
            <br />
            if you want to look at the others, you can find them
            <a href="/about/#contact" class="c-link-text">here</a>
          </v-card-text>

        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import IllustrationStack from "@/components/illustration/stack.vue";

export default {
  components: {
    IllustrationStack,
  },
  data() {
    return {
      offset: 3,
      busy: false,
    };
  },

  methods: {
    showMoreWorks() {
      let displayedCount = this.$store.state.resources.displayedArtsCount;
      let maxOffset = (this.worksCount - displayedCount) < this.offset ? displayedCount + (this.worksCount - displayedCount) : displayedCount + this.offset;
      if (!this.noMoreArts) {
        this.busy = true;
        for (let i = displayedCount; i < maxOffset; i++) {
          this.$store.state.resources.displayedArts.push(this.$store.state.resources.illustrations[i]);
          setTimeout(3000);
        }
        this.busy = false;
        this.$store.state.resources.displayedArtsCount += maxOffset - displayedCount;
      } else {
        this.busy = false;
      }
    },
  },
  computed: {
    noMoreArts() {
      return this.$store.state.resources.displayedArts.length == this.$store.state.resources.illustrations.length;
    },
    worksCount() { return this.$store.state.resources.illustrations.length },
    isBusy() { return this.busy }
  },
  watch: {},
  mounted() {
    window.scrollTo(0, 0);
    if (this.$store.state.resources.displayedArtsCount == 0) {
      this.showMoreWorks();
    }

  },
};
</script>
<style scoped>

</style>