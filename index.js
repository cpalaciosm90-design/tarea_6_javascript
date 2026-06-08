// INVENTARIO DISCOS DE BTS
const inventarioBTS = [
  { nombre: "Proof (Standard Edition)", precio: 65000, stock: 12 },
  { nombre: "Map of the Soul: 7", precio: 32000, stock: 0 },
  { nombre: "FACE - Jimin (Solo Album)", precio: 28000, stock: 5 },
  { nombre: "Love Yourself: Tear", precio: 30000, stock: 3 },
  { nombre: "BE (Deluxe Edition)", precio: 45000, stock: 0 }
];

console.log("--- INVENTARIO INICIAL ---", inventarioBTS);

// FILTER: Obtener solo los discos que tienen stock disponible (mayor a 0)
const discosDisponibles = inventarioBTS.filter(disco => disco.stock > 0);
console.log("--- DISCOS DISPONIBLES ---", discosDisponibles);

// MAP: Aplicar un 15% de descuento a todos los discos
const discosConDescuento = inventarioBTS.map(disco => {
  return {
    ...disco,
    precio: Math.round(disco.precio * 0.85)
  };
});
console.log("--- DISCOS CON 15% DESCUENTO ---", discosConDescuento);

// REDUCE: Calcular el valor total del inventario
const valorTotalInventario = inventarioBTS.reduce((acumulador, disco) => {
  return acumulador + (disco.precio * disco.stock);
}, 0);
console.log("--- VALOR TOTAL DEL INVENTARIO ---", `$${valorTotalInventario} CLP`);

// FIND: Encontrar el disco más caro del inventario
const precioMaximo = Math.max(...inventarioBTS.map(disco => disco.precio));
const discoMasCaro = inventarioBTS.find(disco => disco.precio === precioMaximo);
console.log("--- DISCO MÁS CARO ---", discoMasCaro);

// FUNCIÓN ASÍNCRONA

// ASYNC/AWAIT: Simular guardado de datos
const guardarInventario = async (inventario) => {
  console.log("Conectando con los servidores de HYBE para guardar el inventario...");
  
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });

  console.log("¡Inventario guardado exitosamente!");
};

// Ejecutamos la función
guardarInventario(inventarioBTS);