<template>
  <v-container fluid class="content pa-0 mt-5">
    <v-container class="gridContainer pa-0">
      <v-container class="rowContainer">
        <v-row v-for="(rows, n) in images" :key="n" justify="center">
          <v-col
            v-for="(col, i) in rows"
            :key="i"
            :cols="col.cols"
            align-self="center"
            class="pa-2"
          >
            <v-container
              class="imageWrapper pa-0"
              @click="openLightbox((n + 1) * i)"
            >
              <v-img
                class="image align-stretch"
                :src="require('@/assets/layouts/portfolio/' + col.src)"
                :alt="col.src"
              />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template><script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      images: [
        [
          {
            title: "Shinra Kusakabe",
            cols: 3,
            src: "shinra kusakabe.jpg",
          },
          {
            title: "Arknights 1st Anniversary",
            cols: 6,
            src: "arknights 1st anniversary.jpg",
          },
          {
            title: "Timuru Tempest ~ MEGIDO",
            cols: 3,
            src: "rimuru tempest.jpg",
          },
        ],
        [
          {
            title: "Rengoku Kyojurou Ougi",
            cols: 5,
            src: "rengoku kyojurou.jpg",
          },
          {
            title: "Genshin Impact ~ Zhong Li",
            cols: 2,
            src: "genshin impact zhongli.jpg",
          },
          {
            title: "Inside",
            cols: 5,
            src: "inside.jpg",
          },
        ],
        [
          {
            title: "Hanako x Nene",
            cols: 3,
            src: "jibaku shonen hanako kun.jpg",
          },
          {
            title: "Arknights ~ Siege",
            cols: 6,
            src: "arknights siege.jpg",
          },
          {
            title: "Weathering With You",
            cols: 3,
            src: "weathering with you.jpg",
          },
        ],
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    openLightbox(index) {
      this.$store.commit("resources/setLightbox", {
        index: index,
        type: "portfolio",
      });
    },
    closeLightbox() {
      this.$store.commit("resources/setLightbox", "portfolio");
    },
  },
  mounted() {},
};
</script>
<style scoped>
.rowContainer {
  min-width: 600px;
}
.gridContainer {
  width: 100%;
  max-width: 900px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.gridContainer::-webkit-scrollbar {
  display: none;
}

@keyframes slidein {
  from {
    margin-top: -30%;
    margin-left: -100%;
  }

  to {
    margin-top: 0%;
    margin-left: 0%;
  }
}

.imageWrapper:hover .image {
  transform: scale(1.2);
}

.imageWrapper {
  cursor: pointer;
  overflow: hidden;
  animation: slidein ease-in-out 600ms;
}

.myRow {
  height: 250px;
  overflow: hidden;
}

.image {
  width: auto;
  object-position: top;
  height: 200px;
  min-height: 200px;
  transition: 200ms ease-in-out;
}
</style>