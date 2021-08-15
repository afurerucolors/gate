<template>
  <div class="body">
    <v-app-bar app
     flat absolute dark class="py-4 navbarContainer" height="60">
      <v-row class="text-center pb-4">
        <v-spacer></v-spacer>
        <span class="navbarTitle">Afureru Colors</span>
        <v-spacer></v-spacer>
      </v-row>
      <template v-slot:extension>
        <v-tabs centered class="mb-8">
          <v-tabs-slider  color="green" class="mySlider"></v-tabs-slider>

          <v-tab v-for="item in appbarItems" :key="item.title" :href="item.link" :to="item.link">
            <span class="navbarText">{{ item.title }}</span>
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
          title: "About",
          link: "/",
        },
        {
          title: 'Artworks',
          link: '/artworks',
        },
        {
          title: 'Contact',
          link: '/contact',
        },
      ],
    };
  },
};
</script>
<style scoped>
.navbarContainer {
  /* background-image: linear-gradient(to top, hsl(244, 100%, 6%), rgba(248, 99, 203, 0.2)); */
 background-color: hsl(244, 100%, 6%) !important;
}
.navbarTitle {
  background: -webkit-linear-gradient(
    
    rgb(158, 255, 171),
    rgb(111, 162, 238)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mySlider {
  background: -webkit-linear-gradient(
    right,
    rgb(137, 135, 255),
    rgb(242, 177, 255),
    rgb(189, 255, 192)
  );
}

.navbarText {
  font-family: 'Karla';
  font-weight: 500;
  font-size: 14px;
}
/* 
.sideBar{
  background-image: linear-gradient(to bottom,  transparent,rgb(57, 0, 122))
} */
</style>