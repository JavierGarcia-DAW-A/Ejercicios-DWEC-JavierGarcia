import { Vecinos } from "./Celda.js";
import { Celda } from "./Celda.js";

export class GameSubmarine {
    constructor(UIControl) {
        this.UIControl = UIControl;
        this.UIControl.start(this);
    }

    shot() {
        // Lógica para manejar el disparo en el juego de submarinos
        // Actualizo interfaz
        console.log(this);
        this.UIControl.changeStatus("¡Disparo realizado!");

        const casillaDisparada = this.UIControl.control.casillaDisparada.value-1;
        //console.log("Casilla disparada: " + casillaDisparada);

        const fila = Math.floor(casillaDisparada / this.UIControl.control.size);
        const columna = (casillaDisparada % this.UIControl.control.size);
        //console.log("Fila: " + fila + " Columna: " + columna);

        if (fila === this.UIControl.submarino.y && columna === this.UIControl.submarino.x) {
            this.UIControl.changeStatus("¡Has hundido el submarino!");
            //this.UIControl.start(this);
        } else {
            this.UIControl.changeStatus("¡Agua!");
            console.log(this.UIControl.malla);
            this.UIControl.submarino.mover(this.UIControl.malla);
            /*
            let celda = find((item) => item.x === this.UIControl.submarino.x && item.y === this.UIControl.submarino.y);
            this.UIControl.submarino.mover(celda.vecinos.filter((item) => item != null));
            */
            console.log("El submarino se ha movido.");
        }
    }


}