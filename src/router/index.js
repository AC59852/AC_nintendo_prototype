import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Hardware from '../views/Hardware.vue'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/games',
    name: 'Games',
    component: Games
  },

  {
    path: '/hardware',
    name: 'Hardware',
    component: Hardware
  },
  
  {
    path: '/news',
    name: 'News',
    component: News
  },
]

const router = new VueRouter({
  routes
})

export default router
