import { JuegoSimon } from "./SimonGame.js";

export const UI = {

    lista: [],
    textRellenar : null,
    btnStart : null,
    jugar : new JuegoSimon(),
    sound : new Audio("./sonido/pitido.mp3"),

    init : (texto) => {
        UI.textRellenar = document.getElementById(texto);
        
    },

    initTecla: (id, colorOn, colorOff) => {
        const tecla = document.getElementById(id);
        tecla.style.backgroundColor = colorOff;

        tecla.addEventListener('click', () => {
            tecla.style.backgroundColor = colorOn;
            UI.sound.play();
            UI.jugar.pulsaTeclaJugador(id);

            anime({
                targets: tecla,
                 scale: [
                    { value: 1.15, duration: 320 },
                    { value: 1.0, duration: 220 }
                ],
            });

            setTimeout(() => {
                tecla.style.backgroundColor = colorOff;
            }, 500);

        });



        UI.lista.push({
            id: id,
            colorOn: colorOn,
            colorOff: colorOff,
        })

    },

    start: async (orden) => {
        UI.textRellenar.innerHTML = "Mostrando la secuencia";
        console.log(orden);
        for ( let index of orden ) {
            const elemento = UI.lista[index];
            await UI.pulsarTecla(elemento);
        }

        console.log(UI.lista);

        UI.jugar.turnoJugador1();
        UI.textRellenar.innerHTML = "Te toca repetirla!";
        UI.jugar.listaOrden = orden;
    },


    pulsarTecla: async (elemento) => {
        return new Promise((resolve) => {
            const tecla = document.getElementById(elemento.id);
            tecla.style.backgroundColor = elemento.colorOn;
            UI.sound.play();

            anime({
                targets: tecla,
                 scale: [
                    { value: 1.15, duration: 320 },
                    { value: 1.0, duration: 220 }
                ],
            });

            setTimeout(() => {
                tecla.style.backgroundColor = elemento.colorOff;
                resolve(99);
            }, 1000);
        });
    },

    mensajeCorrecto: () => {
        UI.textRellenar.innerHTML = "Correcto, sigue así";
    },

    mensajeMal: () => {
        UI.textRellenar.innerHTML = "Oh no, has fallado! Inicia una nueva partida.";
    },

    mensajeFinRonda: () => {
        UI.textRellenar.innerHTML = "ENHORABUENA, AVANZAS A LA SIGUIENTE RONDA";
    }

}