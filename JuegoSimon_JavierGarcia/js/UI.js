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

    init: (id, colorOn, colorOff) => {
        const tecla = document.getElementById(id);
        tecla.style.backgroundColor = colorOn;

        setTimeout(() => {
            tecla.style.backgroundColor = colorOff;
        });
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