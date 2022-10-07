<template>

  <div v-if="errored">
    <p class="text-danger">Une erreur est survenue, veuillez rafraîchir la page</p>
  </div>

  <div v-else>

    <router-link class="routerLink" v-bind:to="`/MovieDetails/${id}`">


      <div class="card m-3" style="width: 18rem;" id="card">
        <div v-if="title">
          <h4 class="card-title mb-3">
            {{ title }}
          </h4>
        </div>

        <!-- Charger automatiquement les affiches des films via le liens plus bas -->
        <div v-if="poster_path">
          <img v-bind:src="preUrl + poster_path" alt="Image_films" style="width:14rem" />
        </div>

        <div v-if="release_date">
          <p><b>Sortie :</b> {{release_date}}</p>
        </div>

        <div v-if="vote_average">
          <p><b>Note moyenne :</b> {{vote_average}}</p>
        </div>

        <!-- Réduire le texte du résumé -->
        <div v-if="overview">
          <p><b>Résumé :</b> {{overview.substring(0, 170) + "..." }}</p>
        </div>
        <div v-else>
          <p>Résumé non disponible</p>
        </div>
      </div>

    </router-link>

  </div>

</template>

<script>

export default {
  name: "MovieCard",

  props: [
    "id",
    "title",
    "release_date",
    "vote_average",
    "overview",
    "poster_path",
  ],

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  }
};

</script>

<style>
#card {
  box-shadow: 5px 5px 5px 0px;
  max-width: 20rem;
  height: 40rem;
}
.routerLink{
  text-decoration: none;
  color: inherit;
  }
</style>

