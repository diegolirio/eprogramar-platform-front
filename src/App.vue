<template>
  <div id="app" class="h-100">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-fluid {
  width: 80% !important;
  max-width: 895.5px;

  @media (max-width: 600px) {
    & {
      width: 100% !important;
    }
  }
}
html, body {
  height: 100%
}

@import "./assets/fontawesome-free/css/all.min.css";
@import "~bootstrap/scss/bootstrap";
@import "./assets/scss/sb-admin-2.scss";
</style>

<script>
import './assets/js/sb-admin-2'

export default {
  name: "App",
}
</script>