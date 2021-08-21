<template>
  <v-container fluid pa-0 class="artworksContainer">
    <ArtworksStack></ArtworksStack>
  </v-container>
</template>
<script>
import ArtworksStack from "@/components/artworks/artworks-stack-grid.vue";
export default {
  components: {
    ArtworksStack,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>