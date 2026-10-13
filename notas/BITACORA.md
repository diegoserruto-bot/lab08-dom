# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. Navegador usado: Brave

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                   | Se mantiene al recargar (Si/No) |
| ---------------------------- | ------------------------------------------- | ------------------------------- |
| textContent desde la consola | Cambió el título a "Hola desde JavaScript". | No                              |
| textContent desde app.js     | El título cambió a "Hola TECSUP".           | Sí                              |
| style.color                  | El título se puso de color azul.            | Sí                              |
| classList.add                | El párrafo obtuvo un fondo amarillo.        | Sí                              |
| createElement + appendChild  | Se agregó JavaScript a la lista.            | Sí                              |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara           | Cuánto suma por acción |
| -------------- | ------------------------------- | ---------------------- |
| click          | Hacer un clic en el botón.      | 1                      |
| dblclick       | Hacer doble clic en el botón.   | 1                      |
| mouseover      | Pasar el cursor sobre el botón. | 1                      |

- `evento.type`: mostró el tipo de evento que se ejecutó, por ejemplo, `click`.
- `evento.target`: mostró el elemento HTML que recibió el evento, en este caso, el botón **Sumar 1**.

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Qué pasó en la pantalla                                                   | Se recargó la página (Sí/No) |
| --------------------------------------- | ------------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El saludo cambió mientras escribía mi nombre.                             | No                           |
| Enviar sin preventDefault               | Apareció el mensaje de enviado, pero desapareció al recargarse la página. | Sí                           |
| Enviar con preventDefault, correo sin @ | Apareció el mensaje de error en rojo indicando que faltaba @.             | No                           |
| Enviar con preventDefault, correo con @ | Apareció el mensaje de enviado junto con el correo ingresado.             | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | -----: | ------------------- | -----------------: |
| laptop  | Laptop  |   2500 | Laptop - S/ 2500.00 |               1875 |
| mouse   | Mouse   |     45 | Mouse - S/ 45.00    |              33.75 |
| teclado | Teclado |    120 | Teclado - S/ 120.00 |                 90 |
| monitor | Monitor |    680 | Monitor - S/ 680.00 |                510 |

- Usar una clase permite crear varios productos con la misma estructura sin escribir todo desde cero.
- También facilita agregar nuevos productos y calcular sus descuentos.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina           | Correcto (Si/No) |
| --------------- | ------------------------------------- | ---------------- |
| Cuaderno 12.50  | S/ 12.50                              | Sí               |
| + Lapicero 3.20 | S/ 15.70                              | Sí               |
| + Mochila 89.90 | S/ 105.60                             | Sí               |
| Sin Number()    | Aparece un error al mostrar el precio | No               |

| Pieza  | Linea de tu codigo donde aparece               | Para que sirve                            |
| ------ | ---------------------------------------------- | ----------------------------------------- |
| DOM    | `document.querySelector("#total")`             | Permite acceder a elementos de la pagina. |
| Evento | `formProducto.addEventListener("submit", ...)` | Detecta cuando se envia el formulario.    |
| Objeto | `const producto = new Producto(...)`           | Crea un producto con su nombre y precio.  |
