# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas pendientes para organizar actividades y reconocer cuáles necesito realizar.

## Version 1: solo DOM

**Qué agregué:** una lista con tres tareas creadas mediante JavaScript.

**Por qué:** para practicar cómo seleccionar elementos HTML y agregar contenido a la página.

**Qué cambió en el comportamiento:** las tres tareas aparecen automáticamente al abrir la página. Todavía no se puede interactuar con ellas.

Código principal:

```js
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
```

## Version 2: con eventos

**Qué agregué:** un formulario para agregar tareas, botones para eliminarlas y un mensaje para validar los datos ingresados.

**Por qué:** para practicar los eventos `submit`, `click` e `input` y permitir que el usuario interactúe con la lista.

**Qué cambió en el comportamiento:** ahora puedo agregar y eliminar tareas sin recargar la página. Si intento agregar una tarea vacía, aparece un mensaje de error.

Código principal:

```js
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
```

## Version 3: con clases y objetos

Pendiente de implementar.

## Donde uso DOM, eventos y objetos

Pendiente de completar.

## Pruebas realizadas

Pendiente de completar.

## Por que disene asi mi clase

Pendiente de completar.
