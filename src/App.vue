<template>
<div id="app">
  <HeaderNav />

  <div v_if="$route.path == '/'">
    <!--si la route est / (racine du site) -->
    <h1 class="pt-5 font-weight-light">Vos films préférés sont sur Top Movies !</h1>
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
  </div>

  <div v-else>
    <!--si la route est différente de / -->
    <router-view :key="$route.fullPath"></router-view>
  </div>

  <FooterApp />
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
