import { UI } from "./UI.js";
//import { GameSimon } from "./GameSimon.js";
import { JuegoSimon } from "./JuegoSimon.js";
// import { TimeHandler } from "./TimeHandler.js";

// UI.init({
//     container: "container",
//     template: "template",
// });

// TimeHandler.timeAdder(UI, 10, 3000);
// TimeHandler.timeAdder(UI, 10, 2000);
// console.log(TimeHandler.status());
/* 
const control = {
    lista: [],
    add: (tecla, colorOn, colorOff) => control.lista.push({
        id: tecla,
        colorOn: colorOn,
        colorOff: colorOff
    }),

    start: () => {
        let elemento = control.lista.pop();
        if (elemento != undefined) pulsarTecla(elemento.id,elemento.colorOn,elemento.colorOff);
    }
}
*/

//control.addTecla('tecla', 'blue', 'red');

//console.log(control.lista.pop());

//UI.pulsarTecla('tecla', 'blue', 'red');

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


