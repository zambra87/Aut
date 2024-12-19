import firebaseApp from "../src/firebaseconfig";  // Asegúrate de importar correctamente
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Inicializar la autenticación de Firebase con la instancia de firebaseApp
const auth = getAuth(firebaseApp);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
