<template>

    <!-- Bouton du tri par titre de films au clic (évènement)-->
    <button type="button" class="sortBy btn btn-secondary" @click="sortByTitle()">
        <p v-if="sortedByTitle ==false">Tri : croissant</p>
        <p v-else>Tri : décroissant</p>
    </button>

    <!-- Bouton du tri par note de films au clic (évènement)-->
    <button type="button" class="sortBy btn btn-secondary" @click="sortByRating()">
        <p v-if="sortedByRating ==false">Tri par note la plus haute</p>
        <p v-else>Tri par note la plus basse</p>
    </button>

    <!-- Bouton du tri par date de sortie de films au clic (évènement)-->
    <button type="button" class="sortBy btn btn-secondary" @click="sortByDate()">
        <p v-if="sortedByDate ==false">Tri : date récente </p>
        <p v-else>Tri : date ancienne</p>
    </button>

</template>

<script>
export default {
    name: "SortButtons",

    props: ["movies"],

    data() {
        return {
            sortedByTitle: false,
            sortedByRating: false,
            sortedByDate: false,
        };
    },

    methods: {
        // FONCTION TRI SUR LE NOM
        sortByTitle() {
            // DECLARATION D'UNE VARIABLE QUI RECUPERE LES MOVIES DANS LES PROPS
            const myMovies = this.movies;

            if (!this.sortedByTitle) {
                this.sortedByTitle = true;

                // ON TRI CROISSANT SI : LE TITRE DE 2 ELEMENTS COMMENCE PAR LA LETTRE PRECEDENTE EXEMPLE : JOKER ET BEETLEJUICE
                // LE B VIENDRA EN PREMIER
                myMovies.sort((a, b) => {
                    if (a.title < b.title) return -1;
                    return a.title > b.title ? 1 : 0;
                });
            }

            // ON TRI DECROISSANT SI : LE TITRE DE 2 ELEMENTS COMMENCE PAR LA LETTRE SUIVANTE EXEMPLE : JOKER ET BEETLEJUICE
            // LE J VIENDRA EN PREMIER
            else {
                this.sortedByTitle = false;
                myMovies.sort((a, b) => {
                    if (a.title > b.title) return -1;
                    return a.title < b.title ? 1 : 0;
                });
            }
        },

        // FONCTION TRI SUR LA NOTE
        sortByRating() {
            // DECLARATION D'UNE VARIABLE QUI RECUPERE LES MOVIES DANS LES PROPS
            const myMovies = this.movies;

            if (!this.sortedByRating) {
                this.sortedByRating = true;

                // ON TRI NOTE LA + HAUTE SI : SUR LA NOTE DE 2 ELEMENTS  EXEMPLE : 8.3 ET 4.0 
                // LE 8.3 VIENDRA EN PREMIER
                myMovies.sort((a, b) => {
                    if (a.vote_average < b.vote_average) return -1;
                    return a.vote_average > b.vote_average ? 1 : 0;
                });
            }

            // ON TRI DECROISSANT SI : SUR LA NOTE DE 2 ELEMENTS  EXEMPLE : 4.8 ET 4.0 
            // LE 4.00 VIENDRA EN PREMIER
            else {
                this.sortedByRating = false;
                myMovies.sort((a, b) => {
                    if (a.vote_average > b.vote_average) return -1;
                    return a.vote_average < b.vote_average ? 1 : 0;
                });
            }
        },

        // FONCTION TRI SUR LA DATE
        sortByDate() {
            // DECLARATION D'UNE VARIABLE QUI RECUPERE LES MOVIES DANS LES PROPS
            const myMovies = this.movies;

            if (!this.sortedByDate) {
                this.sortedByDate = true;

                // ON TRI NOTE LA + HAUTE SI : SUR LA DATE DE 2 ELEMENTS : EXEMPLE : 2021-02-04 ET 1989-02-04
                // LE 2021-02-04 VIENDRA EN PREMIER
                myMovies.sort((a, b) => {
                    if (a.release_date < b.release_date) return -1;
                    return a.release_date > b.release_date ? 1 : 0;
                });
            }

            // ON TRI DECROISSANT SI : SUR LA DATE DE 2 ELEMENTS :  EXEMPLE : 2021-02-04 ET 1989-02-04
            // LE 1989-02-04 VIENDRA EN PREMIER
            else {
                this.release_date = false;
                myMovies.sort((a, b) => {
                    if (a.release_date > b.release_date) return -1;
                    return a.release_date < b.release_date ? 1 : 0;
                });
            }
        },
    },
};
</script>


<style>

</style>

