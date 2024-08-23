#!/usr/bin/env node
// Definimos el shebang para indicar que este archivo debe ser interpretado por Node.js.
// Esto permite ejecutar el script directamente desde la línea de comandos sin especificar "node" antes del nombre del archivo.

// Importamos el módulo 'random' desde el archivo '../src/index.js'.
// El módulo debe exportar la función 'funnyCommit' para que podamos usarla aquí.
let random = require('../src/index.js');


// Llamamos a la función 'funnyCommit' del módulo 'random'.
// Esto generará y mostrará un mensaje de commit aleatorio en la consola.
random.funnyCommit();