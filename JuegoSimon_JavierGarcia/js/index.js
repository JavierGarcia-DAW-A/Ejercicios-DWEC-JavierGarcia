import { UI } from "./UI.js";
import { JuegoSimon } from "./SimonGame.js";

UI.init("info");

const juego = new JuegoSimon();

UI.initTecla('teclaRoja', 'red', 'lightcoral');
UI.initTecla('teclaAzul', 'blue', 'lightcyan');
UI.initTecla('teclaAmarilla', 'yellow', 'lightyellow');
UI.initTecla('teclaVerde', 'green', 'lightgreen');

juego.setListaOrden([0,2,3,1,3,0,1,0]);

document.getElementById("btn").addEventListener('click', () => {
        juego.start();
});


