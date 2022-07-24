<template>
  <div id="app">
    <nav>
      <router-link to="/">Contact</router-link> |
      <router-link to="/about">List</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: Roboto;
  src: local("Roboto"),
    url(./fonts/Roboto-Thin.ttf) format("truetype");
}

#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  height: 100vh;
}
</style>
