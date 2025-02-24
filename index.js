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
