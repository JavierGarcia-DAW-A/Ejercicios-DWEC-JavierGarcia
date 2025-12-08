// Importación de clases necesarias
import { JuegoSimon } from "./SimonGame.js";

// Creación y exportación de una constante la cuál va a tener métodos y propiedades que se encargarán de editar la interfaz del juego
export const UI = {

    // Creamos una lista vacía donde próximamente guardarémos las teclas
    lista: [],

    // La propiedad que se va a encargar de editar el mensaje de estado del DOM, y lo ponemos a null hasta que se le de un valor.
    textRellenar : null,

    // Creamos un objeto de la clase JuegoSimon para poder usar sus métodos y propiedades en UI.
    jugar : new JuegoSimon(),

    // Creamos un objeto de la clase Audio y le vamos a específicar donde se ubica el sonido que queremos reproducir
    sound : new Audio("./sonido/pitido.mp3"),

    // Declaramos la función init la cuál recibe por parámetro un id y ese id se lo asignamos a textRellenar
    init : (texto) => {
        UI.textRellenar = document.getElementById(texto);
        
    },

    // En está función lo que hacemos es inicializar las teclas y añadirlas a la lista, y cuando sea el turno del usuario y haga click se iluminará la tecla, reproducirá el sonido guardado y la ampliará mediante una animación y posteriormente la apagará,
    // y llamará a la función de pulsaTeclaJugador, la cuál esta en SimonGame.js y ahí comprobará si es correcta la tecla o no, pasándole por parámetro el id de la tecla que ha pulsado.
    initTecla: (id, colorOn, colorOff) => {
        const tecla = document.getElementById(id);
        tecla.style.backgroundColor = colorOff;

        tecla.addEventListener('click', () => {
            tecla.style.backgroundColor = colorOn;
            UI.sound.play();
            UI.jugar.pulsaTeclaJugador(id);

            anime({
                targets: tecla,
                 scale: [
                    { value: 1.15, duration: 320 },
                    { value: 1.0, duration: 220 }
                ],
            });

            setTimeout(() => {
                tecla.style.backgroundColor = colorOff;
            }, 500);

        });



        UI.lista.push({
            id: id,
            colorOn: colorOn,
            colorOff: colorOff,
        })

    },

    // Está función recibe como parámetro el orden de teclas que debe iluminar, cambia el estado del juego y lo que hace es recorrer el array de posiciones lo guarda en un elemento el cuál contendrá la tecla especificada
    // y posteriormente la iluminará y no pasará a la siguiente línea hasta que no haya finalizado. Y una finalizado en su totalidad cambia el estado del jugador, el estado del juego y vuelve a declarar el orden de la lista.
    start: async (orden) => {
        UI.textRellenar.innerHTML = "Mostrando la secuencia";
        console.log(orden);
        for ( let index of orden ) {
            const elemento = UI.lista[index];
            await UI.pulsarTecla(elemento);
        }

        console.log(UI.lista);

        UI.jugar.turnoJugador1();
        UI.textRellenar.innerHTML = "Te toca repetirla!";
        UI.jugar.listaOrden = orden;
    },


    // Está función se encarga de iluminar las teclas, recibe por parámetro una tecla y devuelve una promesa la cuál lo que hace es coger el id de esa tecla, le cambia el color, reproduce el sonido y la aumenta de tamaño
    // y luego vuelve a su estado normal una vez pasado 1s.
    pulsarTecla: async (elemento) => {
        return new Promise((resolve) => {
            const tecla = document.getElementById(elemento.id);
            tecla.style.backgroundColor = elemento.colorOn;
            UI.sound.play();

            anime({
                targets: tecla,
                 scale: [
                    { value: 1.15, duration: 320 },
                    { value: 1.0, duration: 220 }
                ],
            });

            setTimeout(() => {
                tecla.style.backgroundColor = elemento.colorOff;
                resolve(99);
            }, 1000);
        });
    },

    // Estas 3 funciones se van a utilizar en SimonGame.js, estas se encargan de cambiar el estado del juego, en función de si el jugador acierta o no.
    mensajeCorrecto: () => {
        UI.textRellenar.innerHTML = "Correcto, sigue así";
    },

    mensajeMal: () => {
        UI.textRellenar.innerHTML = "Oh no, has fallado! Inicia una nueva partida.";
    },

    mensajeFinRonda: () => {
        UI.textRellenar.innerHTML = "ENHORABUENA, AVANZAS A LA SIGUIENTE RONDA";
    },
    
    // Intento de planteamiento de la voz

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