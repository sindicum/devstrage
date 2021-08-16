import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Directive from '../views/Directive.vue'
import DataTransfer from '../views/DataTransfer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/directive',
    name: 'directive',
    component: Directive
  },
  {
    path: '/datatransfer',
    name: 'datatransfer',
    component: DataTransfer
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return {el: to.hash} 
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    }
  }
})

export default router
