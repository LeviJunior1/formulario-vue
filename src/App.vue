<template>
  <div id="app">
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
  margin: 15px;
}
</style>
