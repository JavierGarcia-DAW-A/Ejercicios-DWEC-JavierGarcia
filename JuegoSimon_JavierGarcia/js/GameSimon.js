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
            await UI.pulsarTecla(elemento);
        }

        for (let index of GameSimon.listaOrden) {
            const elemento = GameSimon.lista[index];
            console.log(elemento.id);
            await GameSimon.turnoJugador(elemento).then((valor) => {
                console.log("Siguiente tecla");
            }, (valor) => {
                console.log("Has fallado");
            });
        }
    },

    turnoJugador: (elemento) => {
        return new Promise((resolve, reject) => {
            /*GameSimon.pruebaVoz();*/
            document.addEventListener('click', (e) => {
                if (e.target.id === elemento.id) {
                    console.log("Voy bien");
                    resolve(99);
                } else {
                    console.log(elemento.id);
                    console.log(e.target.id);
                    console.log("Mal, fatal, horrible");
                    reject(34);
                }
            })
        })
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

