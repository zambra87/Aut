<template>
  <div id="app">
    <!-- Navbar -->
    <nav>
      <ul>
        <!-- Enlace a la página de Sign Up -->
        <li><router-link to="/signup">Sign Up</router-link></li>
        
        <!-- Enlace a la página de Login -->
        <li><router-link to="/login">Login</router-link></li>
        
        <!-- Enlace a la página de Home -->
        <li><router-link to="/home">Home</router-link></li>
      </ul>
    </nav>
    
    <!-- Aquí se renderizan las vistas -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Estilos para el Navbar */
nav {
  background-color: #333;
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>


