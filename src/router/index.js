import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import App from "../App.vue"
=======
import HomeView from '../views/HomeView.vue'
>>>>>>> 7dd32bed3691f39d002e38fff534857ce876f2f3

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
    component: App
  },
=======
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
>>>>>>> 7dd32bed3691f39d002e38fff534857ce876f2f3
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
