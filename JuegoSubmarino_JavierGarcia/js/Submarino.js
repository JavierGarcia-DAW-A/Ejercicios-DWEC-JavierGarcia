
class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;

        console.log("El submarino se ha creado");
    }

    init(size) {
        this.x = Math.floor(Math.random() * size);
        this.y = Math.floor(Math.random() * size);

        console.log('Posicion inicial del submarino: ( ' + this.x + ', ' + this.y + ' )');
    }

    mover(vecinos) {

        const nuevaY = Math.floor(Math.random() * vecinos.length);
        const nuevaX = Math.floor(Math.random() * vecinos.length);

        this.x = nuevaX;
        this.y = nuevaY;

        console.log('Nueva posición aleatoria del submarino: ( ' + this.x + ', ' + this.y + ' )');
    }
}

export{Submarino}
