<template>
    <div>
      <form @submit.prevent="login">
        <div>
          <label for="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword, auth } from "../auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      async login() {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            this.email,
            this.password
          );
          console.log("Usuario logueado:", userCredential.user);
          
          // Limpia los campos del formulario
          this.resetForm();
  
          this.$router.push("/home"); // Redirige a la vista Home
        } catch (error) {
          this.errorMessage = error.message;
          console.error("Error al iniciar sesión:", error);
        }
      },
      resetForm() {
        this.email = "";
        this.password = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
  </style>
  