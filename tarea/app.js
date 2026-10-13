class Tarea {
  constructor(nombre) {
    this.nombre = nombre;
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }

  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
}

const tareas = [
  new Tarea("Estudiar JavaScript"),
  new Tarea("Terminar el laboratorio"),
  new Tarea("Repasar POO"),
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
    elemento.textContent =
      tarea.nombre + (tarea.completada ? " (Completada) " : " ");

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";
    botonCompletar.addEventListener("click", function () {
      tarea.completar();
      mostrarTareas();
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
      tareas.splice(indice, 1);
      mostrarTareas();
    });

    elemento.appendChild(botonCompletar);
    elemento.appendChild(botonEliminar);
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

  const nuevaTarea = new Tarea(nombreTarea.value.trim());
  tareas.push(nuevaTarea);

  nombreTarea.value = "";
  mensaje.textContent = "Tarea agregada correctamente.";
  mostrarTareas();
});

nombreTarea.addEventListener("input", function () {
  mensaje.textContent = "";
});

mostrarTareas();
