<template>
  <v-container fluid class="content pa-0 mt-2"> </v-container>
</template>
<script>
export default {
  components: {},

  data() {
    return {};
  },
  computed: {},
  methods: {
    // getImgurl(fileUrl) {
    //   return require("@/assets/gallery/" + fileUrl);
    // },
  },
  mounted() {},
};
</script>
<style scoped>
.content {
  /* background-image: url("../../assets/myAppBars.jpg"); */
}

.sliderContainer {
  /* background: rgba(41, 0, 41, 0.2); */
  /* box-shadow: rgba(71, 0, 59, 0.3);
  border-radius: 10px; */
  width: auto;
}

.imageSlider {
  max-height: 350px;
  width: auto;
  object-fit: cover;
}

swipe-slider {
  width: 400px;
}

.image {
  display: block;
  height: 100%;
  max-height: 300px;
  object-fit: contain;
  max-width: auto;
}
</style>