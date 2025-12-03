import { GameSimon } from "./GameSimon.js";

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

    init : (texto) => {
        UI.textRellenar = document.getElementById(texto);
    },

    initTecla: (id, colorOn, colorOff, accion) => {
        const tecla = document.getElementById(id);
        tecla.style.backgroundColor = colorOff;

        tecla.addEventListener('click', () => {
            tecla.style.backgroundColor = colorOn;
            accion(id);
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

    start: async (orden, fin) => {
        for (let index of orden) {
            const elemento = UI.lista[index];
            await UI.pulsarTecla(elemento);
        }

        console.log(UI.lista);

        fin();
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