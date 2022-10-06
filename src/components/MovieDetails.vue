<template>

    <div v-if="errored">
        <p class="text-danger">Une erreur est survenue, veuillez rafraîchir la page</p>
    </div>

    <div v-else>
        <div class="container" v-if="movie">
            <h1>Les détails du film</h1>
            <div class="card ">
                <div class="row">
                    <div class="col-md-4">
                        <img v-bind:src="preUrl + movie.poster_path" alt="Image_films" style="width:20rem" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-title" style="color:#ff5733;">Bande annonce</p>
                            <div class="mt-5" id="trailer" v-if="video[0]">
                                <iframe width="650" height="300"
                                    v-bind:src="'https://www.youtube.com/embed/' + video[0].key" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen class="shadow"></iframe>
                            </div>
                            <div v-else>La bande annonce n'est pas encore disponible, veuillez patienter</div>
                            <hr>
                            <h2 class="card-title" style="color: red;">{{movie.title}}</h2>
                            <span v-for="(item, index) in movie.genres" :key="index">
                                {{item.name}}
                                <span v-if="(movie.genres.length - 1 != index)">,</span>
                            </span>
                            <hr>
                            <p class="card-text"><b>Résumé :</b> {{movie.overview}}</p>

                            <div v-if="movie.original_language == 'en'">Langue :
                                <span style="color: #63a81d">Anglais</span>
                            </div>
                            <div v-else-if="movie.original_language == 'fr'">

                                <span style="color: #63a81d">Français</span>
                            </div>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted"><b>Date de sortie :</b> {{movie.release_date
                            }}</small></p>
                            <p class="card-text"><small class="text-muted"><b>Note moyenne des internautes :</b>
                                    {{movie.vote_average*10 }}%</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <h3>Les acteurs principaux</h3>
                </div>

                <div class="row">
                    <div class="card-group">

                        <div class="card">
                            <h5 class="card-title">{{credits.cast[0].name}}</h5>
                            <img src="{{credits.cast[0].preUrl + profile_path}}" class="card-img-top"
                                alt="Photo Acteur">
                            <div class="card-body">
                                <p class="card-text">Personnage : {{credits.cast[0].character}}</p>
                            </div>
                        </div>

                        <div class="card">
                            <h5 class="card-title">{{credits.cast[1].name}} </h5>
                            <img src="{{credits.cast[1].preUrl + profile_path}}" class="card-img-top"
                                alt="Photo Acteur">
                            <div class="card-body">
                                <p class="card-text">Personnage : {{credits.cast[1].character}}</p>
                            </div>
                        </div>

                        <div class="card">
                            <h5 class="card-title">{{credits.cast[5].name}}</h5>
                            <img src="{{credits.cast[5].preUrl + profile_path}}" class="card-img-top"
                                alt="Photo Acteur">
                            <div class="card-body">
                                <p class="card-text">Personnage : {{credits.cast[5].character}}</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: "MovieDetails",

    data() {
        return {
            id: this.$route.params.id,
            preUrl: "https://image.tmdb.org/t/p/original",
            movie: null,
            video: [],
            credits: [],
        };
    },

    created() {
        console.log(this.id);
        axios
            .get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr`)
            .then(res => {
                // this.id =this.$route.params.id
                this.movie = res.data;
                console.log(this.movie);

                axios
                    .get(`https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr`)
                    .then(res => {
                        this.video = res.data.results;
                        console.log(this.video)

                        axios
                            .get(`https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr`)
                            .then(res => {
                                this.credits = res.data;
                                console.log(this.credits);
                            })
                            .catch(() => {
                                this.errored = true;
                            });
                    })
            });
    },
}

</script>

<style scoped>
.container {
    padding: 2% 2% 2% 2%;
}

.card {
    box-shadow: #63a81d 0px 5px 15px;
}
</style>


<style>
hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
}
</style>