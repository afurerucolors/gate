<template>
  <v-container fluid class="worksContainer pa-0 mt-2 px-8">
    <stack
      :column-min-width="270"
      :gutter-width="8"
      :gutter-height="8"
      monitor-images-loaded
      class="stack"
    >
      <stack-item v-for="(image, i) in images" :key="i" class="stackItems">
        <v-container class="pa-0 imageContainer">
          <div class="imageCover"></div>
          <img
            :key="i"
            :src="image.src"
            :alt="'fail to load' + image.title"
            class="image ma-0 pa-0"
          />
          <v-container class="noImage" v-if="images.length == 0">
            Oops! images failed to load, please make sure your internet
            connection and reload the page.
          </v-container>
        </v-container>
      </stack-item>
    </stack>
    <v-container class="noImage text-center">
      Oops! We cannot load the images properly.<br />
      Please make sure your internet connection and reload the page.
    </v-container>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import { Stack, StackItem } from "vue-stack-grid";
export default {
  components: { Stack, StackItem },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      images: (state) => state.gallery.images,
    }),
  },
  methods: {
    async prepareImages() {
      await $(".pictures").tjGallery({
        row_min_height: 150,
        selector: "img",
      });
    },
  },
  created() {},
};
</script>
<style scoped>
.worksContainer {
  min-height: 100vh;
}

.stackItems {
  transition: transform 300ms;
}

.image {
  border-radius: 10px;
  cursor: pointer;
  /* animation-duration: 1000ms; */
  transition-duration: 400ms;
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
  max-width: 100%;
  border-radius: 10px;
  transition-duration: 400ms;
  /* background-image: linear-gradient(rgba(0, 108, 209,1),rgba(255, 255, 255,0), rgba(68, 0, 196, 1)); */
  /* background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(0, 96, 223, 0.5)
  ); */
}

.imageContainer {
  overflow: hidden;
  border-radius: 10px;
}

.imageCover:hover {
  opacity: 100%;
  
  backdrop-filter: brightness(120%) saturate(110%);
}

/* .imageCover:hover{
  opacity: 100%;
} */
/* .image:hover{
  transform: scale(1.15);
} */
</style>