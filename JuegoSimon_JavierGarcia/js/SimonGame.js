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
        this.turnoJugador = false;
        UI.start(this.listaOrden);
    };

    turnoJugador1() {
        this.turnoJugador = true;
        console.log("Ahora le toca al jugador");
    };

    pulsaTeclaJugador (idTecla) {

        
        if ( this.turnoJugador === true ) {

            if ( this.indice < this.listaOrden.length - 1 ) {

                console.log(this.listaOrden.length);

                if (idTecla === UI.lista[this.listaOrden[this.indice]].id) {

                    /* UI.textRellenar.innerHTML = "Correcto, sigue así!"; */
                    UI.mensajeCorrecto();
                    console.log("Comprobación correcta")
                    this.indice = this.indice + 1;
                    console.log(this.indice);

                } else {

                    /* UI.textRellenar.innerHTML = "Oh no, has fallado! Inicia una nueva partida." */
                    UI.mensajeMal();
                    console.log("Comprobación mala");
                    this.turnoJugador = false;

                }

            } else {

                console.log("has llegado al tope");
                UI.mensajeFinRonda();
                let nuevoElemento = Math.floor(Math.random() * 4);
                this.listaOrden.push(nuevoElemento);
                this.indice = 0;

                setTimeout(() => {
                    this.start();
                },2000);

            }
        }
    };
}

