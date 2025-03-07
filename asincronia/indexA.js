/*function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

function despedida() {
  console.log("Adiós, nos vemos luego.");
}

saludar("María", despedida);

//
function mostrarMensaje(mensaje) {
  console.log(mensaje);
}

function procesar(callback) {
  console.log("Procesando datos...");
  callback("Datos procesados correctamente.");
}

procesar(mostrarMensaje);

const pedirComida = new Promise((resolve, reject) => {
  let ingredientes = Math.random() > 0.5;

  setTimeout(() => {
    if (ingredientes) {
      resolve("🍔 Pedido listo: Hamburguesa.");
    } else {
      reject("❌ No hay ingredientes disponibles.");
    }
  }, 3000);
});

pedirComida
  .then((mensaje) => {
    console.log(mensaje);
  })

  .catch((error) => {
    console.error(error); // Si hubo un error
  });
  

function hacerPedidoPizza() {
  return new Promise((resolve, reject) => {
    let ingredientes = Math.random() > 0.5;

    setTimeout(() => {
      if (ingredientes) {
        resolve("🍕 Pedido listo: Pizza.");
      } else {
        reject("❌ No hay ingredientes para la pizza.");
      }
    }, 4000);
  });
}

async function hacerPedido() {
  try {
    console.log("⏳ Esperando el pedido...");
    let mensaje = await hacerPedidoPizza();
    console.log(mensaje);
  } catch (error) {
    console.error(error);
  }
}

hacerPedido();


function hacerPedidoPizza() {
  return new Promise((resolve, reject) => {
    let ingredientes = Math.random() > 0.3;
    setTimeout(() => {
      if (ingredientes) {
        resolve("🍕 Pedido listo: Pizza.");
      } else {
        reject("❌ No hay ingredientes para la pizza.");
      }
    }, 4000);
  });
}

function hacerPedidoHamburguesa() {
  return new Promise((resolve, reject) => {
    let ingredientes = Math.random() > 0.3;
    setTimeout(() => {
      if (ingredientes) {
        resolve("🍔 Pedido listo: Hamburguesa.");
      } else {
        reject("❌ No hay ingredientes disponibles.");
      }
    }, 3000);
  });
}

function hacerPedidoTacos() {
  return new Promise((resolve, reject) => {
    let ingredientes = Math.random() > 0.3;
    setTimeout(() => {
      if (ingredientes) {
        resolve("🌮 Pedido listo: Tacos.");
      } else {
        reject("❌ No hay ingredientes para los tacos.");
      }
    }, 5000);
  });
}
/* promise.all()
async function hacerPedidos() {
  try {
    console.log("⏳ Esperando pedidos...");
    let resultados = await Promise.all([
      hacerPedidoPizza(),
      hacerPedidoHamburguesa(),
      hacerPedidoTacos(),
    ]);
    console.log("✅ Todos los pedidos están listos:");
    console.log(resultados);
  } catch (error) {
    console.error("❌ Hubo un problema con algún pedido:", error);
  }
}


async function hacerPedidos() {
  console.log("⏳ Esperando pedidos...");

  let resultados = await Promise.allSettled([
    hacerPedidoPizza(),
    hacerPedidoHamburguesa(),
    hacerPedidoTacos(),
  ]);

  console.log("📦 Resultados de los pedidos:");
  resultados.forEach((resultado) => {
    if (resultado.status === "fulfilled") {
      console.log("✅", resultado.value);
    } else {
      console.error("❌", resultado.reason);
    }
  });
}

hacerPedidos();


async function obtenerUsuario(id) {
  if (id < 1 || id > 10) {
    throw new Error("⚠️ El ID debe estar entre 1 y 10.");
  }

  try {
    let respuesta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!respuesta.ok) {
      throw new Error("❌ Error en la respuesta del servidor.");
    }

    let usuario = await respuesta.json();
    console.log(
      "✅ Datos del usuario son correctos:",
      usuario.name,
      "-",
      usuario.email
    );
  } catch (error) {
    console.error("⚠️ Ocurrió un error:", error.message);
  }
}

obtenerUsuario(3);


function falloElRepartidor(nombre, tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`❌ Fallo el repartidor ${nombre}`);
    }, tiempo);
  });
}

function exitoRepartidor(nombre, tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`✅ Pedido de ${nombre} entregado en ${tiempo}ms`);
    }, tiempo);
  });
}

async function primerRepartidorExitoso() {
  try {
    let resultado = await Promise.any([
      falloElRepartidor("Repartidor1", 1000),
      exitoRepartidor("Repartidor2", 2000),
      falloElRepartidor("Repartidor3", 1500),
    ]);
    console.log("🚀 Primer repartidos exitoso:", resultado);
  } catch (error) {
    console.error("⚠️ Ningún repartidor tuvo éxito", error);
  }
}

primerRepartidorExitoso();
*/

function carreraDePedidos(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`📦 Pedido de ${nombre} entregado en ${tiempo}ms`);
    }, tiempo);
  });
}

function falloElPedido(nombre, tiempo) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(`❌ Fallo el pedido ${nombre}`);
    }, tiempo);
  });
}

async function CarreraDeEntregas() {
  try {
    let resultado = await Promise.race([
      carreraDePedidos("Pizza", 5000),
      falloElPedido("Hamburguesa", 7000),
      carreraDePedidos("Tacos", 6000),
    ]);

    console.log("🚀 Entrega más rápida:", resultado);
  } catch (error) {
    console.error("⚠️ No se completó ningún pedido:", error);
  }
}

CarreraDeEntregas();
