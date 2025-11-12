/* Importamos las clases que vamos a necesitar */
import { Submarino } from "./Submarino.js";
import { Vecinos, Celda } from "./Celda.js";

/* Aquí definimos y exportamos UI, que se encarga de la interfaz de usuario */
export const UI = {
    /* Declarar game, que luego cambiará al juego que se quiera jugar */
    game : null,
    /* Creamos un objeto, con los controles del juego y DOM */
    control : {
        board: null,
        status: null,
        size: null,
        casillaTemplate: null,
        casillaDisparada: null
    },

    /* Creamos una instancia submarino */
    submarino : new Submarino(),

    /* Iniciamos los valores de control del juego */
    init: (domControl, game)=>{
        UI.control.board = document.getElementById(domControl.board);
        UI.control.status = document.getElementById(domControl.status);
        UI.control.size = domControl.size;
        UI.control.casillaTemplate = document.getElementById(domControl.templateCasilla);
        UI.control.casillaDisparada = document.getElementById(domControl.casillaDisparada);

        
    },

    /* Creamos un array bidimensional de las celdas */
    malla : Array.from({ length: 5 }, (_, i) => 
        Array.from({ length: 5 }, (_, j) => 
            new Celda(i, j)
        )
    ),

    /* Definimos los eventos */
    setEvent: (domControl) => {
        document.getElementById(domControl.btnShot[0]).addEventListener('click', ()=>{
            domControl.btnShot[1]();
        });

        document.getElementById(domControl.btnRestart[0]).addEventListener('click', ()=>{
            domControl.btnRestart[1]();
        });

    },
    /* Inicializamos el juego */
    start(game) {

        UI.game = game;

        const tabla = UI.control.board;
        const total = UI.control.size;

        tabla.innerHTML = "";

        tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
        Array.from({ length: total*total }, (_, i) => {
        const clon = UI.control.casillaTemplate.content.cloneNode(true);
        const casilla = clon.querySelector('.casilla')
        casilla.textContent = ` ${i+1} `;
        casilla.dataset.fila = Math.floor(i/total);
        casilla.dataset.columna = i%total;
        tabla.appendChild(clon);
        
    });
    /*
        const malla = [];
        malla.forEach((item,i)=>item.forEach((celda,j)=>{
            if(i>0) celda.nuevoVecino(Vecinos.ARRIBA,malla[i-1][j]);
            if(i<UI.control.size) celda.nuevoVecino(Vecinos.ABAJO,malla[i+1][j]);
            if(j>0) celda.nuevoVecino(Vecinos.IZQUIERDA,malla[i][j-1]);
            if(j<UI.control.size-1) celda.nuevoVecino(Vecinos.DERECHA,malla[i][j+1]);
        }));
        
        this.control.board = malla.flat();
    */
        this.submarino.init(UI.control.size);
        UI.control.status.textContent = "Juego iniciado";
    },
    /* Para cambiar el estado del juego */
    changeStatus(newStatus) {
        UI.control.status.textContent = newStatus;
    }
}