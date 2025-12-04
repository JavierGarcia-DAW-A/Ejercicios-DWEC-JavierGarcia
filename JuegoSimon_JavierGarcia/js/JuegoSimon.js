import { UI } from "./UI.js";

export class JuegoSimon {
    constructor() {
        this.listaOrden = [];
        this.turnoJugador = false;
        this.indice = 0;
    }

    setListaOrden (listaOrdenP) {
        this.listaOrden = listaOrdenP;
    };

    start () {
        UI.textRellenar.innerHTML = "Mostrando la secuencia";
        this.turnoJugador = false;
        UI.start(this.listaOrden);
    };

    turnoJugador1() {
        UI.textRellenar.innerHTML = "Te toca repetirla!";
        this.turnoJugador = true;
        console.log("Ahora le toca al jugador");
    };

    pulsaTeclaJugador (idTecla) {

        
        if ( this.turnoJugador === true ) {

            if ( this.indice < this.listaOrden.length - 1 ) {

                console.log(this.listaOrden.length);

                if (idTecla === UI.lista[this.listaOrden[this.indice]].id) {

                    UI.textRellenar.innerHTML = "Correcto, sigue así!";
                    console.log("Comprobación correcta")
                    this.indice = this.indice + 1;
                    console.log(this.indice);

                } else {

                    UI.textRellenar.innerHTML = "Oh no, has fallado! Inicia una nueva partida."
                    console.log("Comprobación mala");
                    this.turnoJugador = false;

                }

            } else {

                console.log("has llegado al tope");
                UI.textRellenar.innerHTML = "MUY BIEN! SIGUIENTE RONDA!"
                let nuevoElemento = Math.floor(Math.random() * 4);
                this.listaOrden.push(nuevoElemento);
                this.indice = 0;

                setTimeout(() => {
                    this.start();
                },2000);

            }
        }
    };

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

