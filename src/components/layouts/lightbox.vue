<template>
  <v-overlay class="myOverlay" opacity="0.7" v-if="show">
    <v-container fluid class="toCenter">
      <v-row justify="end" class="m-lightbox-options" v-ripple>
        <v-col align-self="center">
          {{
            type == "gallery"
              ? items[$store.state.resources.lightbox.index].title
              : items[$store.state.resources.portfolioLightbox.index].title
          }}
        </v-col>
        <v-col cols="auto" class="text-end">
          <!-- <v-btn icon small class="me-2"><v-icon>mdi-download</v-icon></v-btn> -->
          <v-btn @click="closeMe()" icon class="text-h6">x</v-btn>
        </v-col>
      </v-row>
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
                :src="
                  type == 'gallery'
                    ? item.src
                    : require('@/assets/layouts/portfolio/' + item.src)
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
  z-index: 15;
  position: relative;
  letter-spacing: 1px;
  background-color: rgba(5, 0, 32, 0.7);
}
</style>