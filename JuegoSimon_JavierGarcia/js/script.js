import { UI } from "./UI.js";
import { GameSimon } from "./GameSimon.js";
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

UI.init('teclaRoja', 'red', 'lightcoral');
UI.init('teclaAzul', 'blue', 'lightcyan');
UI.init('teclaAmarilla', 'yellow', 'lightyellow');
UI.init('teclaVerde', 'green', 'lightgreen');

GameSimon.add('teclaRoja', 'red', 'lightcoral');
GameSimon.add('teclaAzul', 'blue', 'lightcyan');
GameSimon.add('teclaAmarilla', 'yellow', 'lightyellow');
GameSimon.add('teclaVerde', 'green', 'lightgreen');

GameSimon.start();

GameSimon.setListaOrden([0,2,3,1,3,0,1,0]);

