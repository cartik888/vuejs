<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">CRUD </router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Total Record</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Record</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>Vue Firebase Realtime Database CRUD</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
import 'boxicons';
export default {
  name: "app"
};
</script>

<style scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
}
</style>