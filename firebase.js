// Importa as funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticação

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAy3lnmXY4rt5fRLHvh0emvqqbjKiddckI",
  authDomain: "gerador-turbo-shot.firebaseapp.com",
  projectId: "gerador-turbo-shot",
  storageBucket: "gerador-turbo-shot.firebasestorage.app",
  messagingSenderId: "961554334939",
  appId: "1:961554334939:web:8f383bfc4952133f94f8fe",
  measurementId: "G-2DKCFTCRGG"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Instância de autenticação

// Exporte a instância de autenticação para ser utilizada em outros arquivos
export { auth };
