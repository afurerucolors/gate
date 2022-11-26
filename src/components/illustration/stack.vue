<template>
  <v-container fluid class="displayContainer pa-0 mt-2 px-8">
    <v-container class="stackContainer mt-4 pt-0">
      <stack :column-min-width="270" :gutter-width="8" :gutter-height="8" monitor-images-loaded class="stack">
        <stack-item v-for="(image, i) in images" :key="i" class="stackItems">
          <v-container class="pa-0 pb-0 imageContainer" @click="$store.commit('illustrations/openLightboxPreview', i)">
            <div class="imageCover"></div>
            <img :key="i" :src="image.link ? image.link : require('@/assets/images/illustrations/' + image.src)"
              :alt="'fail to load' + image.title" class="image ma-0 pa-0" />
          </v-container>
        </stack-item>
      </stack>

      <!-- <v-container class="noImage text-center" v-if="images.length == 0">
        <v-progress-circular color="rgb(50, 228, 235)" class="myLoader" indeterminate size="40" style="">
        </v-progress-circular><br /><br />
        loading the images...
      </v-container> -->

    </v-container>
  </v-container>
</template>
<script>
import { Stack, StackItem } from "vue-stack-grid";
export default {
  components: { Stack, StackItem },
  data() {
    return {};
  },
  computed: {
    images() {
      return this.$store.state.resources.displayedArts;
    },
  },
  methods: {

  },
  created() { },
};
</script>
<style scoped>
.displayContainer {
  padding-top: 20px;
  min-height: 100vh;
}

.stackContainer {
  max-width: 900px;
}

.stackItems {
  transition: transform 350ms ease-in-out;
  padding: 3px;
  border-radius: 3px;
}

.image {
  border-radius: 10px;
  pointer-events: none;
  transition-duration: 500ms;
  height: 100%;
  width: 100%;
}

.imageCover {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0px;
  cursor: pointer;
  margin-bottom: 6px;
  z-index: 4000;
  width: 100%;
  border-radius: 10px;
  transition-duration: 500ms;
}

.imageContainer {
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}

.imageContainer:hover .image {
  transform: scale(1.05);
}

.imageContainer:hover .imageCover {
  opacity: 100%;
  backdrop-filter: brightness(120%) saturate(110%);
}
</style>