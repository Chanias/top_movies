<template>
    <header>
        <nav class="navbar bg-dark">
            <div class="container-fluid">

                <router-link to="/">
                    <a class="navbar-brand">
                        <img src="../../assets/logo.png" alt="Logo" width="30" height="24"
                            class="d-inline-block align-text-top">
                        Top Movies
                    </a>
                </router-link>

                <ul class="navbar">
                    <li class="nav-item">
                        <router-link to="/" class="link text-center nav-link mx-4">Top films
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/FrenchMovies" class="link text-center nav-link mx-4">Films français
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/AmericanMovies" class="link text-center nav-link mx-4">Films américains
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/LastMovies" class="link text-center nav-link mx-4">Les derniers films sortis
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/TopRatedMovies" class="link text-center nav-link mx-4">Top 50 : les mieux notés
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/SearchMovies" class="link text-center nav-link mx-4">Rechercher un film
                        </router-link>
                    </li>
                </ul>

            </div>
        </nav>
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

nav a{
    color: aliceblue;
}
</style>
    
