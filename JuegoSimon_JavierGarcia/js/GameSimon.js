import { UI } from "./UI.js";

export const GameSimon = {
    listaOrden: [],
    turnoJugador : false,
    indice : 0,

    setListaOrden: (listaOrden) => {
        GameSimon.listaOrden = listaOrden;
    },

    start: () => {
        UI.textRellenar.innerHTML = "Mostrando la secuencia";
        GameSimon.turnoJugador = false;
        UI.start(GameSimon.listaOrden, GameSimon.turnoJugador1);
    },

    turnoJugador1: () => {
        UI.textRellenar.innerHTML = "Te toca repetirla!";
        GameSimon.turnoJugador = true;
        console.log("Ahora le toca al jugador");
    },

    pulsaTeclaJugador : (idTecla) => {

        if ( GameSimon.turnoJugador === true ) {

            if ( GameSimon.indice < GameSimon.listaOrden.length ) {

                console.log(GameSimon.listaOrden.length);
                if (idTecla === UI.lista[GameSimon.listaOrden[GameSimon.indice]].id) {
                    UI.textRellenar.innerHTML = "Correcto, sigue así!";
                    console.log("Comprobación correcta")
                    GameSimon.indice = GameSimon.indice + 1;
                    console.log(GameSimon.indice);
                } else {
                    UI.textRellenar.innerHTML = "Oh no, has fallado!"
                    console.log("Comprobación mala");
                    GameSimon.turnoJugador = false;

                }

            } else {

                console.log("has llegado al tope");
                let nuevoElemento = Math.floor(Math.random() * 4);
                GameSimon.listaOrden.push(nuevoElemento);
                GameSimon.indice = 0;
                GameSimon.start();
            }
        }
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

