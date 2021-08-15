import Vue from 'vue'
import Vuex from 'vuex'
// import Pixiv from './pixiv/index.js'
import DeviantArt from './deviantart/index.js'
import Photogrid from './photogrid/index.js'
import Gallery from './gallery/index.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    // pixiv: Pixiv,
    deviantArt: DeviantArt,
    photogrid: Photogrid,
    gallery: Gallery,
  }
})
