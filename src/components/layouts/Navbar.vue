<template>
  <div class="body">
    <v-app-bar app flat absolute fade-img-on-scroll fixed dark class="navbarContainer ma-0" height="150">
        <v-row
          class="text-center py-8 pb-16"
          justify="center"
          style="backdrop-filter: blur(0px) "
        >
          <v-col cols="12" class="py-0">
            <img src="@/assets/layouts/logo.png" alt="" class="pageLogo"  />
          </v-col>
          <v-col cols="12" align-self="center" class="navbarCol2 pa-0 ">
            <span class="navbarTitle">Afureru Colors</span>
          </v-col>
        </v-row>
        

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          src="@/assets/layouts/navbar-backdrop.png"
          class="navbarImage"
        ></v-img>
      </template>
      <template v-slot:extension>
        <v-tabs centered class="mb-8">
          <v-tabs-slider class="tabSlider"></v-tabs-slider>

          <v-tab
            v-for="item in appbarItems"
            :key="item.title"
            :href="item.link"
            :to="item.link"
          >
            <!-- <span class="navbarText" v-if="item.title == 'Portfolio'"><v-icon>mdi-water</v-icon></span> -->
            <span class="navbarText" >{{ item.title }}</span>
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
          title: "Portfolio",
          link: "/",
        },
        {
          title: "Artworks",
          link: "/artworks",
        },

        {
          title: "About",
          link: "/about",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* .navbarCol2{
  border-left-width: 1;
  border-left-style: solid;

} */

.navbarTitle {
  background: -webkit-linear-gradient(rgb(158, 255, 171), rgb(111, 162, 238));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tabSlider {
  background: -webkit-linear-gradient(
    right,
    rgba(47, 0, 255, 0),
    rgb(66, 242, 255, 0.5),
    rgb(120, 255, 214),
    rgb(66, 242, 255, 0.5),
    rgba(47, 0, 255, 0)
  );
}

div.v-toolbar__content {
  padding: 0 !important ;
}

.navbarText {
  font-family: "Karla";
  font-weight: 500;
  font-size: 14px;
}
/* 
.sideBar{
  background-image: linear-gradient(to bottom,  transparent,rgb(57, 0, 122))
} */
</style>