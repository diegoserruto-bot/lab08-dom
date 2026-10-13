const tareas = [
  "Estudiar JavaScript",
  "Terminar el laboratorio",
  "Repasar POO",
];

const lista = document.querySelector("#listaTareas");
const formulario = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const mensaje = document.querySelector("#mensaje");
const cantidad = document.querySelector("#cantidad");

function mostrarTareas() {
  lista.innerHTML = "";

  tareas.forEach(function (tarea, indice) {
    const elemento = document.createElement("li");
    elemento.textContent = tarea + " ";

    const boton = document.createElement("button");
    boton.textContent = "Eliminar";

    boton.addEventListener("click", function () {
      tareas.splice(indice, 1);
      mostrarTareas();
    });

    elemento.appendChild(boton);
    lista.appendChild(elemento);
  });

  cantidad.textContent = tareas.length;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (nombreTarea.value.trim() === "") {
    mensaje.textContent = "Escribe una tarea antes de agregarla.";
    return;
  }

  tareas.push(nombreTarea.value.trim());
  nombreTarea.value = "";
  mensaje.textContent = "Tarea agregada correctamente.";
  mostrarTareas();
});

nombreTarea.addEventListener("input", function () {
  mensaje.textContent = "";
});

mostrarTareas();
