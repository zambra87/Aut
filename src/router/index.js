import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from '../../node_modules/@firebase/auth';
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import { auth } from '../auth'; // Importa el auth correctamente

// Definición de las rutas
const routes = [
  { path: '/signup', component: SignUp, meta: { requiresAuth: false } },
  { path: '/login', component: Login, meta: { requiresAuth: false } },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const user = getAuth(auth).currentUser; // Verifica si el usuario está autenticado
      if (user) {
        next(); // Si el usuario está autenticado, continúa
      } else {
        next('/login'); // Si no está autenticado, redirige a login
      }
    },
  },
  { path: '/', redirect: '/signup' }, // Redirige a la vista de signup por defecto
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
