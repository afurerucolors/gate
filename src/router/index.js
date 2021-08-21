import Vue from 'vue'
import VueRouter from 'vue-router'
import Artworks from '../views/main/artworks.vue'
import LandingPage from '../views/main/landing-page.vue'
import About from '../views/main/about.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Portfolio',
        component: LandingPage
    },
    {
        path: '/artworks',
        name: 'Artworks',
        component: Artworks,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]
const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router