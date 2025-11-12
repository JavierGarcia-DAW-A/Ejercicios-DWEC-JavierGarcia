/* Creamos la clase Submarino */
class Submarino {
    /* En el constructor definimos x e y, que serán las posiciones del submarino */
    constructor() {
        this.x = 0;
        this.y = 0;

        console.log("El submarino se ha creado");
    }
    /* Inicializamos la posición del submarino de forma aleatoria */
    init(size) {
        this.x = Math.floor(Math.random() * size);
        this.y = Math.floor(Math.random() * size);

        console.log('Posicion inicial del submarino: ( ' + this.x + ', ' + this.y + ' )');
    }
    /* Con este método moveremos el submarino de posición */
    mover(vecinos) {
        /* Creamos dos variables que generarán aleatoriamente la nueva posición del submarino */
        const nuevaY = Math.floor(Math.random() * vecinos.length);
        const nuevaX = Math.floor(Math.random() * vecinos.length);

        /* Asignamos las nuevas posiciones al submarino*/
        this.x = nuevaX;
        this.y = nuevaY;

        console.log('Nueva posición aleatoria del submarino: ( ' + this.x + ', ' + this.y + ' )');
    }
}

/* Exportamos Submarino */
export{Submarino}
