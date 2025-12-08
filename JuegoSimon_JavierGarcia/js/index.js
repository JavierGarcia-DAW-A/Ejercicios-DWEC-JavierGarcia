// Importación de las clases que nos hagan falta
import { UI } from "./UI.js";
import { JuegoSimon } from "./SimonGame.js";

// Pasandole como parámetro a la función init de UI el id de el mensaje de estado
UI.init("info");

// Creación de un nuevo objeto de la clase JuegoSimon para poder usar sus métodos.
const juego = new JuegoSimon();

// Declaración de las teclas, indicándole su id, su color encendido y su color apagado
UI.initTecla('teclaRoja', 'red', 'lightcoral');
UI.initTecla('teclaAzul', 'blue', 'lightcyan');
UI.initTecla('teclaAmarilla', 'yellow', 'lightyellow');
UI.initTecla('teclaVerde', 'green', 'lightgreen');

// Declaración de la primera ronda del juego
juego.setListaOrden([0,2,3,1,3,0,1,0]);


// Hasta que el jugador no pulse el botón de iniciar juego, pues que no comience el juego. Para que no se inicie de forma automática.
document.getElementById("btn").addEventListener('click', () => {
        juego.start();
});


