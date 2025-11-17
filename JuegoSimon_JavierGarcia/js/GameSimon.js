import { UI } from "./UI.js";

export const GameSimon = {
    lista : [],

    add : (id, colorOn, colorOff) => {
        GameSimon.lista.push({
            id: id,
            colorOn: colorOn,
            colorOff: colorOff
        })
        console.log(GameSimon.lista);
    },

    start: () => {
        setTimeout(() => {
            /*
            let numLista = Math.floor(Math.random() * GameSimon.lista.length);
            let elemento = GameSimon.lista[numLista];
            */
            let elemento = GameSimon.lista.pop();
            if (elemento != undefined) UI.pulsarTecla(elemento.id,elemento.colorOn,elemento.colorOff);
            console.log(elemento);
            lista.
            console.log("Ejecutando");
        },1000)
    }   
}