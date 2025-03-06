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
  
*/
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

