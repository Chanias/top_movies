<template>

    <div v-if="error">
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
                            <!-- TAGLINE -->
                            <span><i>"{{movie.tagline}}"</i></span>
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
                        <!-- boucle vfor pour le casting -->
                        <li v-for="(actor,index) in credits.cast" :key="actor.id">
                            <div v-if="index <= 5">

                                <img v-if="actor.profile_path"
                                    :src="'https://image.tmdb.org/t/p/original' + actor.profile_path" alt="photo acteur"
                                    style="width:20rem" />
                                <img v-else src="/images/image-not-found.png" alt="photo acteur non disponible" />
                                <div>
                                    <div>
                                        <h3>{{ actor.original_name }}</h3>
                                        <p>{{ actor.character }}</p>
                                    </div>
                                </div>
                            </div>
                        </li>

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
            preUrl: "https://image.tmdb.org/t/p/original/",
            movie: null,
            video: [],
            credits: [],
        };
    },

    created() {
        console.log(this.id);
        axios // APPEL API DE MOVIESLIST
            .get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr`)
            .then(res => {
                this.movie = res.data;
                console.log(this.movie);

                axios // APPEL API DE LA VIDEO DE BANDE ANNONCE
                    .get(`https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr`)
                    .then(res => {
                        this.video = res.data.results;
                        console.log(this.video)

                        axios // APPEL API DU CREDIT POUR AVOIR CASTING ET PHOTO ACTEURS
                            .get(`https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=06a9b62fd61f37d8abcc00ee0a9a008f&language=fr`)
                            .then(res => {
                                this.credits = res.data;
                                console.log(this.credits);
                            })
                            .catch(() => {
                                this.error = true;
                            });
                    })
                    .catch(() => {
                        this.error = true;
                    });
            })
            .catch(() => {
                this.error = true;
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

p {
    font-size: 1.2em;
}

span {
    font-size: 1.5em
}

.card-group {
    position: relative;
    left: 13%;
}
</style>