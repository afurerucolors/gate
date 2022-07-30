<template>
  <v-tooltip left color="rgba(0,0,0,0.5)">
    <template v-slot:activator="{ on, attrs }">
      <div class="btnTop">
        <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
          v-scroll="scroll"
          :disabled="disabled"
          @click="
            $vuetify.goTo(0, {
              duration: duration,
              offset: offset,
              easing: 'easeInOutQuad',
            })
          "
        >
          <v-avatar class="btnTopAvatar" size="25">
            <v-icon size="30" color="blue-grey lighten-2"
              >mdi-arrow-up-bold</v-icon
            >
          </v-avatar>
        </v-btn>
      </div>
    </template>
    <span>Scroll to Top</span>
  </v-tooltip>
</template>
<script>
export default {
  data() {
    return {
      disabled: true,
    };
  },
  methods: {
    scroll() {
      if (Math.floor(window.scrollY) > 350) {
        this.$nextTick(() => {
          this.disabled = false;
        });
      } else {
        this.$nextTick(() => {
          this.disabled = true;
        });
      }
    },
  },
  props: {
    color: {
      default: "black",
    },
    duration: {
      type: Number,
      default: 400,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    scrollY() {
      return Math.floor(window.scrollY);
    },
  },
  watch: {
    scrollY(v) {
      if (this.scrollY > 350)
        this.$nextTick(() => {
          this.disabled = false;
        });
    },
  },
};
</script>
<style scoped>
.btnTop {
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  margin-bottom: 20px;
}
.btnTopAvatar {
  /* background-color: rgb(0, 0, 44,0.5) ; */
  backdrop-filter: blur(5px);
}
</style>