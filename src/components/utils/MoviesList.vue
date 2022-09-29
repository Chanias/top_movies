<template>
<div class="container">
    <h1>Les films</h1>
</div>

</template>

<script>
    import MoviesList from './components/utils/MoviesList.vue'
    import axios from 'axios'

export default {
    name: "MoviesList",
    components: {
        MoviesList
    },
    props: [
        "title",
        "poster_path",
        "release_date",
        "vote_average",
        "overwiew"
    ],
}


</script>