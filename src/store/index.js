import Vue from 'vue'
import Vuex from 'vuex'
import Illustrations from './modules/illustrations/index.js'
import Resources from './modules/resources/index.js'
import Loader from './modules/loader/index.js'
import Platforms from './modules/platforms/index.js'
import Request from './modules/request/index.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules: {
        illustrations: Illustrations,
        platforms: Platforms,
        request: Request,
        resources: Resources,
        loader: Loader,
    }
})