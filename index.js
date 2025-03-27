import { renderApp } from "./components/app.js";

let root = document.getElementById("root");

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", renderApp);

async function obtenerDatos() {
    try {
      const respuesta = await fetch('http://localhost:3001/api/datos');
      const datos = await respuesta.json();
      console.log('Datos recibidos:', datos);
      // Aquí puedes manipular el DOM para mostrar los datos
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }
  
  