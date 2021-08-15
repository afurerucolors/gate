import Vue from 'vue'
import VueRouter from 'vue-router'
import Gallery from '../views/main/gallery.vue'
import About from '../views/main/landing-page.vue'
import Contact from '../views/main/contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/artworks',
    name: 'Artworks',
    component: Gallery,


  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
