import { UI } from "./UI.js";

export const GameSimon = {
    lista : [],
    listaOrden : [],

    setListaOrden : (listaOrden) => {
        GameSimon.listaOrden = listaOrden;
    },

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

            GameSimon.listaOrden.forEach((item) => {
                const elemento = GameSimon.lista[item];

                setTimeout(() => {
                    GameSimon.pulsarTecla(elemento);
                }, 1000);
            });

            console.log("Ejecutando");

        }, 1000);
    },

    
    pulsarTecla: (elemento) => {
        
        const tecla = document.getElementById(elemento.id);
        tecla.style.backgroundColor = elemento.colorOn;

        setTimeout(() => {
            tecla.style.backgroundColor = elemento.colorOff;
        },1000);

    }
}