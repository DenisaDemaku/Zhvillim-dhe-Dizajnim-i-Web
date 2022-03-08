<template>
  <div id="app">
    <app-Header></app-Header>
    <router-view></router-view>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,

    appFooter: Footer,
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
}
</style>
