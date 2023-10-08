<script setup>

</script>

<template>
  <footer v-bind:style="{backgroundColor:'hsl('+$store.state.colorVal+',87%,69%)'}">Footer</footer>
</template>

<style>
footer {
  font-weight: bold;
  color: rgb(22, 21, 21);
  padding: 50px;
  text-align: center;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: 0% 0%;
  position: fixed;
  bottom: 0pt;
  left: 0pt;
  width: 100%; 
  height: 50px; 
} 
</style>