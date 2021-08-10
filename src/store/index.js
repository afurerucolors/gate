import Vue from 'vue'
import Vuex from 'vuex'
import Pixiv from './pixiv/index.js'
import DeviantArt from './deviantart/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pixiv : Pixiv,
    deviantArt: DeviantArt
  }
})
