<template>

    <h1 class="text-center m-5 w-50 mx-auto p-3">
        Les derniers films
    </h1>

    <div v-if="error">
        <p class="text-danger">Une erreur est survenue, veuillez rafraîchir la page</p>
    </div>

    <div v-else>
        <div class="container">
            <div class="mt-3 mb-3">
                <SortButtons :movies="movies" @sort_movies="sortMovies" />
            </div>
        </div>
    </div>

    <MoviesList :movies="movies" :error="error" :loading="loading" />

</template>

<script>
import axios from "axios"
import MoviesList from './utils/MoviesList.vue'
import SortButtons from "./utils/SortButtons.vue";

export default {
    name: "LastMovies",

    components: {
        MoviesList,
        SortButtons
    },

    data(
    ) {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/",
            movies: null,
            loading: true,
            error: false,
        };
    },

    created() {
        console.log('created');
        axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&vote_count.gte=1000&page=1')
            .then(res => {
                this.movies = res.data.results

                axios
                    .get('https://api.themoviedb.org/3/discover/movie?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&vote_count.gte=1000&page=2')
                    .then(res => {
                        res.data.results.forEach(movie => {
                            this.movies.push(movie)
                        })
                            .catch(() => {
                                this.error = true;
                            });
                    })
            })
            .catch(() => {
                this.error = true;
            });
    }
}
</script>