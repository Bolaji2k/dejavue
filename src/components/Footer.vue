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
  position:absolute;
  left: 0;
  bottom: 0;
  width: 100%; 
  height: 50px; 
} 
</style>