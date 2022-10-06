<template>

    <div class="p-5">
        <ul>
            <li class="list-unstyled" v-for="movie in movies" :key="movie.id">

                <MovieCard :id="movie.id" :title="movie.title" :poster_path="movie.poster_path"
                    :release_date="movie.release_date" :vote_average="movie.vote_average" :overview="movie.overview" />

            </li>

        </ul>
    </div>

</template>

<script>
import MovieCard from "./MovieCard.vue"


export default {
    name: 'MoviesList',
    components: {
        MovieCard,
    },

    props: [
        "movies",
        "loading",
        "errored"
    ],
}

</script>

<style>
ul {
    list-style-type: none;
    padding: 0;
    text-decoration: none;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>