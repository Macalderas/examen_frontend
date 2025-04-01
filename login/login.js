import { inicializarApp } from "../components/app.js";

export function mostrarLogin() {
    let root = document.getElementById("root");
    root.innerHTML = ""; // Limpiar contenido

    let formulario = document.createElement("form");

    let grupoCorreo = document.createElement("div");
    let labelCorreo = document.createElement("label");
    labelCorreo.htmlFor = "correo";
    labelCorreo.textContent = "Correo Electrónico";

    let inputCorreo = document.createElement("input");
    inputCorreo.type = "email";
    inputCorreo.id = "correo";
    inputCorreo.required = true;

    grupoCorreo.appendChild(labelCorreo);
    grupoCorreo.appendChild(inputCorreo);

    let grupoPassword = document.createElement("div");
    let labelPassword = document.createElement("label");
    labelPassword.htmlFor = "password";
    labelPassword.textContent = "Contraseña";

    let inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.id = "password";
    inputPassword.required = true;

    grupoPassword.appendChild(labelPassword);
    grupoPassword.appendChild(inputPassword);

    let botonEnvio = document.createElement("button");
    botonEnvio.type = "submit";
    botonEnvio.textContent = "Iniciar Sesión";

    formulario.appendChild(grupoCorreo);
    formulario.appendChild(grupoPassword);
    formulario.appendChild(botonEnvio);

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        inicializarApp(); // Una vez autenticado, se inicia la app
    });

    root.appendChild(formulario);
}
