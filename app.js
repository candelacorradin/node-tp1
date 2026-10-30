// Mi primer script en Node.js

const os = require('os');
const { obtenerMensaje } = require('./mensaje');

const nombre = 'Candela Corradin';
const motivo =
  'Quiero aprender backend para construir aplicaciones completas de punta a punta ' +
  'y diseñar las APIs e integraciones que conectan productos con IA.';

// 1. Mensaje de presentación
console.log('=== Presentación ===');
console.log(`Nombre: ${nombre}`);
console.log(`Motivo para aprender backend: ${motivo}`);

// 2. Módulo nativo os
const memoriaLibreMB = (os.freemem() / 1024 / 1024).toFixed(2);

console.log('\n=== Información del sistema (módulo os) ===');
console.log(`Sistema operativo: ${os.type()} (${os.platform()})`);
console.log(`Memoria libre: ${memoriaLibreMB} MB`);

// 3. Módulo propio
console.log('\n=== Módulo propio ===');
console.log(obtenerMensaje(nombre));
