<template>
  <div class="body">
    <v-app-bar app flat absolute dark class="py-4 navbarContainer">
      <v-row class="text-center pb-4">
        <v-spacer></v-spacer>
        <span class="title text-h4"> Afureru Colors</span>

      <!-- <v-img src="@/assets/logo.png" height="75" contain> -->

        <v-spacer></v-spacer>
      </v-row>
      <template v-slot:extension >
        <v-tabs centered class="mb-6">
          <v-tabs-slider color="green" class="mySlider"></v-tabs-slider>
          <v-tab v-for="item in appbarItems" :key="item.title" :to="item.link">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- <v-navigation-drawer
      app
      v-model="drawer"
      color="transparent"
      class="sideBar"
    >
    </v-navigation-drawer> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      appbarItems: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Gallery',
          link: '/gallery',
        },
        {
          title: 'About',
          link: '/about',
        },
      ]
    };
  },
};
</script>
<style scoped>
.navbarContainer {
  
  background-image: linear-gradient(to top, #020021, rgba(248, 99, 203, 0.2));
}
.title {
 background: -webkit-linear-gradient(bottom left,rgb(124, 255, 189),rgb(87, 194, 255),rgb(73, 234, 255));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
/* .title {
 color: rgb(178, 178, 218);
} */

.mySlider{
 background: -webkit-linear-gradient(right,rgb(137, 135, 255),rgb(242, 177, 255),rgb(189, 255, 192));

}
/* 
.sideBar{
  background-image: linear-gradient(to bottom,  transparent,rgb(57, 0, 122))
} */
</style>