// Importamos las clases necesarias
import { UI } from "./UI.js";

// Creamos y exportamos una clase llamada JuegoSimon, la cuál contendrá métodos y propiedades las cuales controlarán todo lo relativo a la lógica del juego
export class JuegoSimon {
    // Creamos un constructor el cuál va a contener, el orden de reproducción de teclas, que en principio lo ponemos como nulo.
    // Si es el turno del jugador, para ejecutar o no algunas cosas, el cuál comenzará a false
    // Y el indice que lo hemos creado para que a la hora de comprobar podamos avanzar de tecla.
    constructor() {
        this.listaOrden = [];
        this.turnoJugador = false;
        this.indice = 0;
    }

    // Mediante esta función que recibe un array con el orden de la primera ronda, lo añadimos a la lista de nuestra clase
    setListaOrden (listaOrdenP) {
        this.listaOrden = listaOrdenP;
    };

    // Mediante este método comenzaremos con el juego, pasándole por parámetro a la función que se encuentra en UI, el orden que ya habríamos guardado previamente y poniendo el turno de jugador a false para que este no pueda hacer nada.
    start () {
        this.turnoJugador = false;
        UI.start(this.listaOrden);
    };

    // Este método se encarga de que una vez que haya terminado de mostrar la secuencia y le toque jugar al usuario para comprobar las teclas, ponemos el turno del jugador a true
    turnoJugador1() {
        this.turnoJugador = true;
        console.log("Ahora le toca al jugador");
    };

    // Y este método se encarga de la comprobación de las teclas, primeramente comprueba si es el turno del jugador, y si lo es comprueba si el índice es menor que la longitud del array de posiciones
    // ya que si fuera mayor no tendría posiciones que comprobar. Si esa condición se cumple ahora comprueba si el id de la tecla que ha pulsado el usuario coincide con el id de la tecla correspondiente
    // a dicha posición del array de posiciones. En caso afirmativo, te permite continuar y te lo va mostrando en el mensaje con las funciones de UI, en caso negativo deja de comprobar teclas y te cambia el estado del juego.
    // Si el usuario ha acertado toda la secuencia, generá un número aleatorio entre 0 y 3 y lo guarda en una variable, para luego añadirselo al array de posiciones mostrando así una tecla más y repitiendo todo el proceso.
    
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

