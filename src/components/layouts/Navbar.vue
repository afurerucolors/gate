<template>
  <nav>
    <v-app-bar
      app
      flat
      absolute
      fade-img-on-scroll
      light
      fixed
      class="navbarContainer ma-0"
      height="150"
    >
      <v-row
        class="text-center py-8 pb-16"
        justify="center"
        style="backdrop-filter: blur(0px)"
      >
        <v-col cols="12" class="py-0">
          
            <img src="@/assets/layouts/logo.png" alt="" class="pageLogo" @click="$router.replace('/')"/>

        </v-col>
        <v-col cols="12" align-self="center" class="navbarCol2 pa-0">
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
            class="tab"
            v-for="item in appbarItems"
            active-class="activeTab"
            :key="item.title"
            :href="item.link"
            :to="item.link"
          >
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
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      appbarItems: [
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
      ],
    };
  },
};
</script>
<style scoped>
.navbarTitle-dark {
  background: -webkit-linear-gradient(rgb(0, 195, 255), rgb(0, 162, 173));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbarTitle {
  background: -webkit-linear-gradient(rgb(158, 255, 171), rgb(111, 162, 238));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tabSlider {
  background: -webkit-linear-gradient(
    right,
    rgba(47, 0, 255, 0),
    rgba(0, 217, 255, 0.5),
    rgb(0, 255, 242),
    rgb(0, 217, 255, 0.5),
    rgba(47, 0, 255, 0)
  );
}
.tabSlider-dark {
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
.tab {
  min-width: 40px;
}
.activeTab {
  color: rgb(15, 189, 165) !important;
}
</style>