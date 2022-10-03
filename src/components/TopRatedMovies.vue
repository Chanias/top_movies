<template>
    <div>
        <h1 class="text-center m-5 w-50 mx-auto p-3">
            Le top 50 des films les mieux notés
        </h1>
        <MoviesList :movies="movies" :error="error" :loading="loading" />
    </div>

</template>

<script>
import axios from "axios"
import MoviesList from './utils/MoviesList.vue'

export default

    {
        name: "TopRatedMovies",
        components: {
            MoviesList,
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
                .get('https://api.themoviedb.org/3/discover/movie?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr&sort_by=vote_average.desc&vote_count.gte=10000&page=1')
                .then(res => {
                    this.movies = res.data.results
                })
        }
    }
</script>