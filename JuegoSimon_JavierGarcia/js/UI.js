//import { GameSimon } from "./GameSimon.js";
import { JuegoSimon } from "./JuegoSimon.js";

export const UI = {
    /*
        container:null,
        template:null,
    
        init: (config) =>{
            UI.container = document.getElementById(config.container);
            UI.template = document.getElementById(config.template);   
        },
    
        add:() => {
            const clon = UI.template.content.cloneMode(true);
            const box = clon.querySelector('.box');
    
            UI.container.appendChild(clon);
            
        },
    */

    lista: [],
    textRellenar : null,
    jugar : new JuegoSimon(),

    init : (texto) => {
        UI.textRellenar = document.getElementById(texto);
    },

    initTecla: (id, colorOn, colorOff) => {
        const tecla = document.getElementById(id);
        tecla.style.backgroundColor = colorOff;

        tecla.addEventListener('click', () => {
            tecla.style.backgroundColor = colorOn;
            UI.jugar.pulsaTeclaJugador(id);
            setTimeout(() => {
                tecla.style.backgroundColor = colorOff;
            }, 500);
        })



        UI.lista.push({
            id: id,
            colorOn: colorOn,
            colorOff: colorOff,
        })

    },

    start: async (orden) => {
        console.log(orden);
        for ( let index of orden ) {
            const elemento = UI.lista[index];
            await UI.pulsarTecla(elemento);
        }

        console.log(UI.lista);

        UI.jugar.turnoJugador1();
        UI.jugar.listaOrden = orden;
    },


    pulsarTecla: async (elemento) => {
        return new Promise((resolve) => {
            const tecla = document.getElementById(elemento.id);
            tecla.style.backgroundColor = elemento.colorOn;

            setTimeout(() => {
                tecla.style.backgroundColor = elemento.colorOff;
                resolve(99);
            }, 1000);
        });
    },

}