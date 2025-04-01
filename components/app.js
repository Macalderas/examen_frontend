export function inicializarApp() {
  let root = document.getElementById("root");
  root.innerHTML = ""; // Limpiar contenido
  console.log("Aplicación iniciada correctamente.");

  let mensaje = document.createElement("h2");
  mensaje.textContent = "Bienvenido a la aplicación";
  root.appendChild(mensaje);
}
