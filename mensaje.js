// Módulo propio: exporta una función que devuelve un mensaje personalizado.

function obtenerMensaje(nombre) {
  return `¡Hola, ${nombre}! Este mensaje viene de un módulo propio (mensaje.js).`;
}

module.exports = { obtenerMensaje };
