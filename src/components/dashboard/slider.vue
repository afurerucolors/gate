<template>
  <div class="content">
    <!-- <carousel-3d 
    display="3"
    autoplay="true"
    inverseScaling="2000"
    height="500" space="400" >

      <slide
        v-for="(slide, i) in items"
        :index="i"
        :key="i"
        class="transparent mx-5"
      >
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <v-container>

          <v-row class="fill-height pb-1">
            <v-col align-self="center">
              <v-container class="sliderContainer pa-1">
                <v-img
                  :data-index="index"
                  :class="{
                    current: isCurrent,
                    onLeft: leftIndex >= 0,
                    onRight: rightIndex >= 0,
                  }"
                  :src="getImgurl(slide.src)"
                  contain

                />
              </v-container>
            </v-col>
          </v-row>
          </v-container>
        </template>
      </slide>
    </carousel-3d> -->
    <v-container width="auto">

    <v-row justify="center" dense class="fill-height pa-0">
      <v-col class="text-center pa-0 pt-1" align-self="center">
        <v-carousel hide-delimiters width="500">
          <v-carousel-item
           
            v-for="(item, i) in items"
            :key="i"
            :src="require(`@/assets/gallery/${item.src}`)"
          >
          <component :is="item"></component>
            <!-- <v-img
            max-height="400"
               :src="require(`@/assets/gallery/${item.src}`)"
              contain
            /> -->
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<script>
// import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    // Carousel3d,
    // Slide,
  },
  data() {
    return {
      items: [
        {
          src: "red-girl-laydown.jpg",
        },
        {
          src: "rengoku.jpg",
        },
        {
          src: "rengoku-eat.jpg",
        },
        {
          src: "rimuru.jpg",
        },
        {
          src: "zls-ai.jpg",
        },
        {
          src: "zls-junko.jpg",
        },
        {
          src: "zls-lily.jpg",
        },
      ],
    };
  },
  methods: {
    getImgurl(fileUrl) {
      return require("@/assets/gallery/" + fileUrl);
    },
  },
};
</script>
<style scoped>
.content {
  height: 100vh;
  background-size: cover;
  /* background-image: url("../../assets/myAppBars.jpg"); */
}

.sliderContainer {
  /* background: rgba(41, 0, 41, 0.2); */
  box-shadow: rgba(71, 0, 59, 0.3);
  border-radius: 10px;
}
</style>