<template>
  <h1>Rechercher un film</h1>
  <hr>

  <form role="search" class="text-center">

    <label for="search" class="hidden-visually">Search: </label>
    <!-- Pour connecter l'input aux datas et avec un évènement au relevé de la touche-->
    <!-- @keyup pur détecter l'évènement -->
    <input type="text" name="search" id="search" v-model="search" @keyup="getResult(search)" />
    <button type="submit">Rechercher</button>

  </form>

  <!-- Pour faire le lien avec la liste de films -->
  <MoviesList :movies="movies" :error="error" :loading="loading" />
</template>

<script>

import axios from 'axios';
import MoviesList from './utils/MoviesList.vue';


export default {
  name: "SearchMovies",
  components: {
    MoviesList,

  },
  data() {
    return {
      movies: null,
      preUrl: "https://image.tmdb.org/t/p/original",
      loading: true,
      error: false,
      search: '',
    };
  },
  methods: {
    getResult(search) {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=en-US&page=1&include_adult=false&query=" + search)
        .then(res => {
          this.movies = res.data.results
          console.log(this.movies)
        })
      // .catch(errored => {
      // this.errored=true
      // }
    }
  }

};

</script>