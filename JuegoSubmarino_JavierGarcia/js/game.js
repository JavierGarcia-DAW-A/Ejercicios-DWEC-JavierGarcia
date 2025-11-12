/* Importamos las clases que vamos a necesitar */
import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

/* Inicializamos UI, pasando los elemnentos del DOM que va a necesitar */
UI.init({
    board: 'gameBoard',
    status: 'gameStatus',
    size: 5,
    templateCasilla: 'casilla-template',
    casillaDisparada: 'inputCasilla'
});

/* Creamos una instancia del juego */
const gameInstance = new GameSubmarine(UI);

/* Definimos los eventos, con el id del botón y la función que tiene que ejecutar, cuando nosotros le digamos */
UI.setEvent({
    btnShot: ['btnShot', ()=> gameInstance.shot()],
    btnRestart: ['btnRestart', ()=> UI.start(gameInstance)]
});

/* Esto es otra forma, cuidado con la perdida del contexto this.
/*
UI.setEvent({
    btnShot: ['btnShot', gameInstance.shot.bind(gameInstance)]
});
*/

