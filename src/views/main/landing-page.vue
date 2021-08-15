<template>
  <v-container fluid pa-0>
    <div class="notice">
      Website under development!
    </div>
    <Header></Header>
    <v-divider></v-divider>
    <SelfIntro></SelfIntro>

    <!-- <Slider></Slider> -->
    <!-- self intro -->

    <!-- show some work  -->
  </v-container>
</template>
<script>
import Header from "@/components/dashboard/header.vue";
import Slider from "@/components/dashboard/slider.vue";
import Contact from "@/components/dashboard/contact.vue";
import SelfIntro from "@/components/dashboard/self-intro.vue";

export default {
  components: {
    Slider,
    Header,
    SelfIntro,
    Contact
  },
  data() {
    return {};
  },
};

</script>
<style scoped>
.notice {
  position: absolute;
  top:120px;
  right:0;
  left:0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border-radius: 20px;
  text-align: center;
  color: rgb(255, 183, 183);
  bottom:0;
  padding-top:30px;
  padding-bottom:60px;
  backdrop-filter: blur(1px);
  background-color: rgba(23, 1, 24, 0.4);
  height: 50px;
  margin-left:auto;
  margin-right:auto;
  z-index: 2500 !important;
}

</style>