<template>
  <v-container fluid pa-0 class="artworksContainer">
    <v-stepper class="transparent" v-model="page">
      <v-stepper-content v-for="(group, i) in groups" :key="i" :step="i">
        <ArtworksStack :groups="groups-i"></ArtworksStack>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>
<script>
import ArtworksStack from "@/components/artworks/artworks-stack-grid.vue";
import { mapState } from "vuex";

export default {
  components: {
    ArtworksStack,
  },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    ...mapState({
      groups: (state) => state.resources.info.groups,
    }),
  },
  async created() {
    // if (this.$store.state.resources.gallery.images) {
    //   await this.$store.dispatch("resources/getImages");
    // }
  },
};
</script>
<style scoped>
</style>