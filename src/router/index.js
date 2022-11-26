import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/website/home.vue'
import About from '../views/website/about.vue'
import Faq from '../views/website/faq.vue'
import Platforms from '../views/platforms/platforms.vue'
import MainLayout from '../views/layouts/website-layout.vue'
import Request from '../views/website/request.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainLayout,
        redirect: Home,
        // redirect: Platforms,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/request',
                name: 'Artworks',
                component: Request,
            },
            {
                path: '/about',
                name: 'About',
                component: About
            },
            {
                path: '/faq',
                name: 'Faq',
                component: Faq
            },
        ]
    },
    {
        path: '/platforms',
        name: 'Platforms',
        component: Platforms
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: MainLayout,
        redirect: '/',
        // component: Platforms,
    },

]
const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routes,
})

export default router