<template>
  <nav>
    <v-app-bar app flat absolute fade-img-on-scroll light fixed class="navbarContainer ma-0" height="150">
      <v-row class="text-center py-8 pb-16" justify="center" style="backdrop-filter: blur(0px)">
        <v-col cols="12" class="py-0">
          <img src="@/assets/images/layouts/logo.png" alt="" class="navbarLogo" @click="$router.replace('/')" />
        </v-col>
        <v-col cols="12" align-self="center" class="navbarCol2 pa-0">
          <span class="navbarTitle">Afureru Colors</span>
        </v-col>
      </v-row>

      <template v-slot:img="{ props }">
        <v-img v-bind="props" src="@/assets/images/layouts/navbar-backdrop.png" class="navbarImage"></v-img>
      </template>

      <template v-slot:extension>
        <v-tabs centered class="mb-8">
          <v-tabs-slider class="navbarTabSlider"></v-tabs-slider>
          <v-tab class="navbarTab" v-for="navbarTab in navbarTabs" active-class="activeTab" :key="navbarTab.title" :href="navbarTab.link"
            :to="navbarTab.link">
            <span class="navbarTabText">{{ navbarTab.title }}</span>
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navbarTabs: [
        {
          title: "Artworks",
          link: "/",
        },
        {
          title: "Request",
          link: "/request",
        },
        {
          title: "FAQ",
          link: "/faq",
        },
        {
          title: "About",
          link: "/about",
        },
        {
          title: "Links",
          link: "/platforms",
        },
      ],
    };
  },
};
</script>
<style scoped>
.navbarContainer {
  background-color: rgb(255, 255, 255) !important;
}

.navbarLogo {
  padding-top: 15px;
  height: 90px;
  cursor: pointer;
}

.navbarTitle {
  font-family: 'Poiret One';
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.2vw;
  color: rgb(115, 139, 173) !important;

}

.navbarTab {
  min-width: 40px;
}

.navbarTabText {
  font-weight: 500;
  font-size: 13px;
  font-family: "Baloo 2" !important;
}

.navbarTabSlider {
  background: -webkit-linear-gradient(right,
      rgba(47, 0, 255, 0),
      rgba(0, 217, 255, 0.5),
      rgb(0, 255, 242),
      rgb(0, 217, 255, 0.5),
      rgba(47, 0, 255, 0));
}

div.v-toolbar__content {
  padding: 0 !important;
}


.navbarImage {
  height: 100px;
  filter: saturate(55%) blur(0.3px) opacity(0.6);
  margin-top: -20px;
  transition: ease-in-out 200ms;
}





/* Night mode */
.navbarContainer-dark {
  background-image: linear-gradient(rgba(0, 132, 255, 0.1), rgb(31, 31, 31));
  background-color: rgb(31, 31, 31) !important;
}
.navbarTitle-dark {
  background: -webkit-linear-gradient(rgb(0, 195, 255), rgb(0, 162, 173));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbarImage-dark {
  height: 100px;
  margin-top: -20px;
  transition: ease-in-out 200ms;
}

.navbarTabSlider-dark {
  background: -webkit-linear-gradient(right,
      rgba(47, 0, 255, 0),
      rgb(66, 242, 255, 0.5),
      rgb(120, 255, 214),
      rgb(66, 242, 255, 0.5),
      rgba(47, 0, 255, 0));
}
</style>