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
    },
    

    /*
    pruebaVoz: () => {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechRecognitionEvent =
        SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

        var colors = [
        "blue",
        "green",
        "red",
        "yellow",
        ];

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();
        console.log("Ready to receive a color command.");

        recognition.onresult = function (event) {
        const color = event.results[0][0].transcript;
        console.log(color);
        };

        recognition.onspeechend = function () {
        recognition.stop();
        };

        recognition.onnomatch = function (event) {
        diagnostic.textContent = "I didn't recognise that color.";
        };

        recognition.onerror = function (event) {
        diagnostic.textContent = "Error occurred in recognition: " + event.error;
        };
    }
    */
    

}