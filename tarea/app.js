const tareas = [
  "Estudiar JavaScript",
  "Terminar el laboratorio",
  "Repasar POO",
];

const lista = document.querySelector("#listaTareas");

tareas.forEach(function (tarea) {
  const elemento = document.createElement("li");
  elemento.textContent = tarea;
  lista.appendChild(elemento);
});
