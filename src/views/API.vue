<template>
    <div>
      <p>This API gets you random pictures of dogs. Click the Fetch button to get the pictures.</p>
      <button @click="fetchData">Fetch</button>
      <div v-if="data" id="dataDiv">
      <img :src="data.data.message" alt="message"><br>
     </div>
    </div>
  </template>
  
  <style scoped>
    p {
    text-align: center;
    font-size: 1.2rem;
    }
    img {
    height: 500px;
    width: 500px;
    }
    div {
    text-align: center;
    }
    button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    border-radius: 32px;
    margin-bottom: 20px;
    }
    
  </style>

<script>
import axios from 'axios'

 export default {
    data() {
      return {
        data: null,
      };
    },
  methods: {
      async fetchData() {      
        this.data = await axios.get("https://dog.ceo/api/breeds/image/random");
      }
    }
  };
</script>
  