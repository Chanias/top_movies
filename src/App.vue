<template>
  <div id="app">
    <HeaderNav />

    <div v-if="$route.path == '/'">
      <!--si la route est / (racine du site) -->
      <h1 class="pt-5 font-weight-light">Vos films préférés sont sur Top Movies !</h1>
      <MoviesList :movies="movies" :loading="loading" :errored="errored" />
    </div>

    <div v-else>
      <!--si la route est différente de / -->
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from './components/template/HeaderNav.vue'
import FooterApp from './components/template/FooterApp.vue'
import MoviesList from './components/utils/MoviesList.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterApp,
    MoviesList
  },
  data() {
    return {
      movies: null,
      errored: false,
      loading: false
    }
  },
  created(){
    console.log("created");
    axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res => {
        this.movies = res.data.results
        console.log(this.movies)
      })
  }
 
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
