import { formAPIBuilder } from './Form/FormAPIBuilder.js'

const formAPI = formAPIBuilder.getInput("formulario");

formAPI.addInput('hola','text','Escribe tu nombre', true);
formAPI.addInput('edad','number','Escribe tu edad', true);


