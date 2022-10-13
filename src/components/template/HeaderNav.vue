<template>
  <header class="bg-dark">
    <img class="pt-3" alt="banner" src="../../assets/header.jpg" style="width: 30vw" />
    <div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <div class="container-fluid">

          <router-link to="/">
            <a class="navbar-brand">
              <img src="../../assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
              Top Movies
            </a>
          </router-link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">

            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/FrenchMovies" class="link text-center nav-link mx-5">Films français</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/AmericanMovies" class="link text-center nav-link mx-5">Films américains</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/LastMovies" class="link text-center nav-link mx-5">Les derniers films sortis
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/TopRatedMovies" class="link text-center nav-link mx-5">Top 50 : les mieux notés
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/SearchMovies" class="link text-center nav-link mx-5">Rechercher un film</router-link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </div>
  </header>

</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  color: aliceblue;
}

li {
  list-style-type: none;
  display: inline-block;
  margin: 0 10px;
  color: aliceblue;
}

nav a {
  color: aliceblue;
}
</style>
    
