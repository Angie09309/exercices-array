/*

// ========================
// Corrección de mascotas en array de objetos
// ========================
const arrayTest = [
  { nombre: "Daniel", edad: "26", mascota: "Lucas" },
  { nombre: "Angie", edad: "21", mascota: "Nasus" },
];

//corregir los datos en un nuevo array con el uso de la función map

const cambiarMascotas = arrayTest.map((persona) => {
  if (persona.nombre === "Daniel") {
    return {
      ...persona,
      mascota: "Nasus",
    };
  }

  if (persona.nombre === "Angie") {
    return {
      ...persona,
      mascota: "Lucas",
    };
  }
});

console.log(cambiarMascotas);

// ========================
// Corrección de nombres de mascotas en objetos anidados
// ========================

const arrayTest2 = [
  { nombre: "Daniel", edad: "26", mascota: { nombre: "Lucas", edad: 15 } },
  { nombre: "Angie", edad: "21", mascota: { nombre: "Nasus", edad: 9 } },
];

const cambiarMascotas2 = arrayTest2.map((persona) => {
  if (persona.nombre === "Daniel") {
    return {
      ...persona,
      mascota: {
        ...persona.mascota,
        nombre: "Nasus",
      },
    };
  }

  if (persona.nombre === "Angie") {
    return {
      ...persona,
      mascota: {
        ...persona.mascota,
        nombre: "Lucas",
      },
    };
  }
});

// ========================
// Ejercicio 1: Agregar productos al inventario (.push())
// ========================
const inventario = ["Cuaderno", "Lapiz", "Borrador", "Colores"];
console.log(inventario);
inventario.push("Marcadores", "Lapiceros");
console.log(inventario);

// ========================
// Ejercicio 2: Mostrar los productos (.forEach())
// ========================
inventario.forEach((items, index) => {
  console.log(`Producto ${index + 1}: ${items}`);
});

// ========================
// Ejercicio 3: Buscar un producto (.indexOf())
// ========================
let productoBuscado = prompt(
  "Ingresa el nombre del producto que deseas buscar:"
);

let posicion = inventario.indexOf(productoBuscado);

console.log(posicion);

// ========================
// Ejercicio 4: Ordenar el inventario con .sort()
// ========================
inventario.sort();
console.log(inventario);

// ========================
// Ejercicio 5: Lista de tareas (.push())
// ========================
const tareas = ["Lavar los platos", "Hacer ejercicio"];

let nuevasTareas = prompt("Ingresa una tarea:");

tareas.push(nuevasTareas);

console.log(tareas);

// ========================
// Ejercicio 6: Contar palabras en una oración (.forEach())
// ========================

let oración = prompt("Ingresa una oración:");

if (oración) {
  // Verifica que oración no sea null ni una cadena vacía
  let palabras = oración.split(" ");
  palabras.forEach((items, index) => {
    console.log(`Palabra ${index + 1}: ${items}`);
  });
} else {
  console.log("No ingresaste ninguna oración.");
}

// ========================
// Ejercicio 7: Buscar un contacto en la agenda (.indexOf())
// ========================
const contactos = ["Angie", "Paola", "Daniel"];

let buscarNombre = prompt("Ingresa el nombre del contacto que deseas buscar:");

let posicion1 = contactos.indexOf(buscarNombre);

if (posicion1 !== -1) {
  console.log(`La posición del contacto es ${posicion1}.`);
} else {
  console.log("El contacto no está en la lista.");
}

// ========================
// Ejercicio 8: Ordenar puntuaciones en orden ascendente (.sort())
// ========================
const puntuaciones = [1, 2, 3, 7, 4, 9, 6, 3, 7, 9, 16, 17, 14];

puntuaciones.sort((a, b) => a - b);
console.log(puntuaciones);

// ========================
// Ejercicio 9: Eliminar el último producto (.pop())
// ========================

const productos = ["Manzanas", "Peras", "Naranjas", "Uvas"];
console.log(productos);

productos.pop();
console.log(productos);

// ========================
// Ejercicio 10: Ejercicio 2: Crear un nuevo array con precios con descuento (.map())
// ========================

const precios = [150, 300, 499, 1200, 750];

console.log(precios);

const preciosConDescuento = precios.map((precio) => {
  return precio * 0.8;
});

console.log("Precios originales:", precios);
console.log("Precios con descuento:", preciosConDescuento);

// ========================
// Ejercicio 11: Verificar si un nombre está en la lista (.includes())
// ========================

const nombres = ["Ana", "Xiomara", "karol", "Juliana", "Paula"];

let usuario = prompt("Ingresa el nombre del contacto que deseas buscar:");
let encontrado = nombres.includes(usuario);

if (encontrado) {
  console.log(`El nombre de la persona sí está en la lista: ${usuario}.`);
} else {
  console.log("El nombre no está en la lista.");
}

// ========================
// Ejercicio 12: Invertir una frase (.reverse())
// ========================
let frase = prompt("Ingresa la frase:");

if (frase) {
  let nevafrase = frase.split(" ");
  nevafrase.reverse();
  let fraseverdadera = nevafrase.join(" ");
  console.log(fraseverdadera);
} else {
  console.log("No ingresaste ninguna frase.");
}

// ========================
// Ejercicio 13: Convertir temperaturas de Celsius a Fahrenheit (.map())
// ========================
const temperaturasCelsius = [18, 25, 30, 22, 27];

const temperaturasFahrenheit = temperaturasCelsius.map((Celsius) => {
  return (Celsius * 9) / 5 + 32;
});

console.log("Temperaturas en Celsius:", temperaturasCelsius);
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);


// ========================
// Ejercicio 14: Comprobar si un usuario tiene acceso (.includes())
// ========================
const usuariosPremium = [
  "Angie21",
  "Daniel26",
  "PaolaVIP",
  "XiomaraPro",
  "JulianaTop",
];

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

if (usuariosPremium.includes(nombreUsuario)) {
  console.log("¡Bienvenido! Tienes acceso al contenido exclusivo.");
} else {
  console.log("Lo siento, no tienes acceso a este contenido.");
}


// ========================
// Ejercicio 15: Invertir una lista de números (.reverse())
// ========================
const numeros = [2, 5, 8, 12, 15, 20];
console.log(numeros);
numeros.reverse();
console.log(numeros);


// ========================
// Ejercicio 16: Capitalizar nombres (.map())
// ========================
const nombres = ["carlos", "luna", "julian", "danna"];

const nuevosNombres = nombres.map((nombre) => {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
});

console.log(nuevosNombres);


// ========================
// Ejercicio 17: Eliminar el primer pedido de una lista (.shift() 
// ========================
const pedidos = ["arroz", "aceite", "carne"];
console.log(pedidos);
pedidos.shift();
console.log(pedidos);


// ========================
// Ejercicio 18: Filtrar números pares (.filter())
// ========================

const numeros = [2, 5, 7, 6, 8, 1, 4, 16];

let pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares)


// ========================
// Ejercicio 19: Calcular el total de una compra (.reduce())
// ========================
const precios = [150, 299.99, 499, 1200, 750, 89.5];

let total = precios.reduce((precio, num) => precio + num, 0);

console.log("el precio total es: " + total);



// ========================
// Ejercicio 20: Editar una lista de invitados (.splice())
// ========================
const invitados = ["Santiago", "Valeria", "Mateo", "Camila", "Andrés"];
invitados.splice(2, 1, "Anna");
console.log(invitados);

invitados.splice(2, 0, "Anna"); // Agrega "Anna" sin eliminar a "Mateo"
console.log(invitados);

invitados.splice(4, 1); // Solo elimina "Andrés"
console.log(invitados);


// ========================
// Ejercicio 21: Extraer una parte de un catálogo (.slice())
// ========================
const productos = [
  "Laptop",
  "Mouse",
  "Teclado",
  "Monitor",
  "Impresora",
  "Auriculares",
];

console.log(productos);

let nuevosProductos = productos.slice(2, 5);

console.log(nuevosProductos);

// ========================
// Ejercicio 22: Encontrar un número mayor a 50 (.find())
// ========================
const numeros = [12, 78, 45, 90, 33, 67, 25, 55, 8, 102];
let numerMayor = numeros.find((numero) => numero >= 50);

console.log(numerMayor);


// ========================
// Ejercicio 23: Verificar si hay estudiantes aprobados (.some())
// ========================
const calificaciones = [85, 92, 78, 65, 90, 100, 73, 88, 59, 47];
let notas = calificaciones.some((nota) => nota >= 60);
console.log(notas);


// ========================
// Ejercicio 24: Filtrar productos en oferta (.filter())
// ========================
const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 45 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Auriculares", precio: 80 },
];

const valor = productos.filter((producto) => producto.precio < 50);
console.log("Productos originales:", productos);
console.log("Productos en oferta:", valor);


// ========================
// Ejercicio 23: Sumar calificaciones (.reduce())
// ========================
const calificaciones = [85, 92, 78, 65, 90, 100, 73, 88, 59, 47];
let notas = calificaciones.reduce((acum, nota) => acum + nota, 0);
console.log(notas);
*/

// ========================
// Ejercicio 24: Verificar edades (.every())
// ========================
const edades = [20, 18, 10, 19, 18, 11, 39];
const mayorEdad = edades.every((edad) => edad >= 18);
console.log(mayorEdad);
