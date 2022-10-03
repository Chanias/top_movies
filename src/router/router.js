import { createRouter, createWebHistory } from 'vue-router'
import App from "../App.vue"
import FrenchMovies from "../components/FrenchMovies.vue"
import AmericanMovies from "../components/AmericanMovies.vue"
import TopRatedMovies from "../components/TopRatedMovies.vue"
import LastMovies from "../components/LastMovies.vue"
import SearchMovies from "../components/SearchMovies.vue"

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/FrenchMovies',
    component: FrenchMovies
  },
  {
    path: '/AmericanMovies',
    component: AmericanMovies
  },
  {
    path: '/TopRatedMovies',
    component: TopRatedMovies
  },
  {
    path: '/LastMovies',
    component: LastMovies
  },
  {
    path: '/SearchMovies',
    component: SearchMovies
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
