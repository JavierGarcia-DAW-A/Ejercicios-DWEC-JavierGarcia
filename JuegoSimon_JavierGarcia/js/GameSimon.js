import { UI } from "./UI.js";

export const GameSimon = {
    lista: [],
    listaOrden: [],

    setListaOrden: (listaOrden) => {
        GameSimon.listaOrden = listaOrden;
    },

    add: (id, colorOn, colorOff) => {
        GameSimon.lista.push({
            id: id,
            colorOn: colorOn,
            colorOff: colorOff
        })
        console.log(GameSimon.lista);
    },


    start: async () => {
        for (let index of GameSimon.listaOrden) {
            const elemento = GameSimon.lista[index];
            await GameSimon.pulsarTecla(elemento);
        }

        for (let index of GameSimon.listaOrden) {
            await GameSimon.turnoJugador(index);
            index = index + 1;
        }
    },


    pulsarTecla: async (elemento) => {
        return new Promise((resolve) => {

            const tecla = document.getElementById(elemento.id);
            tecla.style.backgroundColor = elemento.colorOn;

            setTimeout(() => {
                tecla.style.backgroundColor = elemento.colorOff;
                resolve();
            }, 1000);
        });
    },

    turnoJugador: (index) => {
        return new Promise((resolve) => {
            document.addEventListener('click', (e) => {
                if (e.target.id === GameSimon.lista[index].id) {
                    console.log("Voy bien");
                } else {
                    console.log(GameSimon.lista[index].id);
                    console.log(e.target.id);
                    console.log("Mal, fatal, horrible");
                }
            })
        })
    }
}

