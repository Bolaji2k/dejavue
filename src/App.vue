<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id = "container">
  <div id="content-wrap" >
  <Header/>
    <Navigation/>
  <RouterView />
  </div>
  <Footer/>
  </div>

</template>

<style>
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(22, 25, 26);
  font-family: verdana;
  font-size: 20px;
  color: rgb(27, 216, 74);
  padding-bottom: 50px;
}

#container {
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;    
}

</style>
