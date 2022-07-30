<template>
  <v-container fluid pa-0 class="landingContainer">
    <section id="wall-of-artworks" v-infinite-scroll="showMoreWorks" infinite-scroll-disabled="busyStatus" infinite-scroll-distance="10">
      <ArtworksDisplay></ArtworksDisplay>
    </section>

    <section id="infinite-loader" v-if="busyStatus">
      <v-row justify="center" class="mt-4">
      <v-progress-circular color="blue" indeterminate></v-progress-circular>
      </v-row>
      <v-row justify="center" class="mt-4 blue--text">
          now loading...      
      </v-row>
    </section>

    <section id="no-more-works" v-if="worksIsEmpty">
      <v-row justify="center" class="mt-4 blue--text">
          No More Artworks to Load!      
      </v-row>
    </section>

    <v-row justify="center" class="mt-4">
      <v-col cols="8">
        <div class="contentDivider"></div>
      </v-col>
      <v-col cols="8">
        <v-container class="pa-0">
          <v-card-text class="textBody text-center">
            Job request or commission? <br />
          </v-card-text>
          <v-card-actions class="py-0">
            <v-spacer></v-spacer>
            <v-btn depressed dark color="blue-grey lighten-2" to="/request">
              click me
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-container>
      </v-col>
      <v-col cols="8"> </v-col>
      <v-col cols="8" class="mb-6">
        <v-container class="pa-0">
          <v-card-text class="textBody text-center">
            I display only some of my artworks here.
            <br />
            if you want to look at the others, you can find them 
            <a href="/about/#contact" class="routerLink">here</a>
          </v-card-text>
          
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ArtworksDisplay from "@/components/artworks/artworks-display.vue";
import Spotlight from "@/components/portfolio/artworks-spotlight.vue";
import Criteria from "@/components/portfolio/criteria.vue";


export default {
  components: {
    Spotlight,
    ArtworksDisplay,

    Criteria,
  },
  data() {
    return {
      offset: 5,
      busy: false,
      ready: false,
    };
  },

  methods: {
    showMoreWorks() {
      let currOffset = this.$store.state.resources.worksInShowOffset;
      let maxOffset = (this.maxLength-currOffset) < this.offset ? currOffset + (this.maxLength-currOffset) : currOffset+this.offset;
      if (!this.worksIsEmpty) {
          this.busy = true;
          for(let i = currOffset; i < maxOffset; i++) {
              this.$store.state.resources.worksInShow.push(this.$store.state.resources.myWorks[i]);
              setTimeout(1000);
          }
          this.busy = false;
          this.$store.state.resources.worksInShowOffset += maxOffset-currOffset;
       
      } else {
        this.busy = false;
      }
    },
    async addImageProcess(src){
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img.height)
        img.onerror = reject
        img.src = src
      })
    }
      
  },
  computed: {
    worksIsEmpty(){
      return this.$store.state.resources.worksInShow.length == this.$store.state.resources.myWorks.length;
    },
    maxLength() { return this.$store.state.resources.myWorks.length },
    busyStatus() {
      return this.busy;
    },

  },
  watch: {},
  mounted() {
    window.scrollTo(0, 0);
    if (this.$store.state.resources.worksInShowOffset == 0) {
      this.offset = 5;
      this.showMoreWorks();
      this.offset = 3;
    }
   
  },
};
</script>
<style scoped>
.landingContainer {
}
</style>