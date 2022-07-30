import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/main/landing-page.vue'
import About from '../views/main/about.vue'
import Faq from '../views/main/faq.vue'
import PortalLink from '../views/main/portallink.vue'
import MainLayout from '../views/main/main-layout.vue'
import Request from '../views/main/request.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainLayout,
        redirect: LandingPage,
        // redirect: PortalLink,
        children: [{
                path: '/',
                name: 'Portfolio',
                component: LandingPage,
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
        path: '/links',
        name: 'PortalLink',
        component: PortalLink
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: MainLayout,
        redirect: '/',
        // component: PortalLink,
    },

]
const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routes,
})

export default router