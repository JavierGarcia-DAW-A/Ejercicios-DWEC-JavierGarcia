/* Importamos las clases que vamos a necesitar */
import { Vecinos } from "./Celda.js";
import { Celda } from "./Celda.js";

/* Creamos y exportamos la clase GameSubmarine, el encargado de la lógica del juego */
export class GameSubmarine {
    /* En el contructor inicializamos el juego con UI */
    constructor(UIControl) {
        this.UIControl = UIControl;
        this.UIControl.start(this);
    }

    /* Método para disparar */
    shot() {
        // Lógica para manejar el disparo en el juego de submarinos
        // Actualizo interfaz
        console.log(this);
        this.UIControl.changeStatus("¡Disparo realizado!");

        /* Aquí cogemos la casilla disparada */
        const casillaDisparada = this.UIControl.control.casillaDisparada.value-1;
        //console.log("Casilla disparada: " + casillaDisparada);

        /* Y aquí sacamos la fila y la columna de esa celda */
        const fila = Math.floor(casillaDisparada / this.UIControl.control.size);
        const columna = (casillaDisparada % this.UIControl.control.size);
        //console.log("Fila: " + fila + " Columna: " + columna);

        /* Ahora comprobamos si se ha acertado al submarino o no */
        if (fila === this.UIControl.submarino.y && columna === this.UIControl.submarino.x) {
            /* Si has hundido el submarino, el estado cambiará */
            this.UIControl.changeStatus("¡Has hundido el submarino!");
            //this.UIControl.start(this);
        } else {
            /* Y si fallas, te cambiará el estado y se mueve el submarino */
            this.UIControl.changeStatus("¡Agua!");
            //console.log(this.UIControl.malla);
            /* Llamamos a la función mover del submarino, y le pasamos las celdas del tablero */
            this.UIControl.submarino.mover(this.UIControl.malla);
            /*
            let celda = find((item) => item.x === this.UIControl.submarino.x && item.y === this.UIControl.submarino.y);
            this.UIControl.submarino.mover(celda.vecinos.filter((item) => item != null));
            */
            console.log("El submarino se ha movido.");
        }
    }


}