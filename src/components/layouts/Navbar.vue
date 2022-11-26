<template>
  <nav>
    <v-app-bar app flat absolute fade-img-on-scroll light fixed class="nav-container ma-0" height="150">
      <v-row class="text-center py-8 pb-16" justify="center" style="backdrop-filter: blur(0px)">
        <v-col cols="12" class="py-0">
          <img src="@/assets/images/layouts/logo.png" alt="" class="c-main-logo-img" @click="$router.replace('/')" />
        </v-col>
        <v-col cols="12" align-self="center" class="navbarCol2 pa-0">
          <span class="c-main-title-text">Afureru Colors</span>
        </v-col>
      </v-row>

      <template v-slot:img="{ props }">
        <v-img v-bind="props" src="@/assets/images/layouts/navbar-backdrop.png" class="c-nav-background"></v-img>
      </template>

      <template v-slot:extension>
        <v-tabs centered class="mb-8">
          <v-tabs-slider class="nav-tab-slider"></v-tabs-slider>
          <v-tab class="nav-tab" v-for="navbarTab in navbarTabs" active-class="active-tab" :key="navbarTab.title"
            :href="navbarTab.link" :to="navbarTab.link">
            <span class="nav-tab-text">{{ navbarTab.title }}</span>
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


.nav-container {
  background-color: rgb(255, 255, 255) !important;
}

.nav-tab {
  min-width: 40px;
  color: var(--title-secondary-color) !important;
}

.nav-tab-text {
  font-weight: 500;
  font-size: 13px;
  font-family: "Baloo 2" !important;
}

.nav-tab-slider {
  background: var(--webkit-horizontal-gradient-color);
}

.c-nav-background {
  height: 100px;
  filter: saturate(55%) blur(0.3px) opacity(0.6);
  margin-top: -20px;
  transition: ease-in-out 200ms;
}





/* Dark Mode */
.nav-container.dark {
  background-image: linear-gradient(rgba(0, 132, 255, 0.1), rgb(31, 31, 31));
  background-color: rgb(31, 31, 31) !important;
}

.nav-tab-slider.dark {
  background: -webkit-linear-gradient(right,
      rgba(47, 0, 255, 0),
      rgb(66, 242, 255, 0.5),
      rgb(120, 255, 214),
      rgb(66, 242, 255, 0.5),
      rgba(47, 0, 255, 0));
}



/* Overrides */

div.v-toolbar__content {
  padding: 0 !important;
}

.active-tab {
  color: var(--title-primary-color) !important;
}

/* End of overrides */
</style>