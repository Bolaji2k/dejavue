<script>

</script>

<template>
  <div>
  <nav>
  <RouterLink to="/">Home</RouterLink>|
  <RouterLink to="/about">About</RouterLink>|
  <RouterLink to="/api">API</RouterLink>
 </nav>
  </div>
</template>

<style scoped>
a {
  color: #e5e6f0;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
} 
a.router-link-exact-active {
  color: #2fe06a;
  background: #000;
}
</style>
