import Vue from 'vue'
import Vuex from 'vuex'
// import Pixiv from './pixiv/index.js'
import DeviantArt from './modules/deviantart/index.js'
import Photogrid from './modules/photogrid/index.js'
import Resources from './modules/resources/index.js'
import Loader from './modules/loader/index.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules: {
        // pixiv: Pixiv,
        deviantArt: DeviantArt,
        photogrid: Photogrid,
        resources: Resources,
        loader: Loader,
    }
})