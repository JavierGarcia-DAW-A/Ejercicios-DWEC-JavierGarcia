import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

UI.init({
    board: 'gameBoard',
    status: 'gameStatus',
    size: 5,
    templateCasilla: 'casilla-template',
    casillaDisparada: 'inputCasilla'
});

const gameInstance = new GameSubmarine(UI);

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

