<script>
export default {
  methods: {
    colorchange() {
      this.$store.state.colorVal = Math.floor(Math.random()*360)
    },
    toggle() {
      this.$store.state.show = true
    }
  }
}
</script>

<template>
<div>
  <h2>Welcome</h2>
  <p>It's all about the things I can do with Vue so far</p>
  <button @:click="colorchange(); toggle()">Click Me</button>
  <div v-show=this.$store.state.show>
  <p>Notice the footer color changes anytime you click the "Click Me" button</p>
  <p>Checkout the <router-link to="/api">API</router-link> page</p>
  </div>
</div>
  
</template>

<style scoped>
h2 {
    font-weight: 500;
    font-size: 2.6rem;
  }
  
p {
    font-size: 1.2rem;
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
  margin-top: 50px;
}
</style>