<template>
<section id="light-box">

  <v-overlay class="myOverlay" opacity="0.7" v-if="show" color="blue-grey lighten-5">
    <v-row justify="end" class="m-lightbox-options ma-0">
      <v-col cols="" align-self="center">
        {{
          type == "gallery"
            ? items[$store.state.resources.lightbox.index].title
            : items[$store.state.resources.portfolioLightbox.index].title
        }}
      </v-col>
      <v-col cols="auto" class="text-end">
        <v-btn @click="closeMe()" small text class="text-h6" color="blue-grey">x</v-btn>
      </v-col>
    </v-row>
    <v-container fluid class="lightbox">
      <v-row>
        <v-carousel
          hide-delimiters
          show-arrows-on-hover
          v-model="index"
          height="auto"
          class="toCenter"
        >
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-container>
              <v-img
                :src="item.link ? item.link : require('@/assets/layouts/portfolio/' + item.src)
                "
                max-height="500"
                :max-width="$vuetify.breakpoint.width - 10"
                contain
              ></v-img>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </v-overlay>
</section>
</template>
<script>
export default {
  props: ["items", "show", "type"],
  data() {
    return {};
  },
  methods: {
    closeMe() {
      this.$store.commit("resources/closeLightbox", this.type);
    },
  },
  computed: {
    index: {
      get() {
        if (this.type == "gallery") {
          return this.$store.state.resources.lightbox.index;
        } else {
          return this.$store.state.resources.portfolioLightbox.index;
        }
      },
      set(val) {
        if (this.type == "gallery") {
          return (this.$store.state.resources.lightbox.index = val);
        } else {
          return (this.$store.state.resources.portfolioLightbox.index = val);
        }
      },
    },
  },
};
</script>
<style scoped>
.myOverlay {
  animation: animation ease-in-out 400ms;
  z-index: 30 !important;
}
.lightbox {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: 20px;
  transform: translate(-50%, -50%);
  width: 100%;
  margin-right: 40px;

  height: 100vh;
}
@keyframes animation {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
.x {
  color: rgba(5, 0, 32, 0.4);
}

.m-lightbox-options {
  font-family: "Karla";
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  text-indent: 20px;
  color: rgb(58, 104, 129);
z-index: 31;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.7);
}
.m-lightbox-options-dark {
  font-family: "Karla";
  top: 0;
  left: 0;
  right: 0;

  position: fixed;
  width: 100%;
  letter-spacing: 1px;
  background-color: rgba(5, 0, 32, 0.7);
}
</style>