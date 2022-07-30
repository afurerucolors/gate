<template>
  <v-container fluid class="worksContainer pa-0 mt-2 px-8">
    <v-container class="stackContainer mt-4 pt-0" >
      <stack
        :column-min-width="270"
        :gutter-width="8"
        :gutter-height="8"
        monitor-images-loaded
        class="stack"
      >
        <stack-item v-for="(image, i) in images" :key="i" class="stackItems">
          <v-container
            class="pa-0 pb-0 imageContainer"
            @click="
              $store.commit('resources/setLightbox', {
                index: i,
              })
            "
          >
            <div class="imageCover"></div>
            <img
              :key="i"
              :src="image.link ? image.link : require('@/assets/layouts/portfolio/' +image.src)"
              :alt="'fail to load' + image.title"
              class="image ma-0 pa-0"
            />
          </v-container>
        </stack-item>
      </stack>

      <v-container class="noImage text-center" v-if="images.length == 0">
        <v-progress-circular
          color="rgb(50, 228, 235)"
          class="myLoader"
          indeterminate
          size="40"
          style=""
        ></v-progress-circular
        ><br /><br />
        loading the images...
        <!-- Oops! We cannot load the images properly.<br />
        Please make sure your internet connection and reload the page. -->
      </v-container>
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
      return this.$store.state.resources.worksInShow;
    },
  },
  methods: {
    
  },
  created() {},
};
</script>
<style scoped>
.worksContainer {
  padding-top: 20px;
  min-height: 100vh;
}

.stackContainer {
  max-width: 900px;
}

.stackItems {
  transition: transform 600ms ease-in-out;
  padding: 3px;
  border-radius: 3px;
  /* background-image: -webkit-linear-gradient( rgba(47, 0, 255, 0), rgb(120, 255, 214, 0.9), rgba(47, 0, 255, 0)); */
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  opacity: 0;
  cursor: pointer;
  margin-bottom: 6px;
  z-index: 4000;
  width: 100%;
  border-radius: 10px;
  transition-duration: 500ms;
  /* background-image: linear-gradient(rgba(0, 108, 209,1),rgba(255, 255, 255,0), rgba(68, 0, 196, 1)); */
  /* background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(0, 96, 223, 0.5)
  ); */
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
  /* box-shadow: inset 0 0 20px rgba(0, 34, 46, 0.7); */
  opacity: 100%;

  /* margin-bottom: 0; */

  backdrop-filter: brightness(120%) saturate(110%);
}

</style>